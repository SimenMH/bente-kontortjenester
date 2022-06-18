import './styles.css';

function NavBar() {
  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div className='logo-text'>BS Kontortjenester</div>
        <ul className='nav-menu'>
          <li>
            <a href='#forside'>
              <p>Forside</p>
            </a>
          </li>
          <li>
            <a href='#tjenester'>
              <p>Mine Tjenester</p>
            </a>
          </li>
          <li>
            <a href='#kundeanbefalinger'>
              <p>Kundeanbefalinger</p>
            </a>
          </li>
          <li>
            <a href='#om-meg'>
              <p>Om Meg</p>
            </a>
          </li>
          <li>
            <a href='#kontakt'>
              <p>Kontakt</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
