function NavBar({ siteContent }) {
  const navigate = (e, id) => {
    let el = document.getElementById(id);
    e.preventDefault();
    el && scrollToTargetAdjusted(el);
  };

  function scrollToTargetAdjusted(element) {
    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  return (
    <div className='Section'>
      <div className='Section__Content NavBar'>
        <div className='NavBar__TitleContaienr'>
          <div className='NavBar__Title'>BenKo</div>
          <div className='NavBar__Subtitle'>Bentes Kontortjenester</div>
        </div>
        <ul className='NavBar__Menu'>
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
            <a href='#om-meg' onClick={e => navigate(e, 'om-meg')}>
              <p>Om Meg</p>
            </a>
          </li>
          {siteContent.Kundeanbefalinger.Anbefalinger.length > 0 ? (
            <li>
              <a href='#attester' onClick={e => navigate(e, 'attester')}>
                <p>Attest</p>
              </a>
            </li>
          ) : null}
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
