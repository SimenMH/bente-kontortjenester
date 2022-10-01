import '../styles.css';
import './styles.css';
import Portrait from '../../../assets/portrait.jpg';

function OmMegSection() {
  return (
    <div className='section-container' id='om-meg'>
      <div className='inner-section-container'>
        <div className='section-title'>Om meg</div>
        <div className='om-meg-section'>
          <div className='om-meg-portrait'>
            <img src={Portrait} alt='portrett' />
          </div>
          <div className='om-meg-text'>
            <div className='om-meg-navn'>Bente S Herland</div>
            <div className='om-meg-jobbtittel'>Regnskapsrådgiver</div>
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
    </div>
  );
}

export default OmMegSection;
