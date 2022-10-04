import './styles.css';

function NavBar() {
  const navigate = (e, id) => {
    let el = document.getElementById(id);
    e.preventDefault();
    el && el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div className='logo-text-container'>
          <div className='logo-text'>BenKo</div>
          <div>Bentes Kontortjenester</div>
        </div>
        <ul className='nav-menu'>
          <li>
            <a href='#forside' onClick={e => navigate(e, 'forside')}>
              <p>Forside</p>
            </a>
          </li>
          <li>
            <a href='#tjenester' onClick={e => navigate(e, 'tjenester')}>
              <p>Mine Tjenester</p>
            </a>
          </li>
          <li>
            <a
              href='#kundeanbefalinger'
              onClick={e => navigate(e, 'kundeanbefalinger')}
            >
              <p>Kundeanbefalinger</p>
            </a>
          </li>
          <li>
            <a href='#om-meg' onClick={e => navigate(e, 'om-meg')}>
              <p>Om Meg</p>
            </a>
          </li>
          <li>
            <a href='#kontakt' onClick={e => navigate(e, 'kontakt')}>
              <p>Kontakt</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
