import { useState, useRef, useContext } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
import ThemeContext from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';

const ContactUs = () => {
  const {theme} = useContext(ThemeContext)
  const { t } = useLanguage()
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3btmhs5', 'template_eec73h9', form.current, '-MMHy32_rCDJ8vdEb')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsError(false);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setIsError(true);
        }
      );
  };

  return (
    <div className={`contact-card ${theme}`}>
      <h2 className='contact-title'>{t('contactTitle')}</h2>
      <p className='description'>
        {t('contactDescription')}
      </p>
      <div className='contact-box'>
        {isSuccess && <div className='success-message'>{t('contactSuccessMessage')}</div>}
        {isError && <div className='error-message'>{t('contactErrorMessage')}</div>}
        <form ref={form} onSubmit={sendEmail}>
          <label>{t('contactNameLabel')}</label>
          <input type='text' name='user_name' className='text' />
          <label>{t('contactEmailLabel')}</label>
          <input type='email' name='user_email' className='text' />
          <div className='message-area'>
            <textarea name='message' placeholder={t('contactMessagePlaceholder')} />
            <input type='submit' value={t('contactSendButton')} className={`envio ${theme}`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
