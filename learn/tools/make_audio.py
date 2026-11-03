#!/usr/bin/env python3
"""Generate ElevenLabs narration for every lesson step and quiz question.

Usage:
  export ELEVENLABS_API_KEY=...        (never commit the key)
  python3 tools/make_audio.py --list-voices
  python3 tools/make_audio.py --dry-run           # count characters, spend nothing
  python3 tools/make_audio.py [--lesson ID] [--lang en|ar]

Files land in audio/<key>.mp3 and audio/manifest.json lists them. The key is
djb2 over UTF-16 code units of "<lang>|<text>" - the same function as app.js -
so only new or edited text is ever re-generated.
"""
import argparse, glob, json, os, re, sys, time, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(ROOT, "audio")
VOICES = os.path.join(ROOT, "tools", "voices.json")
API = "https://api.elevenlabs.io/v1"
# Key lives outside the repo: env ELEVENLABS_API_KEY, or this file (chmod 600).
KEYFILE = os.path.expanduser("~/.config/eduzone/elevenlabs_key")


def djb2(s):
    h = 5381
    data = s.encode("utf-16-le")
    for i in range(0, len(data), 2):
        h = ((h * 33) ^ (data[i] | data[i + 1] << 8)) & 0xFFFFFFFF
    return format(h, "x")


def plain(s):
    s = re.sub(r"\[(\d+)/(\d+)\]", r"\1 / \2", s or "")
    return s.replace("**", "")


def L(obj, lang):
    if obj is None:
        return ""
    if isinstance(obj, str):
        return obj
    return obj.get(lang, obj.get("en", ""))


def texts(lesson, lang):
    """Exactly what app.js speaks for each step / question."""
    out = []
    for s in lesson["steps"]:
        lines = L(s.get("lines"), lang) or []
        t = L(s.get("say"), lang) or plain(L(s.get("text"), lang) + (". " + ". ".join(lines) if lines else ""))
        out.append(t)
    for q in lesson["quiz"]:
        out.append(L(q.get("say"), lang) or plain(L(q.get("q"), lang)))
    return [t for t in out if t]


def write_manifest(have):
    json.dump({"keys": sorted(have)}, open(os.path.join(AUDIO, "manifest.json"), "w"), indent=0)


def api(path, key, body=None):
    req = urllib.request.Request(API + path, headers={"xi-api-key": key, "Content-Type": "application/json"})
    if body is not None:
        req.data = json.dumps(body).encode()
        req.add_header("Accept", "audio/mpeg")
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list-voices", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--lesson")
    ap.add_argument("--lang", choices=["en", "ar"])
    a = ap.parse_args()

    key = os.environ.get("ELEVENLABS_API_KEY", "")
    if not key and os.path.exists(KEYFILE):
        key = open(KEYFILE).read().strip()
    if (a.list_voices or not a.dry_run) and not key:
        sys.exit("Set ELEVENLABS_API_KEY in your shell first.")

    if a.list_voices:
        for v in json.loads(api("/voices", key))["voices"]:
            l = v.get("labels", {})
            print("%-28s %s  lang=%-4s accent=%-14s gender=%-7s cat=%s" % (
                v["name"], v["voice_id"], l.get("language", "?"), l.get("accent", "?"),
                l.get("gender", "?"), v.get("category", "?")))
        return

    cfg = json.load(open(VOICES))
    os.makedirs(AUDIO, exist_ok=True)
    have = set(os.path.splitext(f)[0] for f in os.listdir(AUDIO) if f.endswith(".mp3"))
    files = sorted(glob.glob(os.path.join(ROOT, "content", "lessons", "*.json")))
    if a.lesson:
        files = [f for f in files if os.path.basename(f) == a.lesson + ".json"]

    todo = []
    for f in files:
        lesson = json.load(open(f, encoding="utf-8"))
        for lang in ([a.lang] if a.lang else ["en", "ar"]):
            for t in texts(lesson, lang):
                k = djb2(lang + "|" + t)
                if k not in have and (lang, k, t) not in todo:
                    todo.append((lang, k, t))

    chars = sum(len(t) for _, _, t in todo)
    print("%d clips to generate, %d characters" % (len(todo), chars))
    if a.dry_run:
        return
    for i, (lang, k, t) in enumerate(todo, 1):
        v = cfg[lang]
        if not v.get("voice_id"):
            sys.exit("Set a voice_id for '%s' in tools/voices.json (use --list-voices)." % lang)
        body = {"text": t, "model_id": v["model_id"], "voice_settings": v["settings"]}
        for attempt in range(4):
            try:
                mp3 = api("/text-to-speech/" + v["voice_id"], key, body)
                break
            except urllib.error.HTTPError as e:
                sys.exit("ElevenLabs error %s: %s" % (e.code, e.read()[:300]))
            except (urllib.error.URLError, OSError) as e:
                if attempt == 3:
                    sys.exit("Network error, re-run to resume: %s" % e)
                time.sleep(5 * (attempt + 1))
        open(os.path.join(AUDIO, k + ".mp3"), "wb").write(mp3)
        have.add(k)
        write_manifest(have)
        print("[%d/%d] %s %s  %s" % (i, len(todo), lang, k, t[:60]))

    write_manifest(have)
    print("manifest: %d clips" % len(have))


if __name__ == "__main__":
    main()
