import React from 'react';
import './App.css';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Intro from './Components/Intro';
import Projects from './Components/Projects';

function App() {
  return (
    <div id="page">
      <Header />
      <Intro/>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
