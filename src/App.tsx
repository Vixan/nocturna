import { useEffect, useRef, useState } from 'react'
import { GiArrowhead, GiCrossedSwords, GiDiceTwentyFacesTwenty, GiMagicSwirl, GiMoonBats, GiReturnArrow, GiScrollUnfurled, GiShare, GiSpellBook } from 'react-icons/gi'
import { creatures, questions, traits, type Creature } from './data.ts'
import { scoreAnswers } from './scoring.ts'
import { fresh, parseQuizUrl, quizUrl, type QuizState } from './url-state.ts'

type Shared = { creature: Creature; percent: number }
const storageKey = 'nocturna-quiz-v1'

function readStored(): QuizState {
  try {
    const state = JSON.parse(localStorage.getItem(storageKey) || 'null') as QuizState | null
    if (state && typeof state.started === 'boolean' && typeof state.completed === 'boolean' && Number.isInteger(state.step) && state.step >= 0 && state.step < questions.length && Array.isArray(state.answers) && state.answers.length <= questions.length && state.answers.every((answer, index) => Number.isInteger(answer) && answer >= 0 && answer < questions[index].options.length) && (!state.completed || state.answers.length === questions.length)) return state
  } catch { /* Local storage is optional. */ }
  return fresh
}

function readShared(): Shared | null {
  const params = new URLSearchParams(location.search)
  const creature = creatures.find(item => item.id === params.get('creatura'))
  const percent = Number(params.get('potrivire'))
  return creature && Number.isInteger(percent) && percent >= 35 && percent <= 98 ? { creature, percent } : null
}

function FrameCorners() {
  return <>{['top left', 'top right', 'bottom left', 'bottom right'].map(position => <span key={position} className={`corner ${position}`} aria-hidden="true" />)}</>
}

function ButtonCorners() {
  return <><span className="button-corner left" aria-hidden="true" /><span className="button-corner right" aria-hidden="true" /></>
}

function Portrait({ index, className = '', label }: { index: number; className?: string; label: string }) {
  const cell = index % 12
  return <div role="img" aria-label={label} className={`portrait ${className}`} style={{ backgroundImage: `url('/creatures-atlas${index < 12 ? '' : '-2'}.png')`, backgroundPosition: `${(cell % 4) * 100 / 3}% ${Math.floor(cell / 4) * 50}%` }} />
}

function Intro({ onStart }: { onStart: () => void }) {
  return <main id="main" className="intro-screen content-enter">
    <div className="masthead"><span className="masthead-rule" aria-hidden="true" /><GiMoonBats aria-hidden="true" className="masthead-icon" /><h1>NOCTURNA</h1><span className="masthead-rule" aria-hidden="true" /></div>
    <div className="intro-layout">
      <div className="intro-art rpg-frame"><FrameCorners /><Portrait index={22} label="Basilisc de chihlimbar ilustrat în stil dark fantasy" /><div className="art-plaque">BESTIARUL CELOR ASCUNSE</div></div>
      <div className="intro-copy"><GiDiceTwentyFacesTwenty aria-hidden="true" className="chapter-icon" /><h2>Ce creatură<br />se ascunde în tine?</h2><p>Unele povești încep la miezul nopții. A ta începe cu o alegere. Răspunde sincer, joacă-te puțin și află ce ființă fantastică îți seamănă.</p><div className="intro-stats"><span><strong>{questions.length}</strong> întrebări</span><span><strong>{creatures.length}</strong> creaturi</span><span>aprox. 7 minute</span></div><button type="button" className="btn btn-primary rpg-button primary-action" onClick={onStart}><GiSpellBook aria-hidden="true" /> Începe aventura <GiArrowhead aria-hidden="true" /><ButtonCorners /></button><small>Fără răspunsuri greșite. Doar pentru distracție.</small><details className="attribution"><summary>Despre iconițe</summary><p>Iconițe de la <a href="https://game-icons.net/" target="_blank" rel="noreferrer">Game Icons</a> · CC BY 3.0.</p></details></div>
    </div>

  </main>
}

