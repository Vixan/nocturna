import { creatures, questions, traits, type Creature, type Trait } from './data.ts'

export type Match = { creature: Creature; percent: number; distance: number }

export function scoreAnswers(answers: number[]) {
  if (answers.length !== questions.length || answers.some((answer, index) => !Number.isInteger(answer) || answer < 0 || answer >= questions[index].options.length)) {
    throw new Error('Quizul are nevoie de un răspuns valid pentru fiecare întrebare.')
  }

  const sums = Object.fromEntries(traits.map(({ id }) => [id, 0])) as Record<Trait, number>
  answers.forEach((answer, index) => {
    for (const [trait, weight] of Object.entries(questions[index].options[answer].weights)) {
      sums[trait as Trait] += weight
    }
  })

  // Each answer usually contributes 2–3 points; this scale keeps typical trait totals readable on 0–10.
  const scores = Object.fromEntries(traits.map(({ id }) => [id, Math.max(0, Math.min(10, Math.round((3 + sums[id] * 0.38) * 10) / 10))])) as Record<Trait, number>
  const matches: Match[] = creatures.map(creature => {
    const distance = traits.reduce((total, { id }) => {
      const importance = creature.focus.includes(id) ? 1.7 : 1
      return total + Math.abs(scores[id] - creature.profile[id]) * importance
    }, 0) / (traits.length + 1.4)
    return { creature, distance, percent: Math.max(35, Math.min(98, Math.round(100 - distance * 9))) }
  }).sort((a, b) => a.distance - b.distance || a.creature.name.localeCompare(b.creature.name, 'ro'))

  return { scores, matches }
}

