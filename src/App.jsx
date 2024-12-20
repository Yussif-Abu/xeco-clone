import Contributions from './components/Contributions'
import Hero from './components/Hero'
import { Nav } from './components/Nav'
import Partners from './components/Partners'
import Programs from './components/Programs'
import Team from './components/Team'
import Questions from './components/Questions'
import './index.css'
import Contact from './components/Contact'
import React, { useState } from 'react'

function App() {

  const [isScrolled, setIsScrolled]= useState(false);

  window.onscroll = ()=> {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
 
  return (
    <> 
    <Nav isScrolled={isScrolled}/> 
    <main className='relative overflow-x-hidden px-10'>
      <Hero/>
      <Contributions/>
      <Partners/>
      <Programs/>
      <Team/>
      <Questions/>
      <Contact/>
    </main>
    </>
    
   
  )
}

export default App
