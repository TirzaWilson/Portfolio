import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    const name = document.getElementById('name').value.length;
    const email = document.getElementById('email').value.length;
    const message = document.getElementById('message').value.length;
    const popStyle = document.getElementById('pop').style;
    const popMsg = document.getElementById('pop-msg');

    e.preventDefault();
    
    if (name <= 0 || email <= 0 || message <= 0) {
      popMsg.innerText = 'Pleae do not leave any fields blank.';
      popStyle.display = 'flex';
    } else {
      emailjs.sendForm('service_au26e6q', 'template_armg4k8', form.current, 'rH_ny2Apfo9wTf4mW')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        document.getElementById("submit_btn").disabled = true;
        popMsg.innerText = 'Message has been sent!';
        popStyle.display = 'flex';
      }, (error) => {
        console.log(error.text);
      });
    }  
  };

  return (
    <div className='contact' id='contact'>
      <h1 className='contact__header' data-aos="fade-in">I'd love to hear from you!</h1>
      <div className='contact__form__container'>
        <form ref={form} onSubmit={sendEmail}>
          <div data-aos="fade-in">
            <label>Name</label>
            <input id='name' type="text" name="from_name"/>
          </div>
          <div data-aos="fade-in">
            <label>Email</label>
            <input id='email' type="email" name="user_email" />
          </div>
          <div data-aos="fade-in">
            <label>Message</label>
            <textarea id='message' name="message" />
            <button id="submit_btn" className='btn--outline btn' type="submit" value="Send">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;