import '../styles.css';
import './styles.css';
import Portrait from '../../../assets/portrait.jpg';

function OmMegSection({ siteContent }) {
  var darkMode = siteContent.Kundeanbefalinger.Anbefalinger.length <= 0;
  return (
    <div
      className={
        'section-container ommeg-container' + (darkMode ? ' ommeg-dark' : '')
      }
      id='om-meg'
    >
      <div className='inner-section-container'>
        <div className='section-title'>{siteContent.OmMeg.Tittel}</div>
        <div className='om-meg-section'>
          <div className='om-meg-portrait'>
            <img src={Portrait} alt='portrett' />
          </div>
          <div className='om-meg-text'>
            <div className='om-meg-navn'>{siteContent.OmMeg.Navn}</div>
            <div className='om-meg-jobbtittel'>
              {siteContent.OmMeg.Jobtittel}
            </div>
            {siteContent.OmMeg.Tekst.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmMegSection;
