import React from 'react';
import Gaia from './Components/Gaia/Gaia';
import HeroSection from './Components/HeroSection/HeroSection';
import Members from './Components/Members/Members';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Members />
      <Gaia />
    </React.Fragment>
  );
}

export default App;
