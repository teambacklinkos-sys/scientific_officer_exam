import { EXAM } from './config'

function TestDetail({ test, onBack, onStart }) {
  const suggestedMinutes = Math.round(test.questions * EXAM.minutesPerQuestion)

  return (
    <div className="container">
      <header className="header">
        <button className="back-btn" onClick={onBack}>&larr; All Tests</button>
        <div className="logo">{EXAM.logo}</div>
        <h1>{test.title}</h1>
        <p className="subtitle">{EXAM.name}</p>
        {test.description && <p className="test-detail-desc">{test.description}</p>}
      </header>

      <section className="info-cards">
        <div className="card">
          <span className="card-icon">📝</span>
          <div className="card-label">Total Questions</div>
          <div className="card-value">{test.questions}</div>
          <div className="card-desc">Objective MCQs</div>
        </div>
        <div className="card">
          <span className="card-icon">✅</span>
          <div className="card-label">Correct Answer</div>
          <div className="card-value">+{EXAM.marksCorrect}</div>
          <div className="card-desc">Marks per question</div>
        </div>
        <div className="card">
          <span className="card-icon">❌</span>
          <div className="card-label">Negative Marking</div>
          <div className="card-value">-{EXAM.marksWrong}</div>
          <div className="card-desc">For wrong answer</div>
        </div>
      </section>

      <section className="details">
        <h2>Test Instructions</h2>
        <ul>
          <li>The test contains <strong>{test.questions} objective type questions</strong> with 4 choices each.</li>
          <li>Each question carries <strong>{EXAM.marksCorrect} marks</strong> for the correct answer (maximum {test.questions * EXAM.marksCorrect} marks).</li>
          <li>There is a <strong>negative marking of {EXAM.marksWrong} mark</strong> for each wrong answer (Score = 3R &minus; W).</li>
          <li>Only <strong>one option</strong> is correct per question.</li>
          <li>No marks will be deducted for unanswered questions.</li>
          <li>Suggested time: <strong>{suggestedMinutes} minutes</strong> (exam pace: 150 questions in 3 hours).</li>
          {test.sections && (
            <li>
              Sections:{' '}
              {test.sections.map((s, i) => (
                <span key={s.name}>
                  {i > 0 && ', '}
                  <strong>{s.name}</strong> (Q{s.from}&ndash;{s.to})
                </span>
              ))}
              . You must score at least <strong>{EXAM.qualifyingPercent}%</strong> in each section separately.
            </li>
          )}
        </ul>
      </section>

      <button className="start-btn" onClick={onStart}>Start Test</button>

      <footer className="footer">
        {test.title}
      </footer>
    </div>
  )
}

export default TestDetail
