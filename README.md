# EduZone Learn

Interactive, bilingual (English / Arabic) Math and Science practice for Grades 1-12,
aligned to the Egyptian National and American curricula. Static site, runs on GitHub Pages.

## Run locally
```bash
python3 -m http.server 8000
```
Open http://localhost:8000

## Layout
| Path | What |
|---|---|
| `index.html`, `app.js`, `widgets.js`, `styles.css` | the app (no build step) |
| `content/catalog.json` | grades, subjects, units, lesson list + curriculum refs |
| `content/lessons/*.json` | one lesson: steps, interactive widgets, MCQ quiz |
| `research/` | curriculum maps the content agent works from |
| `audio/` | ElevenLabs narration (`manifest.json` lists generated clips) |
| `tools/validate.py` | checks every lesson (run before each commit) |
| `tools/make_audio.py` | generates narration; skips clips that already exist |
| `.claude/agents/curriculum-agent.md` | Claude Code agent that researches + writes content |

## Add content
In Claude Code inside this folder: *"Use curriculum-agent to add Grade 5 Math, Fractions unit, Egypt + American."*
Then `python3 tools/validate.py`.

## Narration
```bash
export ELEVENLABS_API_KEY=...       # keep it out of the repo
python3 tools/make_audio.py --list-voices   # pick EN + AR voice ids -> tools/voices.json
python3 tools/make_audio.py --dry-run       # character count = cost
python3 tools/make_audio.py
```
Without audio files the app falls back to the browser's built-in voice.

## Publish (GitHub Pages)
Push to a repo, then Settings -> Pages -> Deploy from branch -> `main` / root.
