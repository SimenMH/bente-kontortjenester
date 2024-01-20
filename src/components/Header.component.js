import navigateTo from '../utils/navigateTo';

import headerImage from '../assets/media/header-image.png';
import Ellipses from '../assets/media/svg/ellipses.svg';

function Header({ siteContent }) {
  return (
    <div className='Section' id='forside'>
      <div className='Section__Content Header'>
        <img className='Header__Circle' src={Ellipses} alt='' />
        <div className='Header__TextContainer'>
          <div className='Header__Title'>{siteContent.Header.Tittel}</div>
          <div className='Header__Subtext'>
            {siteContent.Header.Underskrift}
          </div>
          <a
            className='PrimaryButton'
            href='#kontakt'
            onClick={e => navigateTo(e, 'kontakt')}
          >
            Bestill gratis konsultasjon
          </a>
        </div>

        <div className='ImageContainer'>
          <img
            className='ImageContainer__Image'
            src={headerImage}
            alt='Header'
          />
          <div className='ImageContainer__Box'>
            <div className='InnerBox' />
          </div>
          <div className='ImageContainer__Box'></div>
          <div className='ImageContainer__Box'>
            <div className='InnerBox' />
            <div className='InnerBox'>%</div>
          </div>
          <div className='ImageContainer__TrioBox'>
            <div className='InnerBox' />
            <div className='InnerBox' />
            <div className='InnerBox' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
