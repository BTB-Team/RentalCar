import { useLangStore } from "../../store/useLangStore";
import ctaBackground from "../home/images/cta.png";

export const TravelBanner = () => {
  const { lang, t } = useLangStore();

  return (
    <section
      className="px-3 py-8 sm:px-6 lg:px-8"
      dir={lang === "dr" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className="relative mx-auto flex h-[339px] w-[1200px] max-w-full items-center justify-center overflow-hidden rounded-[20px] bg-cover bg-center px-4 py-10 text-center sm:px-10"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 flex h-[199px] w-full max-w-[544px] flex-col items-center justify-center rounded-[20px]">
            <h2 className="h-auto w-full max-w-[427px] text-center text-[28px] font-black leading-none tracking-[0] text-black sm:text-[32px] md:h-[56px] md:w-[427px] md:text-[36px]">
              {t.cta.yellow_title}
            </h2>

            <p className="mt-3 h-auto w-full max-w-[544px] text-center text-[19px] font-semibold leading-[1.4] tracking-[0] text-black sm:text-[21px] md:h-[37px] md:w-[544px] md:whitespace-nowrap md:text-[24px] md:leading-none">
              {t.cta.dark_title}
            </p>

            <a
              href="https://wa.me/93786377417"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex h-[66px] w-[219px] shrink-0 items-center justify-center rounded-[20px] bg-white text-gray-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="whitespace-nowrap text-[20px] font-semibold leading-[37px] tracking-[0] text-black sm:text-[22px] md:h-[37px] md:w-[171px] md:text-[24px] md:leading-none">
                {t.cta.btn_request}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
