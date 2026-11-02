#!/usr/bin/env python3
"""Validate content/: catalog <-> lesson files, bilingual fields, quiz answers,
widget params and maths, Arabic speech fields. Exit 1 on any error.

  python3 tools/validate.py
"""
import glob, json, os, re, sys
from fractions import Fraction

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDGETS = {
    "fraction-shade": ["parts", "target"],
    "fraction-equivalent": ["num", "den"],
    "number-line": ["target"],
    "place-value": ["target"],
    "compare": ["a", "b"],
}
STEP_TYPES = {"explain", "example", "interactive"}
CURRICULA = {"egypt", "ccss"}
errors, warnings = [], []


def err(where, msg):
    errors.append("%s: %s" % (where, msg))


def warn(where, msg):
    warnings.append("%s: %s" % (where, msg))


def bi(where, obj, name, required=True):
    """A bilingual field must have non-empty en and ar."""
    if obj is None:
        if required:
            err(where, "missing %s" % name)
        return
    if not isinstance(obj, dict) or not obj.get("en") or not obj.get("ar"):
        err(where, "%s needs both en and ar" % name)
        return
    if re.search(r"[؀-ۿ]", obj["en"]):
        err(where, "%s.en contains Arabic text" % name)
    if not re.search(r"[؀-ۿ]", obj["ar"] if isinstance(obj["ar"], str) else " ".join(obj["ar"])):
        err(where, "%s.ar has no Arabic text" % name)


def needs_ar_say(text):
    # Fractions or operators read badly by Arabic TTS: require a spoken version.
    return bool(re.search(r"\[\d+/\d+\]|[=<>×÷]", text))


def check_lesson(path, meta):
    where = os.path.basename(path)
    try:
        l = json.load(open(path, encoding="utf-8"))
    except Exception as e:
        err(where, "bad JSON: %s" % e)
        return
    if l.get("id") != meta["id"]:
        err(where, "id %r != catalog id %r" % (l.get("id"), meta["id"]))
    bi(where, l.get("title"), "title")
    bi(where, l.get("objective"), "objective")
    refs = l.get("refs") or {}
    if not set(refs) & CURRICULA:
        err(where, "refs must map to at least one curriculum")
    steps = l.get("steps") or []
    if len(steps) < 3:
        err(where, "fewer than 3 steps")
    for i, s in enumerate(steps):
        w = "%s step %d" % (where, i + 1)
        if s.get("type") not in STEP_TYPES:
            err(w, "bad type %r" % s.get("type"))
        bi(w, s.get("text"), "text")
        if s.get("lines") is not None:
            ln = s["lines"]
            if not isinstance(ln, dict) or len(ln.get("en", [])) != len(ln.get("ar", [])) or not ln.get("en"):
                err(w, "lines need equal-length en and ar lists")
        if s.get("say") is not None:
            bi(w, s["say"], "say")
        ar_text = (s.get("text") or {}).get("ar", "") + " ".join((s.get("lines") or {}).get("ar", []))
        if needs_ar_say(ar_text) and not (s.get("say") or {}).get("ar"):
            warn(w, "Arabic text has fractions/symbols but no say.ar for narration")
        if s.get("type") == "interactive":
            wid = s.get("widget")
            if wid not in WIDGETS:
                err(w, "unknown widget %r" % wid)
                continue
            p = s.get("params") or {}
            for k in WIDGETS[wid]:
                if k not in p:
                    err(w, "%s missing param %s" % (wid, k))
            bi(w, s.get("prompt"), "prompt")
            if wid == "fraction-shade" and not (0 < p.get("target", 0) <= p.get("parts", 0)):
                err(w, "target must be 1..parts")
            if wid == "number-line":
                n, d = p["target"]
                lo, hi, div = p.get("min", 0), p.get("max", 1), p.get("divisions", 4)
                if not (lo <= Fraction(n, d) <= hi) or (Fraction(n, d) * div).denominator != 1:
                    err(w, "target %d/%d not on a tick of the line" % (n, d))
            if wid == "fraction-equivalent" and p.get("targetDen"):
                if p["targetDen"] % p["den"] or p["targetDen"] // p["den"] > p.get("maxK", 4):
                    err(w, "targetDen unreachable with maxK")
            if wid == "place-value" and p["target"] >= 10 ** p.get("places", 7):
                err(w, "target too large for places")
    quiz = l.get("quiz") or []
    if len(quiz) < 4:
        err(where, "fewer than 4 quiz questions")
    seen = set()
    for i, q in enumerate(quiz):
        w = "%s quiz %d" % (where, i + 1)
        bi(w, q.get("q"), "q")
        bi(w, q.get("explain"), "explain")
        o = q.get("options") or {}
        en, ar = o.get("en", []), o.get("ar", [])
        if len(en) < 3 or len(en) != len(ar):
            err(w, "options need >=3 entries, same count en/ar")
        if len(set(en)) != len(en):
            err(w, "duplicate options")
        if not isinstance(q.get("answer"), int) or not 0 <= q["answer"] < len(en):
            err(w, "answer index out of range")
        if q.get("q", {}).get("en") in seen:
            err(w, "duplicate question")
        seen.add(q.get("q", {}).get("en"))
        if needs_ar_say(q.get("q", {}).get("ar", "")) and not (q.get("say") or {}).get("ar"):
            warn(w, "Arabic question has fractions/symbols but no say.ar")


def main():
    cat = json.load(open(os.path.join(ROOT, "content", "catalog.json"), encoding="utf-8"))
    ids = set()
    for u in cat["units"]:
        bi(u["id"], u.get("title"), "title")
        if not set(u.get("refs", {})) & CURRICULA:
            err(u["id"], "unit refs must map to a curriculum")
        for meta in u["lessons"]:
            if meta["id"] in ids:
                err(meta["id"], "duplicate lesson id")
            ids.add(meta["id"])
            path = os.path.join(ROOT, "content", "lessons", meta["id"] + ".json")
            if not os.path.exists(path):
                err(meta["id"], "lesson file missing")
                continue
            check_lesson(path, meta)
    for f in glob.glob(os.path.join(ROOT, "content", "lessons", "*.json")):
        if os.path.basename(f)[:-5] not in ids:
            warn(os.path.basename(f), "not listed in catalog")
    for m in warnings:
        print("WARN ", m)
    for m in errors:
        print("ERROR", m)
    print("%d lessons, %d errors, %d warnings" % (len(ids), len(errors), len(warnings)))
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
