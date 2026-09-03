import { useLangStore } from "../../store/useLangStore";
import aboutUsImage from "../../assets/images/about-us-section.png";
import vectorImage from "../../assets/images/Vector 1.svg";

const AboutCompany = () => {
  const { t, lang } = useLangStore();

  return (
    <section
      className="flex flex-col gap-8 bg-cover bg-center bg-no-repeat sm:gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-12"
      style={{ backgroundImage: `url(${vectorImage})` }}
      dir="ltr"
    >
      {/* Text */}
      <div
        className="pe-5 ps-5 order-1 flex-1 overflow-hidden text-start lg:order-1"
        dir={lang === "dr" ? "rtl" : "ltr"}
      >
        <h2 className="font-sans text-2xl font-[800] text-brand-black sm:text-3xl">
          {t.home.about.title}
        </h2>

        <span className="mt-3 block h-1 w-32 rounded bg-brand-yellow sm:mt-4 sm:w-[190px]" />

        <p className="pt-5 text-justify font-sans text-base leading-7 font-regular text-brand-black/80 sm:pt-6 md:text-lg md:leading-[2]">
          <span className="font-bold">{t.home.about.companyName} </span>
          {t.home.about.description}
        </p>

        <p className="pt-3 text-justify font-sans text-base leading-7 font-regular text-brand-black/80 md:text-lg md:leading-[2]">
          {t.home.about.description_2}
        </p>

        <button className="mt-5 inline-flex h-12 items-center gap-2 rounded-[16px] bg-brand-yellow px-4 font-sans text-sm font-extrabold text-brand-black transition-opacity hover:opacity-90 active:scale-[0.98] sm:mt-6 sm:h-[60px] sm:rounded-[20px] sm:text-base">
          {t.home.about.btnReadMore}

          <svg
            viewBox="0 0 10 23"
            fill="none"
            className={`h-[20px] w-8 ${lang === "dr" ? "" : "rotate-180"}`}
          >
            <path
              d="M30 11H5M11 3L3 11L11 19"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="order-2 flex w-full flex-1 justify-center lg:order-2 lg:justify-end ">
        <img
          src={aboutUsImage}
          alt=""
          className="h-[240px] w-full max-w-[750px] rounded-[24px] object-cover sm:h-[300px] sm:rounded-[28px] md:h-[360px] md:rounded-[31px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutCompany;
