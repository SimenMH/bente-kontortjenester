import '../styles.css';
import './styles.css';
import { useState } from 'react';
import Expand from 'react-expand-animated';
import TjenesterItems from './TjenesterItemsComponent';

function TjenesterSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='section-container' id='tjenester'>
      <div className='inner-section-container'>
        <div className='section-title'>
          Et rimelig alternativ til regnskapsfører
        </div>
        <div className='section-subtext'>Les mer om min virksomhet</div>
        <TjenesterItems />
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
    </div>
  );
}

export default TjenesterSection;
