import About from "./about/About";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import { Skill } from "./skills/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
