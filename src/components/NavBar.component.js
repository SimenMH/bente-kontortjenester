import { useEffect, useState } from 'react';
import navigateTo from '../utils/navigateTo';

function NavBar({ siteContent }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      const scrollHeight = e.currentTarget.scrollY;
      if (scrollHeight > 0 && !sticky) {
        setSticky(true);
      } else if (scrollHeight <= 0 && sticky) {
        setSticky(false);
      }
    });
  });

  return (
    <div
      className={`Section__Content NavBar ${sticky ? 'NavBar--sticky' : ''}`}
    >
      <div className='NavBar__TitleContaienr'>
        <div className='NavBar__Title'>BenKo</div>
        <div className='NavBar__Subtitle'>Bentes Kontortjenester</div>
      </div>
      <ul className='NavBar__Menu'>
        <li>
          <a href='#forside' onClick={e => navigateTo(e, 'forside')}>
            <p>Forside</p>
          </a>
        </li>
        <li>
          <a href='#tjenester' onClick={e => navigateTo(e, 'tjenester')}>
            <p>Mine Tjenester</p>
          </a>
        </li>
        <li>
          <a href='#om-meg' onClick={e => navigateTo(e, 'om-meg')}>
            <p>Om Meg</p>
          </a>
        </li>
        {siteContent.Kundeanbefalinger.Anbefalinger.length > 0 ? (
          <li>
            <a href='#attester' onClick={e => navigateTo(e, 'attester')}>
              <p>Attest</p>
            </a>
          </li>
        ) : null}
        <li>
          <a href='#kontakt' onClick={e => navigateTo(e, 'kontakt')}>
            <p>Kontakt</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
