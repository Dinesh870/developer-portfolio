import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import DevProfiles from './components/DevProfiles';
import BackToTop from './components/BackToTop';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Education/>
      <Projects />
      <DevProfiles/>
      <Contact />
      <Footer/>
      
      <BackToTop/>
    </>
  )
}

export default App
