import CarSection from "./components/CarSection";
import ServicesGrid from "./components/ServicesGrid";
import ProcessSection from "../../components/home/ProcessSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CtaBanner from "../../components/home/CtaBanner";
import FaqSection from "../../components/home/FaqSection";

export const Home = () => {
  return (
    <>
      <CarSection />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
      <FaqSection />
    </>
  );
};
