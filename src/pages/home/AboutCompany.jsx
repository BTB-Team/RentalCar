import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import aboutUsImage from "../../assets/images/aboutUSImage.jpeg";
import vectorImage from "../../assets/images/Vector 1.svg";

const AboutCompany = () => {
  const { t, lang } = useLangStore();

  return (
    <section
      className="relative px-5  flex flex-col  gap-16   md:items-between lg:flex-row lg:px-0 lg:ps-[150px] "
      dir="ltr"
    >
      {/* Image */}
      <div className="order-2  flex-1 ">
        <img
          src={aboutUsImage}
          alt=""
          className=" rounded-3xl object-cover md:w-auto lg:w-full  lg:h-[430px] lg:rounded-e-none  lg:rounded-s-[40px]"
          loading="lazy"
        />
      </div>
      {/* Vector Image */}
      <img
        className="absolute  object-cover h-[300px] z-[-1] top-[70rem] sm:-top-[20px] md:top-[60px]  left-0 "
        src={vectorImage}
        alt=""
      />
      {/* Text */}
      <div
        className="relative flex  flex-1 flex-col justify-between items-start"
        dir={lang === "dr" ? "rtl" : "ltr"}
      >
        <div>
          <h2 className="font-sans text-xl  font-[800] text-brand-black sm:text-2xl ">
            {t.home.about.title}
          </h2>

          <span className=" block h-1  rounded bg-brand-yellow  sm:w-[190px] sm:mb-4" />
        </div>
        <div>
          <p className="pt-3 text-justify text-lg   font-sans   font-regular  text-brand-black/80 sm:text-xl sm:pt-0 sm:leading-[2.5rem]">
            <span className="font-[800] ">{t.home.about.companyName} </span>
            {t.home.about.description}
          </p>

          <p className="text-justify text-lg pt-3   font-sans   font-regular text-brand-black/80 sm:text-xl sm:leading-[2.5rem] ">
            {t.home.about.description_2}
          </p>
        </div>
        <Link
          to="/About"
          className=" mt-5 inline-flex h-12 items-center gap-2 rounded-[16px] bg-brand-yellow px-4 font-sans text-sm font-extrabold text-brand-black transition-opacity hover:opacity-90 active:scale-[0.98] sm:mt-6 sm:h-[60px] sm:rounded-[20px] sm:text-base"
        >
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
        </Link>
      </div>
    </section>
  );
};

export default AboutCompany;
