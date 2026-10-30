import test from 'node:test'
import assert from 'node:assert/strict'
import { questions, creatures, traits } from '../src/data.ts'
import { scoreAnswers } from '../src/scoring.ts'
import { parseQuizUrl, quizUrl } from '../src/url-state.ts'

test('content has 22 varied questions and 24 complete creatures', () => {
  assert.equal(questions.length, 22)
  assert.equal(creatures.length, 24)
  assert.equal(new Set(questions.map(question => question.id)).size, questions.length)
  assert.equal(new Set(creatures.map(creature => creature.id)).size, creatures.length)
  for (const question of questions) {
    assert.ok(question.options.length >= 4 && question.options.length <= 6)
    for (const option of question.options) {
      assert.ok(Object.keys(option.weights).length >= 2)
      assert.ok(Object.keys(option.weights).every(key => traits.some(trait => trait.id === key)))
    }
  }
  for (const creature of creatures) {
    assert.ok(creature.story && creature.strengths.length && creature.shadows.length)
    assert.equal(Object.keys(creature.profile).length, traits.length)
  }
})

test('scoring returns sorted, bounded matches and trait scores', () => {
  const result = scoreAnswers(questions.map((question, index) => index % question.options.length))
  assert.equal(result.matches.length, creatures.length)
  assert.ok(result.matches.every(match => match.percent >= 35 && match.percent <= 98))
  assert.ok(result.matches.every((match, index) => index === 0 || result.matches[index - 1].distance <= match.distance))
  assert.ok(Object.values(result.scores).every(score => score >= 0 && score <= 10))
})

test('invalid or incomplete answers are rejected', () => {
  assert.throws(() => scoreAnswers([]))
  assert.throws(() => scoreAnswers(questions.map(() => 99)))
})

test('different answer patterns produce different profiles', () => {
  const first = scoreAnswers(questions.map(() => 0))
  const last = scoreAnswers(questions.map(question => question.options.length - 1))
  assert.notDeepEqual(first.scores, last.scores)
  assert.notEqual(first.matches[0].creature.id, last.matches[0].creature.id)
})

test('URL restores progress and completed quiz; invalid choices are rejected', () => {
  const answers = questions.map((question, index) => index % question.options.length)
  const progress = { started: true, completed: false, step: 8, answers: answers.slice(0, 8) }
  assert.deepEqual(parseQuizUrl(new URL(quizUrl(progress, '/quiz', ''), 'https://example.test').search), progress)
  const completed = { ...progress, completed: true, step: questions.length - 1, answers }
  assert.deepEqual(parseQuizUrl(new URL(quizUrl(completed, '/quiz', ''), 'https://example.test').search), completed)
  assert.equal(parseQuizUrl('?pas=4&r=99'), null)
  assert.equal(parseQuizUrl('?final=1&r=01'), null)
})
