import { AboutUs } from "./_components/About";
import { Clients } from "./_components/Clients";
import ContactUs from "./_components/ContactUs";
import {  VortexDemoSecond } from "./_components/DummySection";
import { DemoHeroGeometric } from "./_components/Hero";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";

export default function Home() {
  return (
    <main>
      <DemoHeroGeometric />
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <Clients />
      <VortexDemoSecond />
      <div id="contact">
        <ContactUs />
      </div>
    </main>
  );
}
