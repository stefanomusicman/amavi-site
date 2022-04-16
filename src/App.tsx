import React from 'react';
import Gaia from './Components/Gaia/Gaia';
import HeroSection from './Components/HeroSection/HeroSection';
import Members from './Components/Members/Members';
import NavBar from './Components/NavBar/NavBar';
import Socials from './Components/Socials/Socials';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Members />
      <Gaia />
      <Socials />
    </React.Fragment>
  );
}

export default App;
