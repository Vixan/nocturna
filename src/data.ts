export const traits = [
  { id: 'curaj', label: 'Curaj', short: 'Înfrunți necunoscutul' },
  { id: 'empatie', label: 'Empatie', short: 'Simți ce ascund ceilalți' },
  { id: 'mister', label: 'Mister', short: 'Cauți sensul ascuns' },
  { id: 'libertate', label: 'Libertate', short: 'Îți croiești drumul' },
  { id: 'ratiune', label: 'Rațiune', short: 'Vezi tipare și soluții' },
  { id: 'ambitie', label: 'Ambiție', short: 'Vrei să lași o urmă' },
  { id: 'umor', label: 'Umor', short: 'Dezamorsezi întunericul' }
] as const

export type Trait = typeof traits[number]['id']
export type Weights = Partial<Record<Trait, number>>
export type Option = { text: string; weights: Weights }
export type Question = { id: string; eyebrow: string; title: string; options: Option[] }
export type Creature = {
  id: string
  name: string
  kind: string
  image: number
  tagline: string
  story: string
  strengths: string[]
  shadows: string[]
  profile: Record<Trait, number>
  focus: [Trait, Trait]
}

const o = (text: string, weights: Weights): Option => ({ text, weights })

export const questions: Question[] = [
  { id: 'poarta', eyebrow: 'Primul semn', title: 'O poartă apare în mijlocul orașului. Ce faci?', options: [
    o('Intru primul. Cineva trebuie să afle ce e dincolo.', { curaj: 2, libertate: 1 }),
    o('Îi țin pe ceilalți la distanță și ascult ce se aude.', { empatie: 2, ratiune: 1 }),
    o('Caut inscripția pe care nimeni n-a observat-o.', { mister: 2, ratiune: 1 }),
    o('Întreb dacă poarta acceptă rezervări și gustări.', { umor: 2, libertate: 1 }),
    o('Fac un plan și strâng o echipă înainte să intrăm.', { ambitie: 1, ratiune: 2 })
  ] },
  { id: 'secret', eyebrow: 'Încredere', title: 'Un prieten îți mărturisește un secret care ar putea răni pe cineva.', options: [
    o('Îl ascult până la capăt și caut o cale blândă de a repara.', { empatie: 2, curaj: 1 }),
    o('Îi spun limpede că adevărul trebuie rostit.', { curaj: 2, ambitie: 1 }),
    o('Verific faptele înainte de orice pas.', { ratiune: 2, mister: 1 }),
    o('Păstrez secretul, dar îl urmăresc atent.', { mister: 2, empatie: 1 }),
    o('Detensionez momentul, apoi avem conversația grea.', { umor: 1, empatie: 2 })
  ] },
  { id: 'petrecere', eyebrow: 'Pauză comică', title: 'La petrecerea monștrilor, tu ești cel care…', options: [
    o('Pornește dansul, chiar dacă nimeni nu știe pașii.', { libertate: 2, curaj: 1 }),
    o('Află povestea fantomei care stă singură în colț.', { empatie: 2, mister: 1 }),
    o('Organizează concursul de costume și îl câștigă.', { ambitie: 2, umor: 1 }),
    o('Descoperă cum funcționează fântâna de punch fermecat.', { ratiune: 2, mister: 1 }),
    o('Spune gluma pe care o repetă toți până dimineața.', { umor: 2, libertate: 1 })
  ] },
  { id: 'putere', eyebrow: 'Dorință', title: 'Primești o singură putere pentru o noapte. Ce alegi?', options: [
    o('Să văd amintirile pierdute ale oamenilor.', { empatie: 2, mister: 1 }),
    o('Să pot zbura oriunde, fără hartă.', { libertate: 2, curaj: 1 }),
    o('Să opresc timpul cât găsesc soluția perfectă.', { ratiune: 2, ambitie: 1 }),
    o('Să împrumut curajul meu celor care au nevoie.', { curaj: 1, empatie: 2 }),
    o('Să transform orice ceartă într-un număr de comedie.', { umor: 2, empatie: 1 })
  ] },
  { id: 'harta', eyebrow: 'Instinct', title: 'Găsești o hartă care se schimbă când o privești. Pe ce drum mergi?', options: [
    o('Pe cel marcat „pericol”. Pare cel mai interesant.', { curaj: 2, libertate: 1 }),
    o('Pe cărarea care duce la cineva ce cere ajutor.', { empatie: 2, curaj: 1 }),
    o('Îi descifrez mecanismul înainte de plecare.', { ratiune: 2, mister: 1 }),
    o('Pe drumul care nu apare decât la lumina lunii.', { mister: 2, libertate: 1 }),
    o('Desenez eu o scurtătură. Ce poate merge prost?', { umor: 1, ambitie: 1, libertate: 1 })
  ] },
  { id: 'nedreptate', eyebrow: 'Dilemă', title: 'Un conducător nedrept oferă orașului pace în schimbul tăcerii.', options: [
    o('Îi sfidez regula în public, chiar cu un preț.', { curaj: 2, libertate: 1 }),
    o('Construiesc o rețea care protejează oamenii vulnerabili.', { empatie: 2, ambitie: 1 }),
    o('Strâng dovezi și îi demontez povestea.', { ratiune: 2, mister: 1 }),
    o('Îi întorc aliații unul câte unul.', { ambitie: 2, mister: 1 }),
    o('Fac o satiră atât de bună încât nimeni nu mai tace.', { umor: 2, curaj: 1 })
  ] },
  { id: 'obiect', eyebrow: 'Relicvă', title: 'Ce obiect ai lua dintr-un castel părăsit?', options: [
    o('O cheie ruginită fără ușă cunoscută.', { mister: 2, curaj: 1 }),
    o('Un jurnal care răspunde la întrebări.', { ratiune: 1, mister: 2 }),
    o('O oglindă care arată ce simt ceilalți.', { empatie: 2, mister: 1 }),
    o('O sabie care se aprinde când aperi pe cineva.', { curaj: 2, empatie: 1 }),
    o('Un clopoțel care face scheletele să danseze.', { umor: 2, libertate: 1 })
  ] },
  { id: 'esec', eyebrow: 'Despre tine', title: 'Când un plan important eșuează, primul tău impuls este…', options: [
    o('Mă ridic și încerc din nou, mai îndrăzneț.', { curaj: 1, ambitie: 2 }),
    o('Verific cine a fost afectat și cum pot ajuta.', { empatie: 2, ratiune: 1 }),
    o('Analizez unde s-a rupt lanțul.', { ratiune: 2, ambitie: 1 }),
    o('Schimb direcția. Poate era alt drum pentru mine.', { libertate: 2, mister: 1 }),
    o('Fac o glumă proastă și apoi o luăm de la capăt.', { umor: 2, curaj: 1 })
  ] },
  { id: 'musafir', eyebrow: 'Pauză comică', title: 'O fantomă îți ocupă canapeaua. Care e prima replică?', options: [
    o('„Ai nevoie să vorbim?”', { empatie: 2, mister: 1 }),
    o('„Stai. Cum ai trecut prin perete, exact?”', { ratiune: 2, mister: 1 }),
    o('„Dacă plătești chirie, poți bântui și bucătăria.”', { umor: 2, ambitie: 1 }),
    o('„Hai să vedem cine sperie pe cine.”', { curaj: 2, umor: 1 }),
    o('„Îți las canapeaua. Eu plec să explorez podul.”', { libertate: 2, mister: 1 })
  ] },
  { id: 'alegere', eyebrow: 'Dilemă', title: 'Poți salva un sat, dar vei pierde o amintire dragă. Ce faci?', options: [
    o('Accept fără ezitare. Oamenii contează mai mult.', { empatie: 2, curaj: 1 }),
    o('Caut o a treia cale, chiar dacă timpul e scurt.', { ratiune: 2, ambitie: 1 }),
    o('Accept, dar las cuiva povestea amintirii.', { empatie: 1, mister: 2 }),
    o('Întâi îi întreb pe săteni ce alegere și-ar dori.', { libertate: 1, empatie: 2 }),
    o('Încerc să păcălesc vraja; regulile au mereu o portiță.', { umor: 1, ratiune: 1, curaj: 1 })
  ] },
  { id: 'camera', eyebrow: 'Imaginație', title: 'Într-o bibliotecă fără sfârșit, alegi camera…', options: [
    o('Cu viitoruri care încă pot fi schimbate.', { ambitie: 2, mister: 1 }),
    o('Cu poveștile oamenilor uitați.', { empatie: 2, mister: 1 }),
    o('Cu toate mecanismele lumii, explicate clar.', { ratiune: 2, ambitie: 1 }),
    o('Cu uși către locuri care nu există pe hartă.', { libertate: 2, mister: 1 }),
    o('Cu cele mai ridicole vrăji ratate.', { umor: 2, ratiune: 1 })
  ] },
  { id: 'echipa', eyebrow: 'Împreună', title: 'Într-o echipă de aventurieri, ce rol îți vine natural?', options: [
    o('Scutul care intră primul.', { curaj: 2, empatie: 1 }),
    o('Cel care observă când cineva nu mai poate.', { empatie: 2, ratiune: 1 }),
    o('Strategul cu trei planuri de rezervă.', { ratiune: 2, ambitie: 1 }),
    o('Cercetașul care găsește căi noi.', { libertate: 2, mister: 1 }),
    o('Povestitorul care ține moralul sus.', { umor: 2, empatie: 1 })
  ] },
  { id: 'promisiune', eyebrow: 'Caracter', title: 'Ai promis ceva, dar între timp ai descoperit că promisiunea face rău.', options: [
    o('O încalc și explic sincer de ce.', { curaj: 2, empatie: 1 }),
    o('Vorbesc cu persoana implicată înainte să decid.', { empatie: 2, ratiune: 1 }),
    o('Caut o soluție care respectă intenția, nu litera.', { ratiune: 2, mister: 1 }),
    o('Îmi asum consecințele și schimb regulile pentru viitor.', { ambitie: 2, curaj: 1 }),
    o('Recunosc că am greșit. Uneori e cea mai liberă alegere.', { libertate: 2, empatie: 1 })
  ] },
  { id: 'blestem', eyebrow: 'Pauză comică', title: 'Ai fost blestemat să vorbești numai în rime o zi. Cum te descurci?', options: [
    o('Fac spectacol. Publicul n-a cerut, dar primește.', { umor: 2, libertate: 1 }),
    o('Învăț un dicționar de rime și comunic eficient.', { ratiune: 2, ambitie: 1 }),
    o('Compun un mesaj frumos pentru cineva drag.', { empatie: 2, umor: 1 }),
    o('Caut vrăjitorul și îl provoc la duel de versuri.', { curaj: 2, umor: 1 }),
    o('Studiez blestemul. Sigur ascunde o poveste.', { mister: 2, ratiune: 1 })
  ] },
  { id: 'umbra', eyebrow: 'Introspecție', title: 'Ce parte din tine încerci cel mai des să ascunzi?', options: [
    o('Faptul că uneori îmi este frică.', { curaj: 2, empatie: 1 }),
    o('Cât de mult mă afectează ce simt ceilalți.', { empatie: 2, mister: 1 }),
    o('Cât de mult îmi doresc să fiu remarcat.', { ambitie: 2, curaj: 1 }),
    o('Nevoia de a pleca atunci când totul devine previzibil.', { libertate: 2, mister: 1 }),
    o('Că glumesc tocmai când lucrurile devin serioase.', { umor: 2, empatie: 1 })
  ] },
  { id: 'deal', eyebrow: 'Tentație', title: 'Un demon îți oferă succes garantat, dar îți alege el drumul.', options: [
    o('Refuz. Un drum ales de altcineva nu e al meu.', { libertate: 2, curaj: 1 }),
    o('Întreb pe cine ar costa înțelegerea.', { empatie: 2, ratiune: 1 }),
    o('Citesc fiecare condiție și caut clauza ascunsă.', { ratiune: 2, mister: 1 }),
    o('Negociez până obțin un târg corect.', { ambitie: 2, curaj: 1 }),
    o('Îi cer succes la concursul de sculptat dovleci.', { umor: 2, libertate: 1 })
  ] },
  { id: 'luna', eyebrow: 'Ritual', title: 'La miezul nopții, poți trimite un mesaj unei versiuni trecute a ta.', options: [
    o('„O să reziști. Ai mai mult curaj decât crezi.”', { curaj: 2, empatie: 1 }),
    o('„Nu ești singur. Cere ajutor.”', { empatie: 2, curaj: 1 }),
    o('Îi trimit o explicație precisă despre greșeala viitoare.', { ratiune: 2, ambitie: 1 }),
    o('„Schimbă planul. Vei găsi ceva mai bun.”', { libertate: 2, mister: 1 }),
    o('Îi trimit o glumă pe care abia mai târziu o va înțelege.', { umor: 2, mister: 1 })
  ] },
  { id: 'oras', eyebrow: 'Lumea ta', title: 'Ce fel de loc ai construi dacă ai avea magie nelimitată?', options: [
    o('Un refugiu unde nimeni nu e lăsat în urmă.', { empatie: 2, ambitie: 1 }),
    o('Un oraș mobil care nu stă două nopți în același loc.', { libertate: 2, umor: 1 }),
    o('O academie în care orice întrebare primește timp.', { ratiune: 2, mister: 1 }),
    o('O cetate care îi apără pe cei fără putere.', { curaj: 2, empatie: 1 }),
    o('Un teatru în care visele devin spectacole.', { umor: 1, mister: 2 })
  ] },
  { id: 'pericol', eyebrow: 'Instinct', title: 'Un sunet ciudat vine din pădure. Grupul tău se oprește.', options: [
    o('Mă apropii și verific sursa.', { curaj: 2, libertate: 1 }),
    o('Îi adun pe toți și mă asigur că nimeni nu lipsește.', { empatie: 2, ratiune: 1 }),
    o('Ascult tiparul. Poate e un semnal.', { mister: 2, ratiune: 1 }),
    o('Găsesc un traseu alternativ.', { libertate: 2, ratiune: 1 }),
    o('Îi spun pădurii că suntem invitați, nu cină.', { umor: 2, curaj: 1 })
  ] },
  { id: 'cadou', eyebrow: 'Pauză comică', title: 'Ce cadou ai aduce unui dragon la inaugurarea bârlogului?', options: [
    o('O pătură rezistentă la foc, cusută de mine.', { empatie: 2, ratiune: 1 }),
    o('O hartă cu toate locurile neexplorate.', { libertate: 2, mister: 1 }),
    o('Un sistem ingenios de alarmă pentru comoară.', { ratiune: 2, ambitie: 1 }),
    o('Un trofeu câștigat într-o aventură periculoasă.', { curaj: 2, ambitie: 1 }),
    o('Un puzzle cu mesajul „nu arde ambalajul”.', { umor: 2, mister: 1 })
  ] },
  { id: 'mostenire', eyebrow: 'Ce rămâne', title: 'Ce ai vrea să spună lumea despre tine peste o sută de ani?', options: [
    o('„A fost acolo când conta.”', { curaj: 2, empatie: 1 }),
    o('„Ne-a făcut să ne simțim văzuți.”', { empatie: 2, mister: 1 }),
    o('„A înțeles lucruri pe care alții le-au ratat.”', { ratiune: 2, mister: 1 }),
    o('„A schimbat ceva cu adevărat.”', { ambitie: 2, curaj: 1 }),
    o('„N-a încetat niciodată să se mire și să râdă.”', { umor: 2, libertate: 1 })
  ] },
  { id: 'final', eyebrow: 'Ultima alegere', title: 'În fața oglinzii fermecate, ce întrebare îi pui?', options: [
    o('„Pe cine pot proteja mai bine?”', { empatie: 2, curaj: 1 }),
    o('„Ce adevăr nu am vrut încă să văd?”', { mister: 2, curaj: 1 }),
    o('„Ce pot deveni dacă nu mă opresc?”', { ambitie: 2, libertate: 1 }),
    o('„Unde mă duce drumul pe care nu l-am ales?”', { libertate: 2, mister: 1 }),
    o('„Oglindă, oglindă… ai și mod selfie?”', { umor: 2, ratiune: 1 })
  ] }
]

