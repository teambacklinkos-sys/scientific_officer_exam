import { useState } from 'react'
import { EXAM, formatMarks, scoreOf } from './config'

function ResultScreen({ questions, answers, testTitle, timeTaken, sections, onBack }) {
  const [showAnswers, setShowAnswers] = useState(false)

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const { correct, wrong, unanswered, score, maxScore } = scoreOf(questions, answers)
  const percentage = ((score / maxScore) * 100).toFixed(1)

  const sectionResults = (sections || []).map((s) => {
    const result = scoreOf(questions.slice(s.from - 1, s.to), answers)
    const cutoff = (result.maxScore * EXAM.qualifyingPercent) / 100
    return { ...s, ...result, cutoff, passed: result.score >= cutoff }
  })

  return (
    <div className="container result-screen">
      <header className="header">
        <div className="logo">{EXAM.logo}</div>
        <h1>Test Results</h1>
        <p className="subtitle">{testTitle}</p>
      </header>

      {/* Score cards */}
      <section className="info-cards">
        <div className="card">
          <div className="card-label">Score</div>
          <div className="card-value" style={{ color: score >= 0 ? '#059669' : '#dc2626' }}>
            {formatMarks(score)}
          </div>
          <div className="card-desc">out of {maxScore}</div>
        </div>
        <div className="card">
          <div className="card-label">Time Taken</div>
          <div className="card-value" style={{ fontSize: '24px' }}>{formatTime(timeTaken)}</div>
          <div className="card-desc">hh:mm:ss</div>
        </div>
        <div className="card">
          <div className="card-label">Percentage</div>
          <div className="card-value">{percentage}%</div>
          <div className="card-desc">Overall</div>
        </div>
      </section>

      <section className="rs-summary">
        <div className="rs-summary-item rs-correct">
          <span className="rs-summary-count">{correct}</span>
          <span className="rs-summary-label">Correct (+{correct * EXAM.marksCorrect})</span>
        </div>
        <div className="rs-summary-item rs-wrong">
          <span className="rs-summary-count">{wrong}</span>
          <span className="rs-summary-label">Wrong (-{wrong * EXAM.marksWrong})</span>
        </div>
        <div className="rs-summary-item rs-skipped">
          <span className="rs-summary-count">{unanswered}</span>
          <span className="rs-summary-label">Unanswered (0)</span>
        </div>
      </section>

      {sectionResults.length > 0 && (
        <section className="rs-sections">
          <h2>Section-wise Score</h2>
          <p className="rs-sections-note">You need at least {EXAM.qualifyingPercent}% in each section separately to qualify.</p>
          {sectionResults.map((s) => (
            <div key={s.name} className={`rs-section-row ${s.passed ? 'rs-section-pass' : 'rs-section-fail'}`}>
              <div className="rs-section-name">
                {s.name}
                <span className="rs-section-range">Q{s.from}&ndash;{s.to}</span>
              </div>
              <div className="rs-section-counts">
                {s.correct} correct &middot; {s.wrong} wrong &middot; {s.unanswered} unanswered
              </div>
              <div className="rs-section-score">
                {formatMarks(s.score)} / {s.maxScore}
                <span className="rs-section-cutoff">Cut-off {formatMarks(s.cutoff)}</span>
              </div>
              <span className={`rs-q-badge ${s.passed ? 'rs-badge-correct' : 'rs-badge-wrong'}`}>
                {s.passed ? 'Qualified' : 'Below cut-off'}
              </span>
            </div>
          ))}
        </section>
      )}

      {/* Toggle answers button */}
      <button
        className="start-btn rs-toggle-btn"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* Detailed answers (only answered questions) */}
      {showAnswers && (
        <section className="rs-detail">
          <h2>Detailed Answers &amp; Explanations</h2>
          {questions.map((q, i) => {
            const userAnswer = answers[q.id]
            const isCorrect = userAnswer === q.answer
            const isUnanswered = userAnswer === undefined

            if (isUnanswered) return null

            return (
              <div key={q.id} className={`rs-q ${isCorrect ? 'rs-q-correct' : 'rs-q-wrong'}`}>
                <div className="rs-q-header">
                  <span className="rs-q-num">Q{i + 1}</span>
                  <span className={`rs-q-badge ${isCorrect ? 'rs-badge-correct' : 'rs-badge-wrong'}`}>
                    {isCorrect ? 'Correct' : 'Wrong'}
                  </span>
                </div>
                <p className="rs-q-text">{q.question}</p>
                <div className="rs-options">
                  {q.options.map((opt, oi) => {
                    let cls = 'rs-opt'
                    if (oi === q.answer) cls += ' rs-opt-correct'
                    if (oi === userAnswer && !isCorrect) cls += ' rs-opt-wrong'
                    return (
                      <div key={oi} className={cls}>
                        <span className="rs-opt-letter">{String.fromCharCode(65 + oi)}</span>
                        <span>{opt}</span>
                        {oi === q.answer && <span className="rs-opt-tag">Correct</span>}
                        {oi === userAnswer && oi !== q.answer && <span className="rs-opt-tag rs-opt-tag-wrong">Your answer</span>}
                      </div>
                    )
                  })}
                </div>
                <div className="rs-explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            )
          })}
        </section>
      )}

      <button className="start-btn" onClick={onBack}>Back to Tests</button>
    </div>
  )
}

export default ResultScreen
