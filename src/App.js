import React from 'react';
import Navbar from './components/Nav/Navbar'; 
import { Container } from './components/container'; 
import About from './components/About/About';
import CustomCursor from './components/Animation/CustomCursor';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import MyIntro from './components/MyIntro/MyIntro';
import ScrollToTop from './components/Animation/ScrollToTop/ScrollToTop';
import LandingPage from "./components/LandingPage/LandingPage";
import Timeline from './components/MyJourney/Timeline';

function App() {
  return (
    <>
    <LandingPage />
    <Container>
      <div id="home"></div>
      <CustomCursor />
      <Navbar />
      <MyIntro />
      <div id="about"><About /></div>
      <div id="myhistory"><Timeline /></div>
      <div id="contact"><ContactForm /></div>
      <Footer />
      <ScrollToTop />
    </Container>
    </>
  );
}

export default App;

