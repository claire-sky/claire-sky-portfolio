import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import {
  IconButton,
  LinkOverlay,
  Center,
  LinkBox
} from '@chakra-ui/react';

function Footer() {

    return (
    <Center spacing='24px'>
        <LinkBox>
          <IconButton icon={<IoLogoGithub/>} />
          <LinkOverlay
            href="https://github.com/claire-sky/"
            target="_blank"
            rel="noopener noreferrer" />
        </LinkBox>
        <LinkBox>
          <IconButton icon={<IoLogoLinkedin/>} />
          <LinkOverlay
            href="https://www.linkedin.com/in/eclconnolly/"
            target="_blank"
            rel="noopener noreferrer" />
        </LinkBox>
    </Center>
  );
}

export default Footer;
