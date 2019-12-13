import React from 'react';
import HeaderMenu from './Components/HeaderMenu'
import SideColumn from './Components/SideColumn'
import QuoteContainer from './Components/QuoteContainer'
import Background from './Components/Background'
import Footer from './Components/Footer'
import './App.css';


function App() {
    const bg = new Background();

  return (
    <div className="App">
      <div className="grid-wrapper">


        <QuoteContainer />

      </div>
    </div>
  );
} /*This is where all our app funnels into. Each component is here and could be passed extra properties if needed*/

export default App;
