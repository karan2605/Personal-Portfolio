import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MoreAbout from "./components/MoreAbout";
import Blog from "./components/Blog";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
        <Navbar />
        <About />
        <MoreAbout />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </BrowserRouter>
    </main>
  );
}
