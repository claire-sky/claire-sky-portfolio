import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';

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
      } else {
        setInvalidEntry('');
      }
    } else {
      if (!event.target.value.length) {
        setInvalidEntry(`${event.target.name} is required.`)
      } else {
        setInvalidEntry('');
      }
    }
    if (!invalidEntry) {
      setContactState({ ...contactState, [event.target.name]: event.target.value });
      console.log('Handle contact', contactState);
    }
  };

  return (
    <FormControl>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <FormLabel>Name: 
            <Input
              type="text"
              name="Name"
              variant='outline'
              defaultValue={name}
              onBlur={handleChange}
            ></Input>
          </FormLabel>
        </div>
        <div>
          <FormLabel>Email: 
            <Input
              type="email"
              name="Email"
              variant='outline'
              defaultValue={email}
              onBlur={handleChange}
            ></Input>
          </FormLabel>
        </div>
        <div>
          <FormLabel>Message: 
            <Textarea 
              type="text"
              name="Message"
              variant='outline'
              rows="8"
              cols="40"
              defaultValue={message}
              onBlur={handleChange}
            ></Textarea >
          </FormLabel>
        </div>
        {invalidEntry && (
          <div>
            <p className="error-text">{invalidEntry}</p>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </FormControl>
  );
}

export default Contact;
