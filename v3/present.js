/* EduZone Learn v3 - two-way voice presenter.
   Every idea and every solution can be presented in two ways:
     official : the precise, teacher way (rule + method)
     story    : a story / real-life example that shows the same method
   EZ3.presenter(host, ways, opts)
     ways  = { official: [sentence, ...], story: [sentence, ...] }   (HTML allowed)
     opts  = { step: true  -> lines appear one at a time ("Next step") as in a worked example
               auto: true  -> start playing at once
               title: optional heading html }
   The chosen way is remembered (ez3_way). */
(function () {
  "use strict";
  var E = window.EZ3;

  E.WAYS = {
    official: { icon: "🎓", en: "Official way", ar: "الطريقة الرسمية" },
    story: { icon: "📖", en: "Story way", ar: "بالقصة والمثال" }
  };
  E.way = function () { var v = E.store.get("ez3_way", "official"); return v === "story" ? "story" : "official"; };

  E.presenter = function (host, ways, opts) {
    opts = opts || {};
    var t = E.t, way = E.way();
    if (!ways.story || !ways.story.length) way = "official";
    var root = E.el("div", "pres" + (opts.step ? " pres-stepmode" : ""));
    host.innerHTML = "";
    host.appendChild(root);
    var playing = null, shown = 0;

    function lines() { return ways[way] || []; }
    function render() {
      E.hush(); playing = null;
      shown = opts.step ? 0 : lines().length;
      var segs = ["official", "story"].filter(function (k) { return ways[k] && ways[k].length; });
      root.innerHTML =
        '<div class="pres-top">' + (opts.title ? '<div class="pres-title">' + opts.title + "</div>" : "") +
        '<div class="seg pres-ways" role="group">' + segs.map(function (k) {
          return '<button type="button" data-way="' + k + '" class="' + (k === way ? "on" : "") + '" aria-pressed="' + (k === way) + '">' + E.WAYS[k].icon + " " + E.L(E.WAYS[k]) + "</button>";
        }).join("") + "</div>" +
        '<button type="button" class="btn sm primary pres-play">' + t("▶ Play", "▶ تشغيل") + "</button></div>" +
        '<ol class="pres-lines ' + way + '">' + lines().map(function (s, i) {
          return '<li data-i="' + i + '"' + (i >= shown ? ' class="hid"' : "") + ">" + s + "</li>";
        }).join("") + "</ol>" +
        (opts.step ? '<div class="btn-row pres-steprow"><button type="button" class="btn sm pres-next">' + t("Next step ▸", "الخطوة التالية ◂") + '</button><button type="button" class="btn sm ghost pres-all">' + t("Show all", "اعرض الكل") + "</button></div>" : "");

      root.querySelectorAll(".pres-ways button").forEach(function (b) {
        b.onclick = function () { if (b.dataset.way === way) return; way = b.dataset.way; E.store.set("ez3_way", way); render(); if (opts.onWay) opts.onWay(way); };
      });
      root.querySelector(".pres-play").onclick = function () { if (playing) stop(); else play(opts.step && shown < lines().length ? shown : 0); };
      root.querySelectorAll(".pres-lines li").forEach(function (li) {
        li.onclick = function () { if (li.classList.contains("hid")) return; stop(); mark(Number(li.dataset.i)); E.speak(lines()[Number(li.dataset.i)]); };
      });
      if (opts.step) {
        root.querySelector(".pres-next").onclick = function () { stop(); if (shown < lines().length) { reveal(shown); mark(shown - 1); E.speak(lines()[shown - 1]); } };
        root.querySelector(".pres-all").onclick = function () { stop(); while (shown < lines().length) reveal(shown); mark(-1); };
        stepButtons();
      }
    }
    function reveal(i) {
      var li = root.querySelector('.pres-lines li[data-i="' + i + '"]');
      if (li) { li.classList.remove("hid"); li.classList.add("pop"); }
      shown = Math.max(shown, i + 1);
      stepButtons();
    }
    function stepButtons() {
      if (!opts.step) return;
      var done = shown >= lines().length;
      var nx = root.querySelector(".pres-next"), al = root.querySelector(".pres-all");
      if (nx) nx.disabled = done;
      if (al) al.hidden = done;
      if (done && opts.onFinish) opts.onFinish();
    }
    function mark(i) {
      root.querySelectorAll(".pres-lines li").forEach(function (li) {
        var k = Number(li.dataset.i);
        li.classList.toggle("on", k === i);
        li.classList.toggle("past", i >= 0 && k < i);
      });
      var on = root.querySelector(".pres-lines li.on");
      if (on && on.scrollIntoView && opts.scroll !== false) { try { on.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {} }
    }
    function setBtn() {
      var b = root.querySelector(".pres-play");
      if (b) b.innerHTML = playing ? t("⏸ Stop", "⏸ إيقاف") : t("▶ Play", "▶ تشغيل");
      root.classList.toggle("playing", !!playing);
    }
    function play(from) {
      playing = E.speakSeq(lines(), function (i) { reveal(i); mark(i); }, function () { playing = null; setBtn(); mark(-1); if (opts.onFinish) opts.onFinish(); }, from || 0);
      setBtn();
    }
    function stop() { if (playing) { E.hush(); playing = null; setBtn(); } }

    render();
    if (opts.auto) play(0);
    return { play: play, stop: stop, root: root };
  };
})();
