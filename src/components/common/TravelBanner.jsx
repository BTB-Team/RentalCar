import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";

export const TravelBanner = ({ cta }) => {
  const { lang, t } = useLangStore();
  return (
    <div className="relative w-full h-[250px] sm:h-[280px] md:h-[339px] mt-20 rounded-2xl flex items-center justify-center overflow-hidden opacity-2 select-none bg-gradient-to-r from-brand-yellow/10 via-brand-yellow/40 to-brand-yellow/90">
      {/* background car image overlay */}
      <div className="absolute inset-0 bg-[url('/images/product-picture1.png')] w-full h-full bg-center bg-no-repeat bg-cover opacity-25 pointer-events-none mix-blend-multiply" />

      {/* foreground content container */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-xl sm:text-4xl font-blackfont text-black tracking-tight leading-tight">
          {lang === "dr" ? t.cta.yellow_title : t.cta.yellow_title}
        </h1>
        <p className="text-sm sm:text-base font-extrabold text-brand-black leading-relaxed max-w-2xl">
          {lang === "dr" ? t.cta.dark_title : t.cta.dark_title}
        </p>
        <Link
          to="/services"
          className="mt-1 sm:mt-2 bg-white text-black font-bold text-sm sm:text-base px-10 py-3.5 rounded-2xl shadow-md transition-all duration-200 ease-in-out hover:bg-neutral-50 hover:shadow-lg active:scale-98"
        >
          {lang === "dr" ? t.cta.btn_request : t.cta.btn_request}
        </Link>
      </div>
    </div>
  );
};
