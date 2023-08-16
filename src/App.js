import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
