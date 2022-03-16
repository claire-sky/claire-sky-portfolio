import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = contactState;
  const [invalidEntry, setInvalidEntry] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!invalidEntry) {
      console.log('Submit contact', contactState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setInvalidEntry('Please submit a valid email');
      // } else {
      //   setInvalidEntry('');
      }
    } else {
      if (!event.target.value.length) {
        setInvalidEntry(`${event.target.name} is required.`)
      // } else {
      //   setInvalidEntry('');
      }
    }
    if (!invalidEntry) {
      setContactState({ ...contactState, [event.target.name]: event.target.value });
      console.log('Handle contact', contactState);
    }
  };

  return (
    <section>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label>Name: 
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>Email: 
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>Message: 
            <textarea
              type="text"
              name="message"
              rows="8"
              cols="40"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </label>
        </div>
        {invalidEntry && (
          <div>
            <p className="error-text">{invalidEntry}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
