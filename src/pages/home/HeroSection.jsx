import { useLangStore } from "../../store/useLangStore";
import heroBg from "../../assets/images/bg.png";
import mobileHero from "../../assets/images/mobile-bg.webp";

const HeroSection = () => {
  const { t } = useLangStore();

  return (
    <section
      /* 
        💡 PRODUCTION LAYOUT FIXES:
        1. Swapped !w-screen with w-full to permanently eliminate the vertical scrollbar gap artifact.
        2. Set background position to bg-[center_bottom_20%] on mobile and md:bg-center on desktop 
           to keep the visual focus perfectly centered on the cars across all viewports.
      */
      className="w-full relative h-[100dvh] md:h-screen lg:h-[840px] bg-cover bg-[center_bottom_20%] md:bg-center bg-no-repeat overflow-hidden"
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

      {/* Top White Gradient Overlay (Exclusively rendered on mobile viewports via md:hidden) */}
      <div className="absolute inset-x-0 top-0 h-[65%] sm:h-[55%] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0)_100%)] z-0 pointer-events-none md:hidden" />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[20%] lg:h-[15%] bg-[linear-gradient(0deg,#FFFFFF_19.65%,rgba(255,255,255,0)_100%)]" />

      {/* Content Area */}
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
