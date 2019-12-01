import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Intro from './Components/Intro';

function App() {
  return (
    <div id="page">
      <Header />
      <Intro/>
      <Body />
    </div>
  );
}

export default App;
