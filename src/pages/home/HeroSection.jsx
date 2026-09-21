
  const { t } = useLangStore();
  import { useLangStore } from "../../store/useLangStore";
  import heroBg from "../../assets/images/bg.png";
  import mobileHero from "../../assets/images/mobile-bg.webp";
  
  const HeroSection = () => {
    const { t } = useLangStore();
  
    return (
      <section
        /* 
          💡 Key Production Fixes for Mobile Height:
          1. Changed fixed h-[840px] to h-[100dvh] (Dynamic Viewport Height) on mobile so it forces the image to perfectly cover 100% of the mobile screen.
          2. Swapped bg-center to bg-[center_top] for mobile to safely anchor the sky and keep the text sitting clean above the vehicles.
        */
        className="w-full max-w-full relative h-[100dvh] md:h-screen lg:h-[840px] bg-cover bg-[center_top] md:bg-center bg-no-repeat overflow-hidden"
        style={{
          "--bg-desktop": `url(${heroBg})`,
          "--bg-mobile": `url(${mobileHero})`,
          backgroundImage: `var(--bg-mobile)`
        }}
      >
        {/* Dynamic CSS Variable Injection for safe production bundling */}
        <style>{`
          @media (min-width: 768px) {
            section { background-image: var(--bg-desktop) !important; }
          }
        `}</style>
  
        {/* Top White Gradient Overlay (Calibrated for the new full-screen height) */}
        <div className="absolute inset-x-0 top-0 h-[65%] sm:h-[55%] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0)_100%)] z-0 pointer-events-none" />
  
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[20%] lg:h-[15%] bg-[linear-gradient(0deg,#FFFFFF_19.65%,rgba(255,255,255,0)_100%)]" />
  
        {/* Content Area */}
        {/* 💡 Re-balanced vertical paddings (pt-44 sm:pt-52) so that text perfectly floats in the sky layer of the mobile background */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-44 sm:pt-52 md:pt-24 lg:pt-[132px]">
          <div className="text-center md:mt-16">
            <h1 className="mx-auto max-w-5xl font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-blackfont text-brand-black">
              {t.home.hero.titleStart}
              {t.home.hero.titleStart ? " " : ""}
  
              <span className="text-brand-yellow">
                {t.home.hero.titleHighlightOne}
              </span>
  
              {t.home.hero.titleConjuction}
  
              <span className="text-brand-yellow">
                {t.home.hero.titleHighlightTwo}
              </span>
  
              {t.home.hero.titleEnd}
            </h1>
  
            <p className="mx-auto mt-4 max-w-3xl font-sans text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed text-brand-black/90">
              {t.home.hero.description}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;