export const creatures: Creature[] = [
  { id: 'cerbul', name: 'Cerbul de Mușchi', kind: 'Spirit al pădurii', image: 0, tagline: 'Blândețea ta ține lumea întreagă în picioare.', story: 'Se spune că apare numai în pădurile unde cineva a ales să se întoarcă după un străin. Coarnele lui poartă mici grădini, iar fiecare floare amintește o promisiune ținută. Nu caută să conducă; totuși, cei pierduți îi urmează lumina.', strengths: ['Loialitate calmă', 'Grijă care devine acțiune'], shadows: ['Te pui prea des pe ultimul loc', 'Îți e greu să ceri ajutor'], profile: { curaj: 7, empatie: 10, mister: 6, libertate: 4, ratiune: 5, ambitie: 3, umor: 3 }, focus: ['empatie', 'curaj'] },
  { id: 'arhivista', name: 'Arhivista Sângerie', kind: 'Vampir al amintirilor', image: 1, tagline: 'Observi adevărul în spațiile dintre cuvinte.', story: 'Nu colecționează vieți, ci poveștile pe care oamenii aproape le-au uitat. În biblioteca ei, fiecare secret primește o etichetă, dar niciunul nu este judecat în grabă. Își alege cu grijă apropiații și ar arde arhiva pentru ei.', strengths: ['Intuiție fină', 'Memorie și discernământ'], shadows: ['Păstrezi prea multe pentru tine', 'Poți confunda prudența cu distanța'], profile: { curaj: 4, empatie: 7, mister: 10, libertate: 3, ratiune: 8, ambitie: 6, umor: 2 }, focus: ['mister', 'ratiune'] },
  { id: 'moliei', name: 'Vrăjitoarea Moliei', kind: 'Țesătoare de vise', image: 2, tagline: 'Acolo unde alții văd haos, tu vezi posibilități.', story: 'Ascultă visele ca pe niște hărți și știe că niciun drum nu trebuie urmat întocmai. Aripile moliilor sale păstrează culorile ideilor care nu au fost încă rostite. Lucrează în tăcere, apoi schimbă întreaga încăpere.', strengths: ['Imaginație profundă', 'Înțelegerea nuanțelor'], shadows: ['Te poți pierde în posibilități', 'Amâni să îți arăți ideile'], profile: { curaj: 3, empatie: 6, mister: 10, libertate: 8, ratiune: 5, ambitie: 4, umor: 4 }, focus: ['mister', 'libertate'] },
  { id: 'garguiul', name: 'Garguiul de Aramă', kind: 'Paznic mecanic', image: 3, tagline: 'Ai un plan chiar și când cerul se rupe în două.', story: 'A fost construit ca ornament, dar a învățat singur să apere turnul. În piept îi bate un mecanism făcut din răbdare și încăpățânare. Când ceilalți intră în panică, el numără ieșirile și rămâne la ușă.', strengths: ['Strategie sub presiune', 'Fiabilitate'], shadows: ['Îți ascunzi nevoile în spatele datoriei', 'Controlul te poate obosi'], profile: { curaj: 7, empatie: 4, mister: 3, libertate: 2, ratiune: 10, ambitie: 7, umor: 2 }, focus: ['ratiune', 'curaj'] },
  { id: 'dragonul', name: 'Dragonul de Maree', kind: 'Fiară a orizontului', image: 4, tagline: 'Nu te temi de adâncime; te temi de țărmuri prea mici.', story: 'Nimeni nu i-a văzut vreodată cuibul, fiindcă îl mută odată cu curenții. Cunoaște stelele de pe ambele părți ale lumii și apără pe oricine îndrăznește să traverseze apele. Puterea lui este mișcarea.', strengths: ['Îndrăzneală', 'Adaptare rapidă'], shadows: ['Te saturi repede de rutină', 'Uneori pleci înainte să explici'], profile: { curaj: 9, empatie: 4, mister: 6, libertate: 10, ratiune: 4, ambitie: 6, umor: 3 }, focus: ['libertate', 'curaj'] },
  { id: 'dovleacul', name: 'Prințul Felinar', kind: 'Poznaș al recoltei', image: 5, tagline: 'Aprinzi râsul exact când noaptea devine prea lungă.', story: 'Conduce un carnaval care apare o singură noapte pe an și dispare înainte de răsărit. Își deghizează bunătatea în farse elaborate și știe numele tuturor celor care au nevoie de o pauză. În spatele zâmbetului luminat stă un prieten de nădejde.', strengths: ['Spirit jucăuș', 'Optimism contagios'], shadows: ['Ascunzi grijile în glume', 'Poți evita conversațiile incomode'], profile: { curaj: 5, empatie: 7, mister: 3, libertate: 8, ratiune: 3, ambitie: 4, umor: 10 }, focus: ['umor', 'libertate'] },
  { id: 'violonista', name: 'Violonista de Ceață', kind: 'Ecou rătăcitor', image: 6, tagline: 'Simți ce nu poate fi spus și îi dai o formă.', story: 'Cântă la ferestrele celor care cred că au fost uitați. Melodiile ei nu șterg durerea, dar o fac mai ușor de purtat. Deși poate trece prin orice zid, rămâne acolo unde cineva o ascultă cu adevărat.', strengths: ['Ascultare rară', 'Sensibilitate creativă'], shadows: ['Absorbi emoțiile altora', 'Te agăți de trecut'], profile: { curaj: 3, empatie: 10, mister: 8, libertate: 5, ratiune: 3, ambitie: 2, umor: 4 }, focus: ['empatie', 'mister'] },
  { id: 'magul', name: 'Magul Oaselor', kind: 'Alchimist al imposibilului', image: 7, tagline: 'Pentru tine, fiecare regulă este începutul unei întrebări.', story: 'Nu a căutat nemurirea, ci timp destul pentru a termina toate experimentele începute. Transformă greșelile în descoperiri și ține evidența lor cu o mândrie suspectă. Într-o criză, va găsi o soluție neașteptată și un comentariu sec.', strengths: ['Ingeniozitate', 'Umor inteligent'], shadows: ['Poți analiza până pierzi momentul', 'Îți vine greu să lași controlul'], profile: { curaj: 4, empatie: 3, mister: 8, libertate: 5, ratiune: 10, ambitie: 7, umor: 7 }, focus: ['ratiune', 'mister'] },
  { id: 'fenixul', name: 'Cavalerul Fenix', kind: 'Gardian al jarului', image: 8, tagline: 'Cazi, te ridici și aduci lumina cu tine.', story: 'Armura lui păstrează urmele fiecărei lupte pierdute, nu ca rușine, ci ca hartă. Nu promite victorii ușoare. Promite că, dacă mai există o șansă, va fi acolo să o apere.', strengths: ['Tenacitate', 'Curaj care îi inspiră pe alții'], shadows: ['Îți ceri prea mult', 'Poți confunda odihna cu renunțarea'], profile: { curaj: 10, empatie: 6, mister: 2, libertate: 5, ratiune: 4, ambitie: 9, umor: 2 }, focus: ['curaj', 'ambitie'] },
  { id: 'oracolul', name: 'Oracolul Sporilor', kind: 'Înțelept al subpământului', image: 9, tagline: 'Ai răbdarea de a vedea ce crește în întuneric.', story: 'Vorbește cu pădurea prin fire invizibile, adunând mesaje din toate colțurile ei. Nu dă răspunsuri rapide; pune întrebarea care schimbă răspunsul. Cei care îl întâlnesc pleacă mai curioși decât au venit.', strengths: ['Perspectivă amplă', 'Răbdare'], shadows: ['Poți părea greu de citit', 'Aștepți uneori prea mult semnul perfect'], profile: { curaj: 3, empatie: 7, mister: 9, libertate: 4, ratiune: 9, ambitie: 3, umor: 3 }, focus: ['mister', 'ratiune'] },
  { id: 'lupul', name: 'Lupul Nopții Albastre', kind: 'Cercetaș al umbrelor', image: 10, tagline: 'Îți urmezi instinctul și îi scoți pe ai tăi din furtună.', story: 'Aleargă înaintea haitei, nu pentru glorie, ci pentru a găsi drumul sigur. Are încredere în propriile simțuri, dar se întoarce mereu după cei rămași în urmă. Nu se teme de singurătate; o folosește ca să audă mai bine.', strengths: ['Independență', 'Devotament discret'], shadows: ['Ceri rar sprijin', 'Te retragi când ai nevoie de apropiere'], profile: { curaj: 8, empatie: 6, mister: 5, libertate: 9, ratiune: 6, ambitie: 4, umor: 2 }, focus: ['libertate', 'empatie'] },
  { id: 'oglinda', name: 'Regina Oglinzilor', kind: 'Demon al reflexiilor', image: 11, tagline: 'Vezi mai multe versiuni ale viitorului și alegi una.', story: 'Palatul ei are o mie de oglinzi și nicio ieșire marcată. Le arată vizitatorilor cine ar putea deveni, dar nu ia decizia pentru ei. Își poartă ambiția ca pe o coroană fragilă: strălucitoare, ascuțită, făcută de mâna ei.', strengths: ['Viziune', 'Hotărâre'], shadows: ['Poți urmări perfecțiunea prea departe', 'Îți este greu să accepți incertitudinea'], profile: { curaj: 6, empatie: 3, mister: 8, libertate: 7, ratiune: 7, ambitie: 10, umor: 3 }, focus: ['ambitie', 'mister'] },
  { id: 'manticora', name: 'Manticora de Onix', kind: 'Vânător al hotarelor', image: 12, tagline: 'Când drumul se închide, tu îl deschizi cu ghearele.', story: 'Păzește potecile dintre regate și nu recunoaște stăpâni. Își arată colții celor care amenință călătorii, apoi le lasă celor salvați libertatea de a-și alege singuri destinația. Încrederea ei se câștigă greu și ține o viață.', strengths: ['Hotărâre neclintită', 'Protecție instinctivă'], shadows: ['Poți transforma orice provocare în luptă', 'Îți arăți greu vulnerabilitatea'], profile: { curaj: 9, empatie: 4, mister: 4, libertate: 9, ratiune: 3, ambitie: 8, umor: 3 }, focus: ['curaj', 'libertate'] },
  { id: 'papusa', name: 'Păpușa de Porțelan', kind: 'Păstrătoare de jurăminte', image: 13, tagline: 'Nimeni nu ghicește câtă voință încape într-o inimă fragilă.', story: 'A fost lăsată într-o casă uitată, dar a învățat numele fiecărui vizitator. Crăpăturile ei luminează când cineva își ține cuvântul. Nu cere să fie reparată; vrea ca poveștile începute acolo să primească un sfârșit.', strengths: ['Memorie afectivă', 'Răbdare'], shadows: ['Te agăți de promisiuni vechi', 'Te temi să începi din nou'], profile: { curaj: 3, empatie: 8, mister: 8, libertate: 2, ratiune: 5, ambitie: 5, umor: 3 }, focus: ['empatie', 'mister'] },
  { id: 'luntrasul', name: 'Luntrașul de Cenușă', kind: 'Călăuză a pragurilor', image: 14, tagline: 'Știi să treci prin sfârșituri fără să pierzi pe nimeni.', story: 'Își conduce barca pe râuri care apar numai când o poveste se încheie. Nu hotărăște cine urcă; ascultă, pune o întrebare și ține felinarul aprins până când pasagerul își găsește curajul. Niciun nume nu îi este străin.', strengths: ['Calm în momente grele', 'Ascultare fără judecată'], shadows: ['Porți poveri care nu sunt ale tale', 'Poți rămâne prea mult între două drumuri'], profile: { curaj: 6, empatie: 9, mister: 8, libertate: 3, ratiune: 6, ambitie: 2, umor: 2 }, focus: ['empatie', 'mister'] },
  { id: 'sfinxul', name: 'Sfinxul de Jad', kind: 'Paznic al întrebărilor', image: 15, tagline: 'Răspunsul bun începe cu întrebarea pe care alții o evită.', story: 'Veghează o poartă fără lacăt. O deschide doar celui care își schimbă părerea după ce află ceva nou. Sub privirea lui, istețimea nu este un trofeu, ci o formă de curaj.', strengths: ['Gândire limpede', 'Curiozitate disciplinată'], shadows: ['Poți părea rece când analizezi', 'Te enervează răspunsurile grăbite'], profile: { curaj: 5, empatie: 4, mister: 8, libertate: 5, ratiune: 10, ambitie: 6, umor: 3 }, focus: ['ratiune', 'mister'] },
  { id: 'golemul', name: 'Golemul Manuscriselor', kind: 'Constructor de amintiri', image: 16, tagline: 'Aduni fragmente risipite și le dai o ordine nouă.', story: 'Fiecare filă din trupul lui a aparținut unei cărți neterminate. Le poartă fără să le confunde și le așază la loc când găsește pe cineva care are nevoie de ele. Încăpățânarea lui a salvat biblioteci întregi.', strengths: ['Rigoare', 'Perseverență'], shadows: ['Îți vine greu să improvizezi', 'Poți confunda ordinea cu siguranța'], profile: { curaj: 6, empatie: 5, mister: 6, libertate: 2, ratiune: 9, ambitie: 8, umor: 2 }, focus: ['ratiune', 'ambitie'] },
  { id: 'sirena', name: 'Sirena de Smarald', kind: 'Voce a apelor adânci', image: 17, tagline: 'Faci loc emoțiilor fără să te lași înghițit de ele.', story: 'Cântecul ei nu ademenește corăbii, ci le avertizează de furtuni. Colecționează ultimele cuvinte nerostite și le întoarce celor care mai au timp să le spună. Marea îi dă libertate, nu singurătate.', strengths: ['Farmec cald', 'Intuiție socială'], shadows: ['Te schimbi ca să fii pe placul tuturor', 'Te poate obosi zgomotul altora'], profile: { curaj: 4, empatie: 9, mister: 7, libertate: 8, ratiune: 3, ambitie: 5, umor: 6 }, focus: ['empatie', 'libertate'] },
  { id: 'harpia', name: 'Harpia Furtunii', kind: 'Vestitoare a cerului', image: 18, tagline: 'Vântul te schimbă, dar nu te răstoarnă.', story: 'Zboară înaintea norilor și strigă avertismente pe care numai cei atenți le aud. Nu așteaptă permisiunea de a încerca ceva nou. După orice vijelie se întoarce cu vești și cu un plan făcut în zbor.', strengths: ['Reacție rapidă', 'Independență'], shadows: ['Te aprinzi repede', 'Te plictisesc planurile prea fixe'], profile: { curaj: 9, empatie: 4, mister: 4, libertate: 10, ratiune: 5, ambitie: 5, umor: 6 }, focus: ['libertate', 'curaj'] },
  { id: 'zana', name: 'Zâna Spinilor', kind: 'Grădinară a hotarelor', image: 19, tagline: 'Bunătatea ta are petale, dar și spini.', story: 'Lasă trandafiri pe drumurile celor pierduți și garduri de spini în fața celor cruzi. A învățat că a avea grijă de ceilalți nu înseamnă a spune mereu da. Grădina ei înflorește tocmai pentru că știe să o apere.', strengths: ['Grijă cu limite sănătoase', 'Creativitate'], shadows: ['Îți testezi prea mult apropiații', 'Poți ascunde supărarea sub farmec'], profile: { curaj: 4, empatie: 10, mister: 7, libertate: 9, ratiune: 3, ambitie: 3, umor: 8 }, focus: ['empatie', 'libertate'] },
  { id: 'uriasul', name: 'Uriașul de Sare', kind: 'Stâlp al văilor', image: 20, tagline: 'Nu promiți ușor. Când promiți, rămâi.', story: 'Stă nemișcat pe creastă până când muntele are nevoie de el. Atunci ridică pietrele căzute și face trecere pentru cei mici. Puterea lui nu se măsoară în zgomot, ci în câte vieți pot merge mai departe.', strengths: ['Statornicie', 'Curaj liniștit'], shadows: ['Te miști greu când e timpul să schimbi ceva', 'Îți ascunzi oboseala'], profile: { curaj: 9, empatie: 8, mister: 3, libertate: 3, ratiune: 6, ambitie: 2, umor: 2 }, focus: ['curaj', 'empatie'] },
  { id: 'alchimistul', name: 'Alchimistul Ciorilor', kind: 'Inventator al nopții', image: 21, tagline: 'Dintr-o greșeală faci rețeta următoarei descoperiri.', story: 'Atelierul lui miroase a ploaie, cerneală și licori nereușite. Ciorile îi aduc întrebări, iar el le răspunde prin experimente. Nu urmărește perfecțiunea; urmărește clipa în care o idee imposibilă începe să funcționeze.', strengths: ['Spirit inventiv', 'Învățare rapidă'], shadows: ['Începi mai mult decât termini', 'Te retragi în muncă'], profile: { curaj: 5, empatie: 4, mister: 8, libertate: 6, ratiune: 9, ambitie: 8, umor: 5 }, focus: ['ratiune', 'ambitie'] },
  { id: 'basiliscul', name: 'Basiliscul de Chihlimbar', kind: 'Străjer al tăcerii', image: 22, tagline: 'Vezi pericolul înainte să capete nume.', story: 'În loc să prefacă lumea în piatră, îngheață o clipă înaintea unei alegeri rele. Nu vorbește mult și nu irosește mișcări. Cine îi câștigă încrederea descoperă un paznic mai atent decât pare.', strengths: ['Observație', 'Autocontrol'], shadows: ['Poți suspecta prea repede', 'Îți vine greu să te relaxezi'], profile: { curaj: 6, empatie: 3, mister: 8, libertate: 5, ratiune: 8, ambitie: 6, umor: 2 }, focus: ['mister', 'ratiune'] },
  { id: 'arlechinul', name: 'Arlechinul Eclipsei', kind: 'Actor al clipelor schimbătoare', image: 23, tagline: 'Râzi în fața necunoscutului și îl inviți la dans.', story: 'Apare când luna acoperă soarele și nimeni nu mai știe ce rol joacă. Schimbă măștile ca să arate că identitatea poate fi o alegere, nu o cușcă. Glumele lui sunt uneori incomode, dar niciodată fără rost.', strengths: ['Improvizație', 'Curaj social'], shadows: ['Poți fugi de adevăr prin spectacol', 'Îți este greu să stai pe loc'], profile: { curaj: 6, empatie: 5, mister: 7, libertate: 9, ratiune: 5, ambitie: 5, umor: 10 }, focus: ['umor', 'libertate'] }
]
