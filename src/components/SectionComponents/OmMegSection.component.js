import Portrait from '../../assets/media/portrait.jpg';

function OmMegSection({ siteContent }) {
  return (
    <div className='Section' id='om-meg'>
      <div className='Section__Content OmMeg'>
        <div className='OmMeg__Portrait'>
          <img src={Portrait} alt='portrett' />
        </div>

        <div className='OmMeg__Card'>
          <div className='OmMeg__Title'>{siteContent.OmMeg.Tittel}</div>
          <div className='OmMeg__Name'>{siteContent.OmMeg.Navn}</div>
          <div>
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
