import MailIcon from '../../assets/media/icons/mail.svg';

function KontaktSection() {
  return (
    <div className='Section KontaktSection' id='kontakt'>
      <div className='Section__Content Kontakt'>
        <div className='Kontakt__ConsultationContainer'>
          <div className='Kontakt__Title'>Ta kontakt i dag</div>
          <div className='Kontakt__Subtext'>Første konsultasjon er gratis</div>
          <a
            className='PrimaryButton Kontakt__Button'
            href='mailto: post@benko.no'
            target='_blank'
            rel='noreferrer'
          >
            Bestill gratis konsultasjon
          </a>
        </div>
        <a
          className='PrimaryButton Kontakt__EmailButton'
          href='mailto: post@benko.no'
          target='_blank'
          rel='noreferrer'
        >
          <img src={MailIcon} alt='' />
          <div>post@benko.no</div>
        </a>
      </div>

      <div className='Kontakt__DuoBox'>
        <div className='InnerBox' />
        <div className='InnerBox' />
      </div>

      <div className='Kontakt__TrioBox'>
        <div className='InnerBox' />
        <div className='InnerBox' />
        <div className='InnerBox' />
      </div>
    </div>
  );
}

export default KontaktSection;
