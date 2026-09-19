import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLangStore } from "../../../store/useLangStore";

const IMAGE_PATH = "/RentalCar";
const VISIBLE_THUMBNAILS = 5;
const SWIPE_THRESHOLD = 50;

const normalizeImagePath = (image) => {
  if (!image) {
    return "";
  }

  return `${IMAGE_PATH}/${image.replace(/^\/+/, "")}`;
};

export const CarDetailsHero = ({ car }) => {
  const { lang } = useLangStore();

  const isPersian = lang === "dr";

  const [activeImage, setActiveImage] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /*CAR IMAGES */

  const carImages = useMemo(() => {
    if (!car) {
      return [];
    }

    return [
      car.mainImage,
      ...(Array.isArray(car.gallery) ? car.gallery : []),
    ].filter(Boolean);
  }, [car]);

  const totalImages = carImages.length;
  const hasMultipleImages = totalImages > 1;
  const hasThumbnailCarousel = totalImages > VISIBLE_THUMBNAILS;

  /*IMAGE NAVIGATION*/

  const nextImage = () => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveImage((current) => (current >= totalImages - 1 ? 0 : current + 1));
  };

  const previousImage = () => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveImage((current) => (current <= 0 ? totalImages - 1 : current - 1));
  };

  /*KEEP ACTIVE THUMBNAIL VISIBLE*/

  useEffect(() => {
    if (!hasThumbnailCarousel) {
      setThumbnailStart(0);
      return;
    }

    if (activeImage < thumbnailStart) {
      setThumbnailStart(activeImage);
      return;
    }

    if (activeImage >= thumbnailStart + VISIBLE_THUMBNAILS) {
      setThumbnailStart(activeImage - VISIBLE_THUMBNAILS + 1);
    }
  }, [activeImage, thumbnailStart, hasThumbnailCarousel]);

  /*RESET WHEN CAR CHANGES*/

  useEffect(() => {
    setActiveImage(0);
    setThumbnailStart(0);
  }, [car?.id]);

  /*THUMBNAIL NAVIGATION*/

  const nextThumbnail = () => {
    nextImage();
  };

  const previousThumbnail = () => {
    previousImage();
  };

  /*DISPLAYED THUMBNAILS*/

  const displayedThumbnails = hasThumbnailCarousel
    ? carImages.slice(thumbnailStart, thumbnailStart + VISIBLE_THUMBNAILS)
    : carImages;

  /*SWIPE HANDLERS*/

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      return;
    }

    if (distance > 0) {
      nextImage();
    } else {
      previousImage();
    }
  };

  /*EMPTY STATE*/

  if (!car || totalImages === 0) {
    return null;
  }
  return (
    <section
      // 💡 حذف استایل پس‌زمینه از این تگ و تبدیل آن به یک پوشش سراسریِ تمام‌عرض
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <img 
        src="/RentalCar/images/Ellipse.png" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-fill pointer-events-none select-none z-0"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 lg:mt-8">
        {/* BREADCRUMB */}
        <div
          dir={isPersian ? "rtl" : "ltr"}
          className="mb-6 flex w-full flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-brand-black sm:mb-8 md:text-lg text-start"
        >
          <img
            src="/RentalCar/images/icons/home_icon.png"
            alt="home icon"
            className="h-6 w-[26px] shrink-0"
          />
          <Link to="/" className="hover:underline">
            {isPersian ? "خانه" : "Home"}
          </Link>
          <span>/</span>
          <Link to="/cars" className="hover:underline">
            {isPersian ? "موتر ها" : "Cars"}
          </Link>
          <span>/</span>
          <span className="max-w-[180px] truncate font-semibold sm:max-w-[280px] md:max-w-[400px]">
            {isPersian ? car.name_dr : car.name_en}
          </span>
        </div>

        {/* MAIN CONTENT GRID */}
        <div
          dir={isPersian ? "rtl" : "ltr"}
          className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2 lg:items-start"
        >
          
          {/* RIGHT COLUMN: TEXT INFORMATION (بخش متون در سمت راست) */}
          <div className="flex w-full min-w-0 flex-col items-start text-start md:pt-2 lg:pt-4">
            {/* Car Name */}
            <h1 className="w-full break-words text-3xl font-extrabold sm:text-4xl lg:text-5xl text-brand-black">
              {isPersian ? car.name_dr : car.name_en}
            </h1>

            {/* Short Description */}
            <h2 className="mt-2 w-full break-words text-base font-semibold md:text-lg lg:text-xl text-gray-800">
              {isPersian ? car.shortDesc_dr : car.shortDesc_en}
            </h2>
            {/* TAGS (فیلتر خودکار تگ‌های تکراری برای همخوانی ۱۰۰٪ با فیگما) */}
            <div className="mt-6 flex w-full flex-wrap justify-start gap-2">
              {(() => {
                // ۱. جمع‌آوری تمام تگ‌ها و لیبل‌ها در یک آرایه خام
                const rawTags = [
                  ...(isPersian ? (car.tags_dr || []) : (car.tags_en || [])),
                  isPersian ? car.securityLabel_dr : car.securityLabel_en,
                  isPersian ? car.armoredLabel_dr : car.armoredLabel_en,
                  isPersian ? car.category_dr : car.category_en
                ];

                // ۲. حذف مقادیر null، undefined، فضاهای خالی و تگ‌های تکراری
                const uniqueTags = Array.from(
                  new Set(
                    rawTags
                      .filter(Boolean) // حذف مقادیر خالی
                      .map(tag => tag.trim()) // حذف فضاهای خالی اضافی اطراف متن
                  )
                );

                // ۳. رندر نهایی کپسول‌های کاملاً منحصربه‌فرد
                return uniqueTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-yellow px-4 py-1 text-sm md:text-base font-semibold text-black"
                  >
                    {tag}
                  </span>
                ));
              })()}
            </div>


            {/* DESCRIPTION */}
            <p className="mt-6 w-full break-words text-sm font-normal leading-[29px] text-[#535353] md:text-base">
              {isPersian ? car.longDesc_dr : car.longDesc_en}
            </p>
          </div>

          {/* LEFT COLUMN: MAIN IMAGE (عکس بزرگ در سمت چپ) */}
          <div className="flex w-full min-w-0 flex-col">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={normalizeImagePath(carImages[activeImage])}
                alt={isPersian ? car.name_dr : car.name_en}
                className="h-full w-full select-none object-cover"
                draggable="false"
              />
            </div>
          </div>

        </div>
        {/* BOTTOM ROW: THUMBNAILS & BUTTONS WITH MOBILE RESPONSIVE ORDER */}
        <div 
          dir={isPersian ? "rtl" : "ltr"}
          className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 items-center mt-6"
        >
          
          {/* تصاویر بندانگشتی گالری (در موبایل اول می‌آید: order-1 | در دسکتاپ دوم می‌آید: md:order-2) */}
          <div 
            dir="ltr" 
            className="flex w-full items-center justify-center gap-3 order-1 md:order-2"
          >
            {/* Previous Button (فلش چپ ضخیم منطبق بر فیگما) */}
            {hasMultipleImages && (
              <button
                type="button"
                onClick={previousThumbnail}
                aria-label="Previous images"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow hover:opacity-90 transition-opacity text-black"
              >
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3" /* 💡 ضخامت بالای خط برای همخوانی با فیگما */
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}
            {/* Thumbnails Carousel */}
            <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max items-center justify-center gap-2 px-1">
                {displayedThumbnails.map((image, displayedIndex) => {
                  const actualIndex = hasThumbnailCarousel
                    ? thumbnailStart + displayedIndex
                    : displayedIndex;

                  const isActive = activeImage === actualIndex;

                  return (
                    <button
                      type="button"
                      key={`${image}-${actualIndex}`}
                      onClick={() => setActiveImage(actualIndex)}
                      aria-label={`View image ${actualIndex + 1}`}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-[15px] transition-all ${
                        isActive
                          ? "border-2 border-brand-yellow scale-[1.02]"
                          : "border border-gray-300" 
                      }`}
                    >
                      <img
                        src={normalizeImagePath(image)}
                        alt=""
                        className="h-full w-full select-none object-cover"
                        draggable="false"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Button (فلش راست ضخیم منطبق بر فیگما) */}
            {hasMultipleImages && (
              <button
                type="button"
                onClick={nextThumbnail}
                aria-label="Next images"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow hover:opacity-90 transition-opacity text-black"
              >
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3" /* 💡 ضخامت بالای خط برای همخوانی با فیگما */
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}
          </div>

          {/* دکمه‌های اکشن (در موبایل دوم می‌آید: order-2 | در دسکتاپ اول می‌آید: md:order-1) */}
          <div 
            dir={isPersian ? "rtl" : "ltr"}
            className="flex w-full flex-col gap-4 sm:flex-row order-2 md:order-1"
          >
            {/* Contact Button */}
            <a
              href="tel:+93786377417"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black px-6 text-base font-bold text-white transition hover:opacity-90 active:scale-[0.98] sm:flex-1 lg:text-lg"
            >
              <span>
                {isPersian ? "تماس فوری" : "Contact Us Now"}
              </span>
              <img
                src="/RentalCar/images/icons/call_icon.png"
                alt="call icon"
                className="h-5 w-5 shrink-0"
              />
            </a>

            {/* Request Car Button */}
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 text-base font-bold text-black transition hover:opacity-90 active:scale-[0.98] sm:flex-1 lg:text-lg"
            >
              <span>
                {isPersian ? "درخواست موتر" : "Request a car"}
              </span>
              <img
                src="/RentalCar/images/icons/car_icon.png"
                alt="car icon"
                className="h-5 w-[26px] shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );

};
