import React, { Component } from 'react';
import NavigationBar from './Components/Navigation';
import SplashImage from './Components/SplashImage';
import OurStory from './Components/Story';
import Menu from './Components/Menu';
import LocationsList from './Components/LocationsList';
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <SplashImage />
        <OurStory />
        <Menu />
        <LocationsList />
        <Contact />
      </div>
    );
  }
}

export default App;
