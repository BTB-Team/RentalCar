import { useLangStore } from "../../store/useLangStore";
import heroBg from "../../assets/images/bg.png";
import mobileHero from "../../assets/images/mobile-bg.webp";

const HeroSection = () => {
  const { t } = useLangStore();

  return (
    <section
      className="w-full relative h-[100dvh] md:h-screen lg:h-[840px] bg-cover bg-[center_bottom_20%] md:bg-center bg-no-repeat overflow-hidden"
      style={{
        "--bg-desktop": `url(${heroBg})`,
        "--bg-mobile": `url(${mobileHero})`,
        backgroundImage: `var(--bg-mobile)`
      }}
    >
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
          {/* 💡 PRODUCTION FIX: Changed text-2xl to text-[36px] to force title size exactly to 36px on mobile viewports */}
          <h1 className="mx-auto max-w-5xl font-sans text-[36px] sm:text-3xl md:text-4xl lg:text-5xl leading-normal tracking-normal font-blackfont text-brand-black">
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


 {/* 💡 PRODUCTION FIX: Swapped text-sm with text-[16px] to lock the mobile description precisely at 16px */}
<p className="mx-auto mt-4 max-w-3xl font-sans text-[16px] sm:text-base md:text-lg lg:text-[20px] leading-[37px] text-brand-black/90">
  {t.home.hero.description}
</p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
