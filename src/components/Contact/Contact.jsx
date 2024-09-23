import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'b06955df-587f-4efc-84e0-6694a0edf681');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success',
        text: 'Message sent successfully',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'style-swal'
        }
      });
    }
  };

  return (
    <section className='contact'>
      <form className='form-contact' onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className='input-box'>
          <label>Full Name</label>
          <input
            type='text'
            className='field'
            placeholder='Enter your name'
            name='name'
            required
          />
        </div>
        <div className='input-box'>
          <label>Email Address</label>
          <input
            type='email'
            className='field'
            placeholder='Enter your email'
            name='email'
            required
          />
        </div>
        <div className='input-box'>
          <label>Your Message</label>
          <textarea
            className='field msg'
            placeholder='Enter your message'
            name='message'
            required
          ></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
