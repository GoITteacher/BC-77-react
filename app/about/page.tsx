import Counter from "@/components/counter/counter";
import HeroSection from "@/components/hero-section/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <HeroSection />
      <Counter />
    </div>
  );
};

export default About;
