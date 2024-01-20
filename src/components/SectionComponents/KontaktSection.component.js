import { useState } from 'react';

import MailIcon from '../../assets/media/icons/mail.svg';
import { sendEmail } from '../../utils/sendEmail';

function KontaktSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusText, setStatusText] = useState({
    status: '',
    message: '',
  });

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    setFormInput(prevState => {
      const newState = { ...prevState };
      newState[key] = value;
      return newState;
    });
  };

  const sendContactEmail = async e => {
    e.preventDefault();
    setIsSendingEmail(true);
    setStatusText({
      status: '',
      message: '',
    });

    try {
      await sendEmail(formInput);
      setFormInput(prevState => {
        return {
          ...prevState,
          message: '',
        };
      });

      setStatusText({
        status: 'success',
        message:
          'Takk for din melding! Du vil høre fra meg innen få virkedager. Ha en flott dag!',
      });
    } catch (err) {
      setStatusText({
        status: 'error',
        message:
          'Oops! Ukjent feil førte til at meldingen ikke ble sendt. Prøv igjen senere eller kontakt meg direkte på email: post@benko.no',
      });
    }

    setIsSendingEmail(false);
  };

  return (
    <div className='Section KontaktSection' id='kontakt'>
      <div className='Section__Content Kontakt'>
        {showContactForm ? (
          <>
            <div className='Kontakt__ConsultationFormContainer'>
              <div className='Kontakt__Title'>Ta kontakt i dag</div>
              <div className='Kontakt__Subtext'>
                Første konsultasjon er gratis
              </div>

              {statusText.message && (
                <div
                  className={`Kontakt__StatusText Kontakt__StatusText--${statusText.status}`}
                >
                  {statusText.message}
                </div>
              )}

              <form onSubmit={e => sendContactEmail(e)}>
                <input
                  type='text'
                  name='name'
                  placeholder='Navn'
                  value={formInput.name}
                  onChange={handleChange}
                  required={true}
                  disabled={isSendingEmail}
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email addresse'
                  value={formInput.email}
                  onChange={handleChange}
                  disabled={isSendingEmail}
                />
                <textarea
                  type='text'
                  name='message'
                  placeholder='Melding'
                  value={formInput.message}
                  onChange={handleChange}
                  required={true}
                  disabled={isSendingEmail}
                  multiline
                  spellCheck='false'
                />

                <div className='Kontakt__ConsultationFormButtons'>
                  <button
                    className={`PrimaryButton Kontakt__Button ${
                      isSendingEmail ? 'Kontakt__Button--disabled' : ''
                    }`}
                    disabled={isSendingEmail}
                    onClick={() => setShowContactForm(false)}
                  >
                    Avbryt
                  </button>
                  <input
                    type='submit'
                    value='Send'
                    className={`PrimaryButton Kontakt__Button ${
                      isSendingEmail ? 'Kontakt__Button--disabled' : ''
                    }`}
                    disabled={isSendingEmail}
                  />
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className='Kontakt__ConsultationContainer'>
              <div className='Kontakt__Title'>Ta kontakt i dag</div>
              <div className='Kontakt__Subtext'>
                Første konsultasjon er gratis
              </div>
              <button
                className='PrimaryButton Kontakt__Button'
                onClick={() => setShowContactForm(true)}
              >
                Bestill gratis konsultasjon
              </button>
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
          </>
        )}
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
