import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MoreAbout from './components/MoreAbout'

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <MoreAbout />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
