# 𓋹 NileStem: Egypt K-12 Math & Science Interactive Academy
### منصة نايل ستيم التفاعلية لتعليم العلوم والرياضيات لمناهج مصر القومية والدولية (الصفوف 1-12)

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com)
[![Gemini 3.8 Flash](https://img.shields.io/badge/AI-Gemini%203.8%20Flash-orange.svg)](https://ai.google.dev)
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20العربية-amber.svg)](#)

---

## 🌟 Vision & Overview / الرؤية العامة للمشروع
**NileStem** is an open-source, interactive STEM learning platform tailored specifically for Egypt's educational landscape from **Grades 1 to 12**. It supports both **Egyptian National Curriculums (Ministry of Education - MoE / Thanawiya Amma)** and **International Curriculums (Cambridge IGCSE & American High School Diploma)** in both **English and Arabic (with complete RTL support)**.

The platform bridges textbook theory with practical hands-on interactives, real-life Egyptian applications (Aswan High Dam, Benban Solar Park, Great Pyramids geometry, Suez Canal fluid mechanics, River Nile water chemistry, desert wildlife adaptation), AI curriculum retrieval, and voice-assisted quizzes with step-by-step solutions.

---

## ✨ Key Features / المميزات الرئيسية

### 1. 🎓 Comprehensive K-12 Grade & Curriculum Coverage
- **Primary Stage (Grades 1-6 / المرحلة الابتدائية):** Full Term 1 curriculum coverage (e.g. Grade 4 Math all 8 units across Theme 1 & Theme 2), discovery science, animal adaptation (Fennec fox, camel), energy, and fractions.
- **Preparatory Stage (Grades 7-9 / المرحلة الإعدادية):** Atoms, periodic table, real numbers, deductive geometry, straight line slopes, Prep 3 الشهادة الإعدادية.
- **Secondary Stage (Grades 10-12 / المرحلة الثانوية):** Thanawiya Amma (الثانوية العامة) physics, Ohm's and Kirchhoff's laws, modern physics, calculus, pyramids trigonometry, fluids and density.
- **4 Curricular Tracks:**
  1. *Egyptian National Curriculum (MoE Official 2024-2026 Reforms)*
  2. *Egyptian Official Languages & Experimental Schools (تجريبي ورسمي لغات)*
  3. *Cambridge IGCSE & Edexcel (0580 Math, 0625 Physics, etc.)*
  4. *American High School Diploma (EST I & II, NGSS & Common Core Math)*

### 2. 🌟 Teach From Scratch: Gradual 5-Step Mastery (التعليم التدريجي من الصفر)
- **Step 1: The Intuitive Hook (التصور البديهي من الصفر):** Zero prerequisite assumption, real-world intuition before math jargon.
- **Step 2: Golden Formulas & Rules (القوانين الذهبية):** High-yield cards with exact formulas and step-by-step procedures.
- **Step 3: Interactive Unit Labs & Sandboxes (المعمل التفاعلي):** 8 dedicated live numerical tools (Place Value Houses, Bar Model Solver, Metric Converter & Elapsed Time Clock, Area & Perimeter Sandbox, Multiplicative Comparison Bar, Factor Rainbow & Prime Checker, Area Model Multiplication, Order of Operations Hierarchy Solver).
- **Step 4: Real Egyptian Life Applications (تطبيقات مصرية):** Connecting each concept to the Grand Egyptian Museum, Cairo Metro, Toshka harvest, High Dam, New Delta farms, and Cairo Tower.
- **Step 5: Exam Trap Alert & Mastery Check (فخاخ الامتحانات وسؤال التميز):** Highlighting the #1 exam pitfalls students make and offering quick-check verification.

### 2. ⚡ 6 Hands-on Virtual Simulators / المعامل الافتراضية
- **DC Circuits & Ohm's Law:** Adjustable voltage, series/parallel resistors, switch, internal battery resistance ($r$), moving electrons, and bulb brightness mimicking the **Benban Solar Park in Aswan**.
- **Pyramids 3D Geometry & Trigonometry:** Isometric regular pyramid explorer with Khufu presets, slant height, face inclination angle ($\theta$), internal right triangle, and volume calculations.
- **Buoyancy & Fluid Density Tank:** Archimedes' principle applied to container ships in the **Suez Canal** and Bitter Lakes with floating/sinking physics and force vectors.
- **Function & Curve Plotter:** Interactive quadratic parabolas ($y = ax^2 + bx + c$) and lines ($y = mx + c$), auto-detecting vertices, roots, and symmetry.
- **Chemistry pH Scale & Acid-Base Lab:** River Nile water alkalinity monitoring, litmus paper strip dipping, and logarithmic $[H^+]$ concentration.
- **Simple Pendulum & Mechanical Energy Conservation:** Kinetic vs potential energy exchange and harmonic periods ($T = 2\pi\sqrt{L/g}$).

### 3. 🤖 NileStem AI Curriculum Agent (Gemini 3.8 Flash)
- Powered by a secure server-side **Google Gemini 3.8 Flash** integration.
- Generates tailored lessons on any Egyptian syllabus unit on demand.
- Connects STEM principles with vivid Egyptian real-world applications.
- Auto-generates 5 exam-grade MCQs with step-by-step rationales in both English and Arabic.

### 4. 🎙️ Bilingual Voice Narration (Web Speech API)
- Real-time text-to-speech audio reader supporting both **Egyptian Arabic (`ar-EG`)** and **English (`en-US`)**.
- Read aloud buttons for lesson stories, problem steps, and quiz questions.
- Speed controls (0.8x, 1.0x, 1.25x) and audio wave animations.

### 5. 🎯 Interactive Quiz & MCQ Engine
- **Practice Mode:** Instant feedback on each question with full mathematical and scientific explanations.
- **Exam Mode:** Timed countdown with scorecards, percentage calculations, review breakdown, and confetti celebrations!

---

## 🚀 Getting Started & Publishing to GitHub

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/YOUR_USERNAME/nile-stem-egypt.git
cd nile-stem-egypt
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your **Gemini API Key**:
```env
GEMINI_API_KEY="your_google_gemini_api_key"
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📦 Project Structure
```text
├── server.ts                       # Express backend server with Gemini 3.8 Flash proxy
├── index.html                      # HTML5 entry with Cairo & Plus Jakarta Sans fonts
├── src/
│   ├── main.tsx                    # React client entry point
│   ├── App.tsx                     # Main NileStem learning interface
│   ├── index.css                   # Tailwind CSS v4 and RTL/LTR base styles
│   ├── components/
│   │   ├── Navbar.tsx              # Bilingual header, curriculum & grade selector
│   │   ├── VoicePlayer.tsx         # Audio narrator component
│   │   ├── QuizEngine.tsx          # MCQ quiz and exam engine
│   │   ├── CurriculumAgent.tsx     # Gemini-powered curriculum search & generator
│   │   ├── GithubModal.tsx         # Publishing & GitHub helper modal
│   │   └── simulators/
│   │       ├── CircuitSimulator.tsx      # DC circuits & Ohm's law
│   │       ├── PyramidsGeometryLab.tsx   # 3D Pyramids trigonometry
│   │       ├── BuoyancyDensityTank.tsx   # Suez Canal Archimedes tank
│   │       ├── EquationGraphPlotter.tsx  # Dynamic algebra function plotter
│   │       ├── AcidBaseLab.tsx           # pH scale & litmus test
│   │       └── PendulumSimulator.tsx     # Pendulum & energy conservation
│   ├── data/
│   │   └── curriculumData.ts       # Egyptian K-12 curriculum map & sample lessons
│   ├── types/
│   │   └── curriculum.ts           # TypeScript models for lessons, grades & MCQs
│   └── utils/
│       └── speech.ts               # Web Speech API controller
└── package.json
```

---

## 📜 License
This project is licensed under the Apache License 2.0.
