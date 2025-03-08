// import Navbar from "@/components/navbar";
import Cursor from "@/components/Cursor";
import HeroSection from "@/components/heroSection";
import Contact from "./contact/page";
import Skill from "./skill/page";
import Projects from "./project/page";
import About from "./about/page";

export default function Home() {
  return (
    <section className="container h-full w-full">
      {/* <Navbar /> */}
      
      <Cursor /> 

        <HeroSection />
        <Skill />
        <Projects />
        <About />
        <Contact />

      
    </section>
  );
}
