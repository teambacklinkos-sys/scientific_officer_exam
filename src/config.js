export const EXAM = {
  logo: 'MPPSC',
  name: 'Scientific Officer (Biology) Exam 2026',
  marksCorrect: 3,
  marksWrong: 1,
  qualifyingPercent: 40,
  // 150 questions in 3 hours
  minutesPerQuestion: 1.2,
}

export function formatMarks(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2)
}

export function scoreOf(questions, answers) {
  let correct = 0
  let wrong = 0
  let unanswered = 0
  questions.forEach((q) => {
    if (answers[q.id] === undefined) unanswered++
    else if (answers[q.id] === q.answer) correct++
    else wrong++
  })
  const score = correct * EXAM.marksCorrect - wrong * EXAM.marksWrong
  const maxScore = questions.length * EXAM.marksCorrect
  return { correct, wrong, unanswered, score, maxScore }
}
