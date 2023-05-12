import '../styles.css';
import './styles.css';

// const quotes = [
//   {
//     text: 'Jeg hadde null erfaring og kunnskap om regnskap og bokføring og betalte relativt mye for at et regnskapsbyrå skulle ta seg av alt. Men jeg syntes ikke den tjenesten jeg mottok sto i forhold til den høye prisen jeg betalte. Med kyndig veiledning fører jeg nå regnskapet selv. Jeg bruker noen få timer i måneden på dette og Bente tilrettelegger og gjør det så enkelt og oversiktlig at hvem som helst kan klare det.',
//     author: 'Per Ivars Tømrerservice',
//   },
//   {
//     text: 'Bente er meget dyktig og nøyaktig i det hun driver med og regnskapet ditt er i trygge hender med henne på laget. Jeg har også spart mye penger ved at hun har tipset meg om skattefordeler og fradrag jeg ikke visste om.',
//     author: 'Simen M.H / Frilans Utvikler',
//   },
//   {
//     text: 'Etter at jeg startet samarbeidet med BS Kontortjeneste har jeg fått en helt ny forståelse for hvordan det regnskapsmessige fungerer og hva som påvirker resultatet. Jeg hadde i utgangspunktet ingen interesse for den delen av driften men vårt samarbeid har gitt meg verdifull innsikt i selskapets økonomi.',
//     author: 'Maria / Interiørdesignere',
//   },
// ];

function KundeanbefalingerSection({ siteContent }) {
  if (siteContent.Kundeanbefalinger.Anbefalinger.length <= 0) return;
  return (
    <div
      className='section-container kundeanbefalinger-container'
      id='kundeanbefalinger'
    >
      <div className='inner-section-container'>
        <div className='section-title'>
          {siteContent.Kundeanbefalinger.Tittel}
        </div>
        {siteContent.Kundeanbefalinger.Anbefalinger.map(quote => {
          return (
            <div className='kundeanbefalinger-quote'>
              <p>"{quote.Tekst}"</p>
              <p>- {quote.Forfatter}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KundeanbefalingerSection;
