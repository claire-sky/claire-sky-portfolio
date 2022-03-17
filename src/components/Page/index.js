import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import { Heading } from '@chakra-ui/react';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About></About>;
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact></Contact>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <section>
      <Heading>{currentPage.name}</Heading>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
