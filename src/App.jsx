import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div
      id="home"
      className="app poppins w-screen bg-white dark:bg-slate-700 flex flex-col justify-center items-center"
      style={{ transition: "background-color 1s ease" }}
    >
      <Navbar />

      <Home />

      <Projects />

      <Skills />

      <Contact />
    </div>
  );
}

export default App;
