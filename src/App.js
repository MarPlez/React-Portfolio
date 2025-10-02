import React from 'react';
import Navbar from './components/Nav/Navbar'; 
import { Container } from './components/container'; 
import About from './components/About/About';
import CustomCursor from './components/Animation/CustomCursor/CustomCursor';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import MyIntro from './components/MyIntro/MyIntro';
import ScrollToTop from './components/Animation/ScrollToTop/ScrollToTop';
import LandingPage from "./components/LandingPage/LandingPage";
import Timeline from './components/MyJourney/Timeline';
import { SECTIONS } from './config/sections';

function App() {
  return (
    <>
    <LandingPage />
    <Container>
      <div id={SECTIONS.HOME}></div>
      <CustomCursor />
      <Navbar />
      <MyIntro />
      <div id={SECTIONS.ABOUT}><About /></div>
      <div id={SECTIONS.HISTORY}><Timeline /></div>
      <div id={SECTIONS.CONTACT}><ContactForm /></div>
      <Footer />
      <ScrollToTop />
    </Container>
    </>
  );
}


export default App;

