import CarSection from './components/CarSection';
import ServicesSection from './components/ServicesSection';
import HeroSection from './HeroSection';
import AboutCompany from './AboutCompany';
import MissionVision from './MissionVision';
import WhyChooseUs from './WhyChooseUs';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutCompany />
      <MissionVision />
      <WhyChooseUs />
      <CarSection />
      <ServicesSection />
    </>
  );
};