// Checks every test file in src/data: question count, ids, options, answer index,
// explanations, answer-position spread, and repeated questions across files.
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import process from 'node:process'

const dir = join(import.meta.dirname, '..', 'src', 'data')
const files = readdirSync(dir).filter(f => f.endsWith('.js')).sort()
const seen = new Map()
let errors = 0

const norm = s => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

for (const file of files) {
  const { default: qs } = await import(pathToFileURL(join(dir, file)))
  const expected = file.startsWith('mock-test-') ? 150 : 50
  const problems = []
  if (!Array.isArray(qs)) problems.push('default export is not an array')
  else {
    if (qs.length !== expected) problems.push(`${qs.length} questions, expected ${expected}`)
    const spread = [0, 0, 0, 0]
    qs.forEach((q, i) => {
      const at = `Q${i + 1}`
      if (q.id !== i + 1) problems.push(`${at}: id is ${q.id}`)
      if (typeof q.question !== 'string' || !q.question.trim()) problems.push(`${at}: empty question`)
      if (!Array.isArray(q.options) || q.options.length !== 4) problems.push(`${at}: needs 4 options`)
      else if (new Set(q.options.map(norm)).size !== 4) problems.push(`${at}: duplicate options`)
      if (![0, 1, 2, 3].includes(q.answer)) problems.push(`${at}: answer ${q.answer} not 0-3`)
      else spread[q.answer]++
      if (typeof q.explanation !== 'string' || q.explanation.length < 40) problems.push(`${at}: explanation missing or too short`)
      const key = norm(q.question ?? '')
      if (seen.has(key)) problems.push(`${at}: repeats ${seen.get(key)}`)
      else seen.set(key, `${file} ${at}`)
    })
    const min = Math.floor(qs.length * 0.15)
    if (spread.some(n => n < min)) problems.push(`answer spread A/B/C/D = ${spread.join('/')} (each should be >= ${min})`)
  }
  if (problems.length) {
    errors += problems.length
    console.log(`✗ ${file}`)
    problems.forEach(p => console.log(`    ${p}`))
  } else {
    console.log(`✓ ${file}`)
  }
}

console.log(`\n${files.length} files, ${errors} problem(s)`)
process.exit(errors ? 1 : 0)
