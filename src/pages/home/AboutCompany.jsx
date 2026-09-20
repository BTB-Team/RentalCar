import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import aboutUsImage from "../../assets/images/aboutUSImage.jpeg";
import vectorImage from "../../assets/images/Vector 1.svg";

const AboutCompany = () => {
  const { t, lang } = useLangStore();

  return (
    <section
      className="m-auto max-w-[1510px] relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:ps-[150px] flex flex-col gap-10 xl:flex-row items-center xl:items-stretch overflow-hidden pb-12"
      dir="ltr"
    >
      {/* 💡 اعمال مارجین منفی اختصاصی راست (xl:-me-16) برای چسباندن قطعی تصویر به لبه سمت راست صفحه */}
      <div className="order-2 flex-1 w-full max-w-[1440px] right-0 xl:w-auto flex justify-center xl:justify-end xl:-me-16 2xl:-me-0">
        <img
          src={aboutUsImage}
          alt=""
          className="rounded-3xl object-cover object-top w-full max-w-[550px] xl:max-w-none lg:w-[613px] lg:h-[420px] xl:rounded-e-none xl:rounded-s-[40px] shadow-sm"
          loading="lazy"
        />
      </div>

      {/* Vector Image */}
      <img
        className="m-auto max-w-[1440px] absolute object-cover h-[300px] z-[-1] -top-[60px] sm:-top-[20px] md:-top-[20px] left-0 2xl:left-9"
        src={vectorImage}
        alt=""
      />

      {/* Text (ستون متن) */}
      <div
        // 💡 منعطف کردن عرض متن تا در حالت تک‌ستونه کاملاً پهن و در دو ستونه مهار شود
        className="relative w-full max-w-[666px] flex flex-1 flex-col justify-between items-start z-10"
        dir={lang === "dr" ? "rtl" : "ltr"}
      >
        <div className="w-full">
          {/* 💡 تنظیم سایز فونت واکنش‌گرا تا در اسکرین‌های متوسط مچاله نشود */}
          <h2 className="font-sans text-xl font-black text-brand-black sm:text-2xl md:text-[34px] xl:text-[38px] py-4 text-start leading-tight">
            {t.home.about.title}
          </h2>

          <span className="block h-1 rounded bg-brand-yellow w-[120px] sm:w-[190px] mb-4" />
        </div>

        <div className="w-full space-y-4">
          {/* 💡 حذف قطعی text-justify و تنظیم فونت خوانا بدون فاصله بین کلمات */}
          <p className="text-start text-sm sm:text-base md:text-[17px] xl:text-[18px] font-sans font-medium text-brand-black/90 leading-[32px] sm:leading-[42px] tracking-normal">
            <span className="font-black text-black">{t.home.about.companyName} </span>
            {t.home.about.description}
          </p>

          <p className="text-start text-sm sm:text-base md:text-[17px] xl:text-[18px] font-sans font-medium text-brand-black/90 kneeling-[32px] sm:leading-[42px] tracking-normal">
            {t.home.about.description_2}
          </p>
        </div>

        <Link
          to="/About"
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-[16px] bg-brand-yellow px-5 font-sans text-sm font-extrabold text-brand-black transition-all hover:opacity-90 active:scale-[0.98] sm:h-[60px] sm:rounded-[20px] sm:text-base shrink-0"
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
