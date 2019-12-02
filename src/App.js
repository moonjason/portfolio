import React from 'react';
import './App.css';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Intro from './Components/Intro';

function App() {
  return (
    <div id="page">
      <Header />
      <Intro/>
      <Skills />
    </div>
  );
}

export default App;
