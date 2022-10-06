import '../styles.css';
import './styles.css';

function KontaktSection() {
  return (
    <div className='section-container kontakt-container' id='kontakt'>
      <div className='inner-section-container'>
        <div className='section-title'>Ta kontakt i dag</div>
        <div className='section-subtext'>Første konsultasjon er gratis</div>
        <a
          href='mailto: post@benko.no'
          target='_blank'
          rel='noreferrer'
          className='bestill-button'
        >
          Bestill gratis konsultasjon
        </a>
        <p className='kontakt-email'>Email: post@benko.no</p>
      </div>
    </div>
  );
}

export default KontaktSection;
