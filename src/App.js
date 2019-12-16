import React from 'react';
import './App.css';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div id="page">
      <Header />
      <NavBar />
      <Intro/>
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
