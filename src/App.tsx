import React from 'react';
import HeroSection from './Components/HeroSection/HeroSection';
import Members from './Components/Members/Members';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Members />
    </React.Fragment>
  );
}

export default App;