function Quiz({ state, onSelect, onBack, onNext }: { state: QuizState; onSelect: (answer: number) => void; onBack: () => void; onNext: () => void }) {
  const question = questions[state.step]
  const selected = state.answers[state.step]
  const titleRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => { titleRef.current?.focus() }, [])
  return <main id="main" className="quiz-screen content-enter">
    <div className="progress-head"><span><GiScrollUnfurled aria-hidden="true" /> ÎNTREBAREA {String(state.step + 1).padStart(2, '0')} / {questions.length}</span><span>{Math.round(state.step / questions.length * 100)}% parcurs</span></div>
    <progress className="progress quest-progress" value={state.step} max={questions.length} aria-label={`${state.step} din ${questions.length} întrebări finalizate`} />
    <section className="quest-panel rpg-frame" aria-labelledby="question-title"><FrameCorners /><div className="quest-ornament" aria-hidden="true"><GiCrossedSwords /></div><h1 id="question-title" ref={titleRef} tabIndex={-1}>{question.title}</h1><p className="question-help">Alege răspunsul care te atrage prima dată.</p>
      <fieldset className="answers"><legend className="sr-only">Alege un răspuns</legend>{question.options.map((option, index) => <label key={index} className={`answer ${selected === index ? 'is-selected' : ''}`}><input type="radio" name={question.id} checked={selected === index} onChange={() => onSelect(index)} /><span className="answer-letter">{String.fromCharCode(65 + index)}</span><span className="answer-text">{option.text}</span><span className="answer-indicator" aria-hidden="true"></span><span className="answer-running-light" aria-hidden="true"><span /><span /><span /><span /></span></label>)}</fieldset>
      <div className="quiz-actions"><button type="button" className="btn rpg-button secondary-action" onClick={onBack}><GiReturnArrow aria-hidden="true" /> {state.step === 0 ? 'La început' : 'Înapoi'}<ButtonCorners /></button><button type="button" className="btn btn-primary rpg-button primary-action" disabled={selected === undefined} onClick={onNext}>{state.step === questions.length - 1 ? 'Arată-mi creatura' : 'Continuă'} <GiArrowhead aria-hidden="true" /><ButtonCorners /></button></div>
    </section>
  </main>
}

function Result({ shared, state, onRestart, onEdit }: { shared: Shared | null; state: QuizState; onRestart: () => void; onEdit: () => void }) {
  const calculated = shared ? null : scoreAnswers(state.answers)
  const winner = shared ? shared.creature : calculated!.matches[0].creature
  const percent = shared ? shared.percent : calculated!.matches[0].percent
  const [feedback, setFeedback] = useState('')
  const titleRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => { titleRef.current?.focus() }, [])

  async function share() {
    const url = new URL(location.href)
    url.search = new URLSearchParams({ creatura: winner.id, potrivire: String(percent) }).toString()
    url.hash = ''
    const data = { title: `Sunt ${winner.name} · Nocturna`, text: `Creatura mea în Nocturna este ${winner.name} (${percent}% potrivire). Tu cine ești?`, url: url.toString() }
    try {
      if (navigator.share) await navigator.share(data)
      else { await navigator.clipboard.writeText(`${data.text} ${data.url}`); setFeedback('Link copiat!') }
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError') setFeedback('Nu am putut copia linkul. Încearcă din nou.')
    }
  }

  return <main id="main" className="result-screen content-enter"><div className="result-title"><GiCrossedSwords aria-hidden="true" /><h1 ref={titleRef} tabIndex={-1}>Creatura ta este<br /><em>{winner.name}</em></h1><p>{winner.tagline}</p></div>
    <section className="result-feature rpg-frame" aria-label={`Rezultat: ${winner.name}`}><FrameCorners /><div className="result-art"><Portrait index={winner.image} label={`Ilustrație cu ${winner.name}, ${winner.kind.toLowerCase()}`} /></div><div className="result-story"><span className="section-label">{winner.kind}</span><div className="match-number"><strong>{percent}%</strong><span>potrivire</span></div><p>{winner.story}</p></div></section>
    {calculated && <><div className="result-details"><section className="detail-panel rpg-frame"><FrameCorners /><h2>Trăsăturile tale</h2><p>Portretul construit din alegerile tale.</p><div className="trait-bars">{traits.map(trait => <div className="trait-row" key={trait.id}><div><span>{trait.label}</span><strong>{calculated.scores[trait.id].toFixed(1)} / 10</strong></div><progress className="progress" value={calculated.scores[trait.id]} max="10" aria-label={`${trait.label}: ${calculated.scores[trait.id].toFixed(1)} din 10`} /></div>)}</div></section><section className="detail-panel rpg-frame"><FrameCorners /><h2>Lumină și umbră</h2><div className="strength-columns"><div><h3>Puncte forte</h3><ul>{winner.strengths.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>Provocări</h3><ul>{winner.shadows.map(item => <li key={item}>{item}</li>)}</ul></div></div><p className="why-match"><GiMagicSwirl aria-hidden="true" /><span>Pentru {winner.name}, <strong>{winner.focus.map(id => traits.find(trait => trait.id === id)!.label.toLowerCase()).join(' și ')}</strong> cântăresc cel mai mult.</span></p></section></div><section className="other-matches"><h2>Alte ecouri</h2><div className="other-grid">{calculated.matches.slice(1, 4).map(match => <div className="other-card rpg-frame" key={match.creature.id}><FrameCorners /><Portrait index={match.creature.image} label={`Ilustrație cu ${match.creature.name}`} /><div><span>{match.creature.kind}</span><h3>{match.creature.name}</h3><strong>{match.percent}% potrivire</strong></div></div>)}</div></section></>}
    <details className="method rpg-frame"><summary><GiScrollUnfurled aria-hidden="true" /> Cum funcționează potrivirea?<FrameCorners /></summary><p>Fiecare răspuns adaugă puncte la una sau mai multe dintre cele șapte trăsături. Scorurile sunt comparate cu profilul fiecărei creaturi. Două trăsături definitorii pentru fiecare creatură cântăresc de 1,7 ori mai mult. Procentul exprimă asemănarea în joc, nu o evaluare psihologică.</p><p>Iconițe de la <a href="https://game-icons.net/" target="_blank" rel="noreferrer">Game Icons</a> · CC BY 3.0.</p></details>
    <div className="result-actions"><button type="button" className="btn btn-primary rpg-button primary-action" onClick={share}><GiShare aria-hidden="true" /> Distribuie rezultatul<ButtonCorners /></button><button type="button" className="btn rpg-button secondary-action" onClick={onRestart}><GiMagicSwirl aria-hidden="true" /> {shared ? 'Descoperă creatura ta' : 'Începe din nou'}<ButtonCorners /></button>{!shared && <button type="button" className="btn rpg-button secondary-action" onClick={onEdit}><GiReturnArrow aria-hidden="true" /> Schimbă ultimul răspuns<ButtonCorners /></button>}</div><p className="share-feedback" role="status">{feedback}</p>
  </main>
}

