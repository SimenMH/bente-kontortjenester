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
          Driver du et lite foretak og synes at du betaler altfor mye for
          regnskapstjenester?
        </div>
        <div className='section-subtext'>
          Å benytte en rimelig rådgivningstjeneste kan være løsningen for deg!
        </div>
        <TjenesterItems />
        <Expand open={showMore}>
          <div className='tjenester-more-container'>
            <div className='tjenester-more-title'>
              Et rimelig alternativ til regnskapsfører
            </div>
            <div className='tjenester-more-subtitle'></div>
            <p>
              Jeg har kunnskapen, erfaringen og tyngden, og viser hvordan du
              enkelt kan føre regnskapet selv og samtidig være trygg på at alt
              blir håndtert riktig.
            </p>
            <p>
              Du velger selv hva og hvor mye du gjør på egenhånd, jeg
              kontrollerer at alt er gjort på riktig måte og guider deg der du
              er usikker.Du vil bli overrasket over hvor få timer som skal til
              når alt er tilrettelagt og systematisert.
            </p>
            <p>
              Dersom du ønsker å gjøre mest mulig selv vil du etterhvert trenge
              færre og færre timer med veiledning.Vil du gjøre minst mulig løser
              vi det også uten at det koster en formue.
            </p>
            <p>
              Selve bokføringen og rapporteringen gjør du, men med enkle rutiner
              og riktig tilrettelegging krever det ingen forkunnskaper og tar
              minimalt med tid.
            </p>
            <p>
              Og samtidig får du bedre oversikt og verdifull innsikt i
              regnskapet ditt.
            </p>
          </div>
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
