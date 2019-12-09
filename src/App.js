import React from 'react';
import HeaderMenu from './Components/HeaderMenu'
import SideColumn from './Components/SideColumn'
import QuoteContainer from './Components/QuoteContainer'
import Footer from './Components/Footer'

import './App.css';


function App() {

  return (
    <div className="App">
      <div className="grid-wrapper">
        <HeaderMenu />
        <SideColumn />
        <QuoteContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
