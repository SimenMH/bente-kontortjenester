import { useState } from 'react';
import StarSVG from '../../assets/media/svg/star.svg';
import ArrowSVG from '../../assets/media/svg/arrow-right.svg';

// const quotes = [
//   {
//     Tekst:
//       "Jeg hadde null erfaring og kunnskap om regnskap og bokføring og betalte relativt mye for at et regnskapsbyrå skulle ta seg av alt. Men jeg syntes ikke den tjenesten jeg mottok sto i forhold til den høye prisen jeg betalte. Med kyndig veiledning fører jeg nå regnskapet selv. Jeg bruker noen få timer i måneden på dette og Bente tilrettelegger og gjør det så enkelt og oversiktlig at hvem som helst kan klare det.",
//     Forfatter: 'Per Ivars Tømrerservice",
//   },
//   {
//     Tekst:
//       'Bente er meget dyktig og nøyaktig i det hun driver med og regnskapet ditt er i trygge hender med henne på laget. Jeg har også spart mye penger ved at hun har tipset meg om skattefordeler og fradrag jeg ikke visste om.',
//     Forfatter: 'Simen M.H / Frilans Utvikler',
//   },
//   {
//     Tekst:
//       'Etter at jeg startet samarbeidet med BS Kontortjeneste har jeg fått en helt ny forståelse for hvordan det regnskapsmessige fungerer og hva som påvirker resultatet. Jeg hadde i utgangspunktet ingen interesse for den delen av driften men vårt samarbeid har gitt meg verdifull innsikt i selskapets økonomi.',
//     Forfatter: 'Maria / Interiørdesignere',
//   },
// ];

function AttesterSection({ siteContent }) {
  const [quoteSelector, setQuoteSelector] = useState(0);
  const quotes = siteContent.Kundeanbefalinger.Anbefalinger;

  const navigateQuotes = dir => {
    if (dir !== 1 && dir !== -1) return;

    setQuoteSelector(state => {
      let newState = state + dir;

      if (newState < 0) {
        // Loop to end
        newState = Math.max(quotes.length - 1, 0);
      } else if (newState >= quotes.length) {
        // Loop to start
        newState = 0;
      }

      return newState;
    });
  };

  return (
    <div className='Section AttesterSection' id='attester'>
      <div className='Section__Content Attester'>
        <div className='Attester__Title'>
          Hva mine kunder sier om arbeidet mitt
        </div>

        <div className='Attester__Card'>
          <div className='Attester__StarContainer'>
            <img src={StarSVG} alt='star' />
            <img src={StarSVG} alt='star' />
            <img src={StarSVG} alt='star' />
            <img src={StarSVG} alt='star' />
            <img src={StarSVG} alt='star' />
          </div>
          <div className='Attester__Text'>{quotes[quoteSelector].Tekst}</div>
          <div className='Attester__Seperator' />
          <div className='Attester__CardBottomContainer'>
            <div className='Attester__Author'>
              {quotes[quoteSelector].Forfatter}
            </div>

            <div className='Attester__NavContainer'>
              <div
                className='Attester__NavArrow Attester__NavArrow--left'
                onClick={() => navigateQuotes(-1)}
              >
                <img src={ArrowSVG} alt='Nav Left' />
              </div>
              <div
                className='Attester__NavArrow Attester__NavArrow--right'
                onClick={() => navigateQuotes(1)}
              >
                <img src={ArrowSVG} alt='Nav Right' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttesterSection;
