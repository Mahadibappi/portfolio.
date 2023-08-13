import About from "./about/About";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Portfolio from "./portfolio/Portfolio";
import { Skill } from "./skills/Skill";
import Testimonial from "./testemonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
