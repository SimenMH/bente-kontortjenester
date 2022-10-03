import './styles.css';
import AccountingIcon from '../../../assets/icons/accounting-icon.png';
import CheapIcon from '../../../assets/icons/cheap-icon.png';
import EffectiveIcon from '../../../assets/icons/effective-icon.png';
import QualityIcon from '../../../assets/icons/quality-icon.png';

const tjenester = [
  {
    title: 'Regnskapshjelp for små foretak',
    text: 'Jeg viser deg hvordan du enkelt kan føre regnskapet selv og samtidig være trygg på at alt blir håndtert riktig.',
    icon: AccountingIcon,
  },
  {
    title: 'Rimelig og tidsbesparende',
    text: 'Bli overrasket over hvor få timer som skal til når alt er tilrettelagt og systematisert.',
    icon: CheapIcon,
  },
  {
    title: 'Kvalitetssikring og tilrettelegging',
    text: 'Du bestemmer hvor mye du ønsker å gjøre selv, uten at det skal trenge å koste en formue.',
    icon: QualityIcon,
  },
  {
    title: 'Effektivt og problemfritt',
    text: 'Ingen forkunnskaper nødvendig, og tar minimalt med tid. Få bedre oversikt og verdifull innsikt i ditt eget regnskap.',
    icon: EffectiveIcon,
  },
];

function TjenesterItems() {
  return (
    <div className='tjenester-item-container'>
      {tjenester.map(tjeneste => {
        return (
          <div className='tjenester-item'>
            <div className='tjenester-item-icon'>
              <img src={tjeneste.icon} alt='icon' />
            </div>
            <div className='tjenester-item-title'>{tjeneste.title}</div>
            <div className='tjenester-item-text'>{tjeneste.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TjenesterItems;
