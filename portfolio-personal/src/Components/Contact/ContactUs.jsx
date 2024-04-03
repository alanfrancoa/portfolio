import React, { useState, useRef, useContext } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
import ThemeContext from '../../context/themeContext';

const ContactUs = () => {
  const {theme} = useContext(ThemeContext)
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
      <h2 className='contact-title'>Contacto</h2>
      <p className='description'>
        Si tenés alguna pregunta o comentario, por favor házmelo saber a través de este formulario.
        Estaré encantado de escucharte y responder a tus consultas.
      </p>
      <div className='contact-box'>
        {isSuccess && <div className='success-message'>¡El correo se envió con éxito!</div>}
        {isError && <div className='error-message'>¡Ups! Hubo un error al enviar el correo.</div>}
        <form ref={form} onSubmit={sendEmail}>
          <label>Tu nombre</label>
          <input type='text' name='user_name' className='text' />
          <label>Email</label>
          <input type='email' name='user_email' className='text' />
          <div className='message-area'>
            <textarea name='message' placeholder='Escribe tu mensaje...' />
            <input type='submit' value='Enviar' className={`envio ${theme}`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
