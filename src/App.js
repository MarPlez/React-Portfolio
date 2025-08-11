import React from 'react';
import Navbar from './components/Nav/Navbar'; 
import { Container } from './components/Container'; 
import About from './components/About/About';
import CustomCursor from './components/Animation/CustomCursor';
import Footer from './components/Footer/Footer';
import MyHistory from './components/MyHistory/MyHistory';
import ContactForm from './components/ContactForm/ContactForm';
import MyIntro from './components/MyIntro/MyIntro';

function App() {
  return (
    <Container>
      <div id="home"></div>
      <CustomCursor />
      <Navbar />
      <MyIntro />
      <div id="about"><About /></div>
      <div id="myhistory"><MyHistory /></div>
      <div id="contact"><ContactForm /></div>
      <Footer />
    </Container>
  );
}

export default App;

