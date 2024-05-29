import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import MyStack from "./MyStack";
import Projects from "./Projects";
type Props = {};

function Homemain({}: Props) {
  return (
    <div className="relative">
      <Hero />
      <AboutMe />
      <MyStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default Homemain;
