import './styles.css';

function Header({ siteContent }) {
  return (
    <div className='header-container' id='forside'>
      <div className='header-title'>{siteContent.Header.Tittel}</div>
      <div className='header-slogan'>{siteContent.Header.Underskrift}</div>
    </div>
  );
}

export default Header;
