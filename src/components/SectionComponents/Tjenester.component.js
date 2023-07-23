import { useState } from 'react';
import Expand from 'react-expand-animated';
// import TjenesterItems from './TjenesterItemsComponent';

import InvoiceImg from '../../assets/media/card-images/Invoice-img.svg';
import SavingsImg from '../../assets/media/card-images/Savings-img.svg';
import OpinionImg from '../../assets/media/card-images/Opinion-img.svg';
import SecureImg from '../../assets/media/card-images/Secure-img.svg';
import ExpandArrow from '../../assets/media/expand-arrow.svg';

function TjenesterSection({ siteContent }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='Section' id='tjenester'>
      <div className='Section__Content Tjenester'>
        <div className='Tjenester__Title'>{siteContent.Tjenester.Tittel}</div>
        <div className='Tjenester__Subtext'>
          {siteContent.Tjenester.Underskrift}
        </div>

        <div className='Tjenester__CardContainer'>
          <div className='Tjenester__Card'>
            <img src={InvoiceImg} className='Tjenester__CardImg' alt='' />
            <div className='Tjenester__CardText'>
              Regnskapshjelp for små foretak
            </div>
          </div>
          <div className='Tjenester__Card'>
            <img src={SavingsImg} className='Tjenester__CardImg' alt='' />
            <div className='Tjenester__CardText'>Rimelig og tidsbesparende</div>
          </div>
          <div className='Tjenester__Card'>
            <img src={OpinionImg} className='Tjenester__CardImg' alt='' />
            <div className='Tjenester__CardText'>
              Kvalitetssikring og tilrettelegging
            </div>
          </div>
          <div className='Tjenester__Card'>
            <img src={SecureImg} className='Tjenester__CardImg' alt='' />
            <div className='Tjenester__CardText'>Effektivt og problemfritt</div>
          </div>
        </div>
        {/* <TjenesterItems /> */}
        <Expand open={showMore}>
          <div className='Tjenester__MoreText'>
            <div className='Tjenester__MoreTitle'>
              {siteContent.Tjenester.LesMer.Tittel}
            </div>
            {siteContent.Tjenester.LesMer.Tekst.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </Expand>
        <img
          className={`Tjenester__ExpandArrow ${
            showMore && 'Tjenester__ExpandArrow--active'
          }`}
          src={ExpandArrow}
          alt='Expand Arrow'
        />
        <div
          className='PrimaryButton Tjenester__ExpandButton'
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
