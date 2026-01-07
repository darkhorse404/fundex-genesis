import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../pagecomponents/Benefits";
import Footer from "../pagecomponents/Footer";
import Header from "../pagecomponents/Header";
import Hero from "../pagecomponents/Hero";
import Pricing from "../pagecomponents/Pricing";

const Landing = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Pricing />
        {/* <Footer /> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default Landing;
