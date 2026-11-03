# EduZone Learn — Unified Learning Hub

A browser-based, GitHub Pages-ready unified front end assembled from the two supplied projects:
- **EduZone Learn Code**: 51 original lesson JSON files in 13 units, their step-by-step activities, quizzes, English/Arabic switching, and its interactive widgets. All of these are preserved under `learn/`.
- **NileStem**: a science/STEM discovery concept adapted into four self-contained interactive mini labs under `labs.html` (circuit/Ohm's law, density and buoyancy, square-pyramid volume, pH). These are lightweight new implementations inspired by the uploaded simulations, not exact React component ports.

## Launch

To test locally:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 . Do **not** open `index.html` using `file://`, since lesson JSON is fetched by JavaScript.

## GitHub Pages

Upload **the contents** of this directory (not the enclosing directory) to a public repository. In Settings → Pages, deploy from `main` → `/ (root)`; `index.html` is the landing page. All navigation uses relative paths, so a repository subdirectory URL is supported. No build step, API key, or server needed.

## Key limits

- Grade 4 Mathematics is where the uploaded EduZone project contains a substantial lesson library. The marketing descriptions of K–12 coverage in the original projects do not mean complete lesson curricula for all grades; this hub does not claim that.
- NileStem's full React interface and six original detailed simulators are **not** ported here. Four simplified, working experiments are integrated into this static application. Their results are educational approximations.
- The NileStem AI curriculum agent needs a backend and a protected API key; it is deliberately excluded from this public static version.
- Browser text-to-speech varies by device and is not suitable as verified Arabic pronunciation instruction.
- Your two original ZIP archives were **not modified**. This ZIP is a new combined user-facing app.

## Structure

`index.html`, `unified.css`, `unified.js` — new friendly learning hub.

`labs.html`, `labs.js` — four responsive science mini labs.

`learn/` — complete original EduZone Learn static lesson player, lesson catalog, step content and widgets.
