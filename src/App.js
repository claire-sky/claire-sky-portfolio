import React, { useState } from 'react';
import Nav from './components/Nav';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Center, Spacer } from '@chakra-ui/react';

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentPage, setCurrentPage ] = useState(pages[0]);

  return (
    <Box>
      <Header>
        <Spacer />
        <Center>
          <Nav
            spacing='30px'
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
        </Center>
      </Header>
      <Box p={5} shadow='md' borderWidth='1px'>
        <Page currentPage={currentPage}></Page>
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default App;
