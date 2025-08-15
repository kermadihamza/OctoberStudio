import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Process from "./sections/Process";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function OctoberStudioLanding() {
  const [open, setOpen] = React.useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full bg-background text-foreground antialiased">
        <Header open={open} setOpen={setOpen} />
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
        <Footer />
      </div>
    </LazyMotion>
  );
}
