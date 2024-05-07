import Cta from "./components/sections/Cta";
import Faq from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import OurProcess from "./components/sections/OurProcess";
import Payments from "./components/sections/Payments";
import Services from "./components/sections/Services";
import StataCard from "./components/sections/StataCard";
import Testimonals from "./components/sections/Testimonals";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="w-full p-8 md:p-0 bg-custom-background bg-cover bg-neutral-800 font-mplus">
      <NavBar />
      <Hero />
      <div className="md:p-24">
        <StataCard />
        <Services />
      </div>
      <OurProcess />
      <Payments />
      <Testimonals />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
