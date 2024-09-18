import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Experience from "./Experience";
import Partner from "./Partner";
import Services from "./Services";
import Team from "./Team";
import WhyUs from "./WhyUs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <AboutUs />
      <Services />
      <Experience />
      <Team />
      {/*  */}
      <Partner />
    </>
  );
};

export default HomePage;
