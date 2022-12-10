import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_au26e6q', 'template_armg4k8', form.current, 'rH_ny2Apfo9wTf4mW')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          document.getElementById("submit_btn").disabled = true;

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
      <h1 className='contact__header'>I'd love to hear from you!</h1>
      <div className='contact__wrapper'/>
      <div className='contact__form__container'>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input type="text" name="from_name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" />
            <input id="submit_btn" type="submit" value="Send" />
          </div>
      </form>
      </div>
    </div>
  )
}

export default ContactUs;
