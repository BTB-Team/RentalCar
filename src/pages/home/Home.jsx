import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./HeroSection";
import AboutCompany from "./AboutCompany";
import WhyChooseUs from "./WhyChooseUs";
import ProcessSection from "../../components/home/ProcessSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CtaBanner from "../../components/home/CtaBanner";
import FaqSection from "../../components/home/FaqSection";
import { MissionVision } from "../about/components/MissionVision";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutCompany />
      <MissionVision/>
      <WhyChooseUs />
      <CarSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
      <FaqSection />
    </>
  );
};
