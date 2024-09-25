import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import MyStack from "./MyStack";
import Projects from "./Projects";
type Props = {};

function Homemain({}: Props) {
  return (
    <div className="relative w-11/12 md:w-10/12">
      <Hero />
      <AboutMe />
      <MyStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default Homemain;
