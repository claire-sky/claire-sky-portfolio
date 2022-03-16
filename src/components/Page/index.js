import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About></About>;
      case 'portfolio':
        return <Portfolio></Portfolio>;
      case 'contact':
        return <Contact></Contact>;
      case 'resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
