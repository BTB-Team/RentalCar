import { useLangStore } from "../../store/useLangStore";
import heroBg from "../../assets/images/bg.png";

const HeroSection = () => {
  const { t } = useLangStore();

  return (
      <section
        /* 
          💡 تغییرات کلیدی:
          ۱. bg-contain: عکس را مجبور می‌کند بدون هیچ‌گونه برش یا کات شدنی، ۱۰۰٪ کامل دیده شود.
          ۲. h-auto aspect-[16/10] md:aspect-auto md:h-screen: ارتفاع ثابت موبایل را حذف کردیم و با تناسبات واقعی عکس (16:10) قفل کردیم 
             تا هیرو همگام با پهنای هر مانیتوری به صورت داینامیک و بدون ایجاد فضای مرده بزرگ و کوچک شود.
        */
        className="w-full max-w-full relative h-auto aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:min-h-screen bg-contain md:bg-cover bg-top lg:bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[10%] md:h-[15%] bg-[linear-gradient(0deg,#FFFFFF_19.65%,rgba(255,255,255,0)_100%)]" />
  
        {/* Content */}
        {/* 💡 پدینگ‌ها و فواصل متون را با واحد‌های واکنش‌گرا تراز کردیم تا در موبایلِ عریض، نوشته‌ها روی سقف ماشین‌ها نیفتند */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:pt-24 md:pt-32 lg:pt-[132px]">
          <div className="text-center md:mt-16">
            <h1 className="mx-auto max-w-5xl font-sans text-[18px] sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-blackfont text-brand-black">
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
  
            <p className="mx-auto mt-2 sm:mt-4 max-w-3xl font-sans text-[11px] sm:text-sm md:text-lg lg:text-[20px] leading-relaxed text-brand-black/90">
              {t.home.hero.description}
            </p>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;
