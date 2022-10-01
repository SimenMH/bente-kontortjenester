import './styles.css';

const tjenester = [
  {
    title: 'Regnskapshjelp for små foretak',
    text: 'Jeg viser deg hvordan du enkelt kan føre regnskapet selv og samtidig være trygg på at alt blir håndtert riktig.',
  },
  {
    title: 'Rimelig og tidsbesparende',
    text: 'Bli overrasket over hvor få timer som skal til når alt er tilrettelagt og systematisert.',
  },
  {
    title: 'Kvalitetssikring og tilrettelegging',
    text: 'Du bestemmer hvor mye du ønsker å gjøre selv, uten at det skal trenge å koste en formue.',
  },
  {
    title: 'Effektivt og problemfritt',
    text: 'Ingen forkunnskaper nødvendig, og tar minimalt med tid. Få bedre oversikt og verdifull innsikt i ditt eget regnskap.',
  },
];

function TjenesterItems() {
  return (
    <div className='tjenester-item-container'>
      {tjenester.map(tjeneste => {
        return (
          <div className='tjenester-item'>
            <div className='tjenester-item-icon' />
            <div className='tjenester-item-title'>{tjeneste.title}</div>
            <div className='tjenester-item-text'>{tjeneste.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TjenesterItems;
