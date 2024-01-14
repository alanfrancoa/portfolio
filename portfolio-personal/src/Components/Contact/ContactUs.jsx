import React from 'react'
import './ContactUs.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3btmhs5', 'template_eec73h9', form.current, '-MMHy32_rCDJ8vdEb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      })
  }

  return (

    <div>
      <span className='title'>Ponte en contacto</span>
      <div className='contact-box'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Tu nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <div className='message-area'>
        <textarea name="message" placeholder='Escribe tu mensaje...' />
        <input type="submit" value="Enviar" className='envio'/>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ContactUs