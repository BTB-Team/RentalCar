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

  /*
   * ==========================================
   * CAR IMAGES
   * ==========================================
   */

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

  /*
   * ==========================================
   * IMAGE NAVIGATION
   * ==========================================
   */

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

  /*
   * ==========================================
   * KEEP ACTIVE THUMBNAIL VISIBLE
   * ==========================================
   */

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

  /*
   * ==========================================
   * RESET WHEN CAR CHANGES
   * ==========================================
   */

  useEffect(() => {
    setActiveImage(0);
    setThumbnailStart(0);
  }, [car?.id]);

  /*
   * ==========================================
   * THUMBNAIL NAVIGATION
   * ==========================================
   */

  const nextThumbnail = () => {
    nextImage();
  };

  const previousThumbnail = () => {
    previousImage();
  };

  /*
   * ==========================================
   * DISPLAYED THUMBNAILS
   * ==========================================
   */

  const displayedThumbnails = hasThumbnailCarousel
    ? carImages.slice(thumbnailStart, thumbnailStart + VISIBLE_THUMBNAILS)
    : carImages;

  /*
   * ==========================================
   * SWIPE HANDLERS
   * ==========================================
   */

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

  /*
   * ==========================================
   * EMPTY STATE
   * ==========================================
   */

  if (!car || totalImages === 0) {
    return null;
  }

  return (
    <section
      className="mx-auto min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:px-8 lg:px-12 lg:pt-36 xl:px-20 2xl:px-24"
      style={{
        backgroundImage: "url(/RentalCar/images/Ellipse.png)",
      }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ==========================================
            BREADCRUMB
        ========================================== */}
        <div
          dir={isPersian ? "rtl" : "ltr"}
          className={`mb-6 flex w-full flex-wrap items-center gap-x-2 gap-y-1 font-semibold text-sm md:text-lg text-brand-black sm:mb-8  ${
            isPersian ? "justify-start text-right" : "justify-start text-left"
          }`}
        >
          <img
            src="/RentalCar/images/icons/home_icon.png"
            alt="home icon"
            className="h-6 w-[26px] shrink-0 sm:w-[15px]"
          />

          <Link to="/" className="hover:underline  ">
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

        {/* ==========================================
            MAIN CONTENT
        ========================================== */}

        <div
          dir="ltr"
          className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:items-start"
        >
          {/* ========================================
              IMAGE SECTION
          ======================================== */}
          <div
            className={`flex w-full min-w-0 flex-col ${
              isPersian ? "order-1" : "order-2"
            }`}
          >
            {/* Main Image */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]  sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]"
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

            {/* ========================================
                THUMBNAILS
            ======================================== */}
            <div className="mt-3 flex w-full items-center justify-center gap-1">
              {/* Previous */}
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={previousThumbnail}
                  aria-label="Previous images"
                  className="flex h-8 md:h-10 w-8 md:w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                >
                  <img
                    src="/RentalCar/images/icons/left_arrow_icon.png"
                    alt="Previous"
                    className="w-4 md:w-5 h-8 md:h-10"
                  />
                </button>
              )}

              {/* Thumbnails */}
              <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex w-max items-center justify-center gap-1 px-1">
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
                        className={`h-15 w-20 shrink-0 overflow-hidden rounded-[15px] md:h-15 md:w-30 md:rounded-[15px] ${
                          isActive
                            ? "border-2 border-brand-yellow"
                            : "border-2 border-transparent"
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

              {/* Next */}
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={previousThumbnail}
                  aria-label="Previous images"
                  className="flex h-8 md:h-10 w-8 md:w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                >
                  <img
                    src="/RentalCar/images/icons/right_arrow_icon.png"
                    alt="Previous"
                    className="w-4 md:w-5 h-8 md:h-10"
                  />
                </button>
              )}
            </div>
          </div>

          {/* ========================================
              INFORMATION SECTION
          ======================================== */}

          <div
            dir={isPersian ? "rtl" : "ltr"}
            className={`flex w-full min-w-0 flex-col ${
              isPersian
                ? "order-2 items-start text-right"
                : "order-1 items-start text-left"
            } md:pt-2 lg:pt-4`}
          >
            {/* Car Name */}

            <h1 className="w-full break-words font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              {isPersian ? car.name_dr : car.name_en}
            </h1>

            {/* Short Description */}

            <h2 className="mt-2 w-full break-words font-semibold text-sm md:text-lg lg:text-xl">
              {isPersian ? car.shortDesc_dr : car.shortDesc_en}
            </h2>

            {/* ========================================
                TAGS
            ======================================== */}

            <div className="mt-7 flex w-full flex-wrap justify-start gap-1.5 sm:gap-2">
              {(isPersian ? car.tags_dr : car.tags_en)?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-yellow px-3 py-1 text-base font-semibold text-black sm:px-4"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ========================================
                DESCRIPTION
            ======================================== */}

            <p className="mt-7 w-full break-words font-normal text-sm leading-[29px] text-[#535353] md:text-base">
              {isPersian ? car.longDesc_dr : car.longDesc_en}
            </p>

            {/* ========================================
                BUTTONS
            ======================================== */}

            <div
              dir="ltr"
              className="mt-12 flex w-full flex-col sm:flex-row gap-3 md:gap-5"
            >
              {/* Request Car */}
              <a
                href="https://wa.me/+93786377417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow font-semibold text-base lg:text-xl px-4 text-black transition hover:opacity-90 active:scale-[0.98] sm:flex-1"
              >
                <span dir={isPersian ? "rtl" : "ltr"}>
                  {isPersian ? "درخواست موتر" : "Request a car"}
                </span>

                <img
                  src="/RentalCar/images/icons/car_icon.png"
                  alt="car icon"
                  className="h-auto size-5 md:size-7 shrink-0"
                />
              </a>

              {/* Contact */}
              <a
                href="tel:+93786377417"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-black px-4 text-base font-semibold text-white lg:text-xl transition active:scale-[0.98] sm:flex-1 sm:text-[13px]"
              >
                <span dir={isPersian ? "rtl" : "ltr"}>
                  {isPersian ? "تماس فوری" : "Contact Us Now"}
                </span>

                <img
                  src="/RentalCar/images/icons/call_icon.png"
                  alt="call icon"
                  className="h-auto size-5 md:size-7 shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
