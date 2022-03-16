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

    }
  }
  return (
    <section>
       <h1 id='contact'>Contact Me</h1>

      <div>
        <label class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <span class="mdc-floating-label" id="my-label-id">
            Name{" "}
          </span>
          <input
            class="mdc-text-field__input"
            type="text"
            aria-labelledby="my-label-id"
            aria-controls="my-helper-id"
            aria-describedby="my-helper-id"
          ></input>
          <span class="mdc-line-ripple"></span>
        </label>
      </div>
      <div>
        <label class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <span class="mdc-floating-label" id="my-label-id">
            E-mail{" "}
          </span>
          <input
            class="mdc-text-field__input"
            type="text"
            aria-labelledby="my-label-id"
            aria-controls="my-helper-id"
            aria-describedby="my-helper-id"
          ></input>
          <span class="mdc-line-ripple"></span>
        </label>
      </div>
      <div>
        <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__trailing"></span>
            <span class="mdc-floating-label" id="my-label-id">
              Note{" "}
            </span>
          </span>
          <span class="mdc-text-field__resizer">
            <textarea
              class="mdc-text-field__input"
              rows="8"
              cols="40"
              aria-label="Label"
            ></textarea>
          </span>
        </label>
      </div>
    </section>
  );
}

export default Contact;
