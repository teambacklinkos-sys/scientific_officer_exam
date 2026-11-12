# MPPSC Scientific Officer (Biology) 2026

## Project Overview
- MCQ test app for MPPSC Scientific Officer (Biology) exam preparation
- Same structure as `resa` (teambacklinkos-sys/resa) and `icmr-mcq`
- Stack: Vite + React (JSX), vanilla CSS
- Data files: `src/data/<topic>-test<n>.js` — each exports an array of 50 question objects; `mock-test-<n>.js` has 150
- Components: TestDetail.jsx, TestScreen.jsx, ResultScreen.jsx
- App.jsx: test registry + simple state-based routing (list → detail → test → result)
- `src/config.js`: exam constants (marking, qualifying %, pace) and shared scoring
- `npm run validate`: checks every data file (count, ids, 4 options, answer 0–3, explanation, answer spread, repeats)

### MCQ Data Format
```js
{ id: Number, question: String, options: [4 strings], answer: Number (0-indexed), explanation: String }
```
- 50 MCQs per topic test, 150 per full mock (Q1–50 GS, Q51–150 Biology)
- **+3 for correct, −1 for wrong, 0 for unanswered** (Score = 3R − W)
- Full mocks show a section-wise score with the 40% per-section cut-off

---

## Exam Structure (MPPSC notification dated 08.05.2026)
| Section | Questions | Marks |
|---|---|---|
| A — General Studies (MP) | 50 | 150 |
| B — Biology (Forensic) | 100 | 300 |
| Written total | 150 | 450 |
| Interview | – | 50 |

- One sitting, 3 hours, offline OMR, 4 options, one correct
- 40% required in **each** section separately (30% for SC/ST/OBC/EWS/PH of MP)
- Bilingual paper; Hindi version prevails on discrepancy
- Up to 3× vacancies called for interview documents

---

## Test Inventory
### Section B — Biology (28 tests)
| Category | Tests | Syllabus |
|---|---|---|
| DNA Technology | 6 | Unit II |
| Forensic Serology | 5 | Unit III |
| Forensic Biology Fundamentals | 6 | Unit I |
| Analytical Techniques | 6 | Unit IV |
| FSL Organisation & Databases | 5 | Unit V |

### Section A — General Studies (21 tests)
| Category | Tests | Syllabus |
|---|---|---|
| MP History | 4 | Unit 1 |
| MP Geography | 4 | Unit 2 |
| MP Polity & Economy | 5 | Unit 3 |
| MP Tribes & Culture | 4 | Unit 4 |
| Current Affairs & ICT | 4 | Unit 5 (current affairs window: Nov 2025 – Nov 2026) |

### Full Mock Tests (10 × 150)

---

## Preparation Priority Order
1. DNA Technology
2. Forensic Serology
3. Forensic Biology Fundamentals
4. Analytical Techniques
5. FSL Organisation & Databases
6. MP History, Geography, Polity & Economy, Tribes
7. Current Affairs & ICT

**Section B is forensic biology — do NOT prepare like a generic biology paper.**

## Notes
- Negative marking: a blind 4-way guess has zero expected value; eliminating one option makes guessing worth +0.33.
- Practice tests are English-only; the real paper is bilingual.
