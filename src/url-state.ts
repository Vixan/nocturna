import { questions } from './data.ts'

export type QuizState = { started: boolean; completed: boolean; step: number; answers: number[] }
export const fresh: QuizState = { started: false, completed: false, step: 0, answers: [] }

export function parseQuizUrl(search: string): QuizState | null {
  const params = new URLSearchParams(search)
  if (!params.has('pas') && !params.has('final') && !params.has('r')) return null
  const raw = params.get('r') ?? ''
  const answers = [...raw].map(Number)
  if (answers.length > questions.length || answers.some((answer, index) => !Number.isInteger(answer) || answer < 0 || answer >= questions[index].options.length)) return null
  if (params.get('final') === '1') return answers.length === questions.length ? { started: true, completed: true, step: questions.length - 1, answers } : null
  const step = Number(params.get('pas')) - 1
  if (!Number.isInteger(step) || step < 0 || step >= questions.length || answers.length < step) return null
  return { started: true, completed: false, step, answers }
}

export function quizUrl(state: QuizState, pathname = location.pathname, hash = location.hash): string {
  if (!state.started) return pathname + hash
  const params = new URLSearchParams()
  if (state.completed) params.set('final', '1')
  else params.set('pas', String(state.step + 1))
  if (state.answers.length) params.set('r', state.answers.join(''))
  return `${pathname}?${params}${hash}`
}
