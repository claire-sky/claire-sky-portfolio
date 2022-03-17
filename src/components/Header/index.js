import React from 'react';
import {
  Heading,
  Flex,
  Box
} from '@chakra-ui/react';

function Header(props) {

  return (
    <Box>
        <Flex p={10} w="100%"  bgGradient="linear(to-r, blue.500, white)" >
            <Heading as='h1' size='4xl'>Claire Sky</Heading>
            {props.children}
        </Flex>
    </Box>
  );
}

export default Header;
