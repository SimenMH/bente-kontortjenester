import '../styles.css';
import './styles.css';
import { useState } from 'react';
import Expand from 'react-expand-animated';
import TjenesterItems from './TjenesterItemsComponent';

function TjenesterSection({ siteContent }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='section-container' id='tjenester'>
      <div className='inner-section-container'>
        <div className='section-title'>{siteContent.Tjenester.Tittel}</div>
        <div className='section-subtext'>
          {siteContent.Tjenester.Underskrift}
        </div>
        <TjenesterItems />
        <Expand open={showMore}>
          <div className='tjenester-more-container'>
            <div className='tjenester-more-title'>
              {siteContent.Tjenester.LesMer.Tittel}
            </div>
            <div className='tjenester-more-subtitle'>
              {siteContent.Tjenester.LesMer.Underskrift}
            </div>
            {siteContent.Tjenester.LesMer.Tekst.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
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
