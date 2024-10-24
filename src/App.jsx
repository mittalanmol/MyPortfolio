import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
