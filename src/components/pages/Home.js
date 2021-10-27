import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSelection from '../HeroSelection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSelection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
