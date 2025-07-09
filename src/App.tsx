import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import BackgroundEffects from './Components/Backgroundeffects';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/footer';

function App() {
  return (
   <div>
       <BackgroundEffects/>
      <Header/>
      <Hero/>
      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
   </div>
  );
}

export default App;
