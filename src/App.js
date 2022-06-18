import './App.css';
import { useState } from 'react';
import Expand from 'react-expand-animated';
import NavBar from './components/NavBar.component';

import Portrait from './portrait.jpg';

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <NavBar />
      <div className='content-header' id='forside'>
        <div className='title'>REGNSKAPSRÅDGIVNING</div>
        <div className='slogan'>Erfaren Regnskapskonsulent</div>
      </div>
      <div className='tjenester-container' id='tjenester'>
        <div className='tjenester-title'>
          Et rimelig alternativ til regnskapsfører
        </div>
        <div className='tjenester-subtext'>Les mer om min virksomhet</div>
        <div className='tjenester-item-container'>
          <div className='tjenester-item'>
            <div className='tjenester-item-icon' />
            <div className='tjenester-item-title'>
              Regnskapshjelp for <br />
              små foretak
            </div>
            <div className='tjenester-item-text'>
              Jeg viser deg hvordan du enkelt kan føre regnskapet selv og
              samtidig være trygg på at alt blir håndtert riktig.
            </div>
          </div>
          <div className='tjenester-item'>
            <div className='tjenester-item-icon' />
            <div className='tjenester-item-title'>
              Rimelig og tidsbesparende
            </div>
            <div className='tjenester-item-text'>
              Bli overrasket over hvor få timer som skal til når alt er
              tilrettelagt og systematisert.
            </div>
          </div>
          <div className='tjenester-item'>
            <div className='tjenester-item-icon' />
            <div className='tjenester-item-title'>
              Kvalitetssikring og tilrettelegging
            </div>
            <div className='tjenester-item-text'>
              Du bestemmer hvor mye du ønsker å gjøre selv, uten at det skal
              trenge å koste en formue.
            </div>
          </div>
          <div className='tjenester-item'>
            <div className='tjenester-item-icon' />
            <div className='tjenester-item-title'>
              Effektivt og problemfritt
            </div>
            <div className='tjenester-item-text'>
              Ingen forkunnskaper nødvendig, og tar minimalt med tid. Få bedre
              oversikt og verdifull innsikt i ditt eget regnskap.
            </div>
          </div>
        </div>
        <Expand open={showMore}>
          <p>
            Driver du et lite foretak og synes at du betaler altfor mye for
            regnskapstjenester? Å hyre en regnskapsfører er dyrt, men de fleste
            bedrifter med få eller ingen ansatte prioriterer det for å slippe å
            bruke tid på noe de ikke kan og samtidig være trygg på at alt blir
            håndtert riktig. Andre velger å føre regnskap selv, og risikerer
            dermed å bruke mye tid på å tilegne seg nok kunnskap om lover og
            regler (som stadig endrer seg) slik at det blir skattemessig korrekt
            og de unngår å bli straffet for feil eller manglende informasjon. Å
            benytte en rimelig rådgivningstjeneste kan være løsningen! Jeg har
            kunnskapen, erfaringen og tyngden, og viser deg hvordan du enkelt
            kan føre regnskap selv og samtidig være trygg på at alt blir
            håndtert riktig. Du velger selv hva og hvor mye du gjør på egenhånd,
            jeg kontrollerer at alt er gjort på riktig måte og guider deg der du
            er usikker. Du vil bli overrasket over hvor få timer som skal til
            når alt er tilrettelagt og systematisert. Dersom du ønsker å gjøre
            mest mulig selv vil du etterhvert trenge færre og færre timer med
            veiledning. Vil du gjøre minst mulig løser vi det også uten at det
            koster en formue. Selve bokføringen, rapportering etc gjør du, men
            med enkle rutiner og riktig tilrettelegging krever det ingen
            forkunnskaper og tar minimalt med tid. Samtidig får du bedre
            oversikt og verdifull innsikt i regnskapet ditt.
          </p>
        </Expand>
        <div
          className='tilbud-button'
          onClick={() => {
            setShowMore(prev => !prev);
          }}
        >
          {showMore ? 'Skjul' : 'Les mer om tilbudet'}
        </div>
      </div>
      <div className='kundeanbefalinger-container' id='kundeanbefalinger'>
        <div className='kundeanbefalinger-title'>Uttalelser fra kunder</div>
        <p>
          "Jeg hadde null erfaring og kunnskap om regnskap og bokføring og
          betalte relativt mye for at et regnskapsbyrå skulle ta seg av alt. Men
          jeg syntes ikke den tjenesten jeg mottok sto i forhold til den høye
          prisen jeg betalte. Med kyndig veiledning fører jeg nå regnskapet
          selv. Jeg bruker noen få timer i måneden på dette og Bente
          tilrettelegger og gjør det så enkelt og oversiktlig at hvem som helst
          kan klare det."
        </p>
        <p>- Per Ivars Tømrerservice</p>
        <p>
          "Bente er meget dyktig og nøyaktig i det hun driver med og regnskapet
          ditt er i trygge hender med henne på laget. Jeg har også spart mye
          penger ved at hun har tipset meg om skattefordeler og fradrag jeg ikke
          visste om."
        </p>
        <p>- Simen M.H / Frilans Utvikler</p>
        <p>
          "Etter at jeg startet samarbeidet med BS Kontortjeneste har jeg fått
          en helt ny forståelse for hvordan det regnskapsmessige fungerer og hva
          som påvirker resultatet. Jeg hadde i utgangspunktet ingen interesse
          for den delen av driften men vårt samarbeid har gitt meg verdifull
          innsikt i selskapets økonomi."
        </p>
        <p>- Maria / Interiørdesigner</p>
      </div>
      <div className='om-meg-container' id='om-meg'>
        <div className='tjenester-title'>Om meg</div>
        <div className='om-meg-section'>
          <div className='portrait'>
            <img src={Portrait} alt='portrett' />
          </div>
          <div className='om-meg-text'>
            <div className='navn'>Bente S Herland</div>
            <div className='tittel'>Regnskapsrådgiver</div>
            <p>
              Mange års erfaring med regnskap, lønn, avstemming, årsoppgjør,
              prosjektregnskap, analyser m.m.
            </p>
            <p>
              Bakgrunn bl.a som Regnskapsansvarlig og Fagansvarlig på
              økonomiavdeling
            </p>
            <p>Erfaring med AS, ASA og enkeltpersonforetak</p>
            <p>Gode referanser</p>
            <p>Holder til i Bergen men tar oppdrag over hele landet </p>
          </div>
        </div>
      </div>
      <div className='kontakt-container' id='kontakt'>
        <div className='tjenester-title'>Ta kontakt i dag</div>
        <div className='tjenester-subtext'>Første konsultasjon er gratis</div>
        <div className='bestill-button'>Bestill gratis konsultasjon</div>
      </div>
      <footer>
        <p>
          © 2022 BS Kontortjenester ved Bente Herland <br /> (+47) 454 65 382 |
          bente.s.herland@gmail.com
        </p>
        <p>Org.nr 926 150 758</p>
      </footer>
    </div>
  );
}

export default App;