export default function App() {
  const [state, setState] = useState<QuizState>(() => parseQuizUrl(location.search) ?? readStored())
  const [shared, setShared] = useState<Shared | null>(readShared)

  function navigate(next: QuizState, replace = false) {
    history[replace ? 'replaceState' : 'pushState'](null, '', quizUrl(next))
    setShared(null)
    setState(next)
  }

  useEffect(() => {
    const onKeyboard = () => { document.documentElement.dataset.inputModality = 'keyboard' }
    const onPointer = () => { document.documentElement.dataset.inputModality = 'pointer' }
    window.addEventListener('keydown', onKeyboard, true)
    window.addEventListener('pointerdown', onPointer, true)
    return () => {
      window.removeEventListener('keydown', onKeyboard, true)
      window.removeEventListener('pointerdown', onPointer, true)
    }
  }, [])

  useEffect(() => {
    if (!shared && state.started && !parseQuizUrl(location.search)) history.replaceState(null, '', quizUrl(state))
    const onPop = () => { setShared(readShared()); setState(parseQuizUrl(location.search) ?? fresh) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  useEffect(() => { try { localStorage.setItem(storageKey, JSON.stringify(state)) } catch { /* Local storage is optional. */ } }, [state])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [state.step, state.completed, shared])

  return <div className="app-shell"><a className="skip-link" href="#main">Sari la conținut</a>{shared || state.completed ? <Result key={shared?.creature.id || 'mine'} shared={shared} state={state} onRestart={() => navigate(fresh, true)} onEdit={() => navigate({ ...state, completed: false, step: questions.length - 1 })} /> : state.started ? <Quiz key={state.step} state={state} onSelect={answer => navigate({ ...state, answers: [...state.answers.slice(0, state.step), answer] }, true)} onBack={() => navigate(state.step === 0 ? fresh : { ...state, step: state.step - 1 })} onNext={() => { if (state.answers[state.step] !== undefined) navigate(state.step === questions.length - 1 ? { ...state, completed: true } : { ...state, step: state.step + 1 }) }} /> : <Intro onStart={() => navigate({ ...fresh, started: true })} />}</div>
}
