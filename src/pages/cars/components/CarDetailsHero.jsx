import { useEffect, useMemo, useRef, useState } from "react";

import { useLangStore } from "../../../store/useLangStore";
import { Link } from "react-router-dom";
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
    if (!hasMultipleImages) {
      return;
    }

    setActiveImage((current) => (current >= totalImages - 1 ? 0 : current + 1));
  };

  const previousThumbnail = () => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveImage((current) => (current <= 0 ? totalImages - 1 : current - 1));
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
          className={`mb-6 flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 text-[10px] font-medium text-brand-black sm:mb-8 sm:text-[11px] ${
            isPersian ? "text-right" : "text-right"
          }`}
        >
          <img
            src="/RentalCar/images/icons/home_icon.png"
            alt="home icon"
            className="h-auto w-[14px] shrink-0 sm:w-[15px]"
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
        {/* ==========================================
            MAIN CONTENT
        ========================================== */}

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-8 lg:gap-12 xl:gap-16">
          {/* ========================================
              INFORMATION SECTION
          ======================================== */}

          <div className="order-1 flex min-w-0 w-full flex-col items-start md:order-2 md:pt-2 lg:pt-4">
            {/* Car Name */}

            <h1 className="w-full break-words text-[24px] font-bold leading-[1.35] text-black sm:text-[27px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
              {isPersian ? car.name_dr : car.name_en}
            </h1>

            {/* Short Description */}

            <h2 className="mt-2 w-full break-words text-[12px] font-semibold leading-6 text-[#151515] sm:text-[13px] sm:leading-7 md:text-[14px]">
              {isPersian ? car.shortDesc_dr : car.shortDesc_en}
            </h2>

            {/* ========================================
                TAGS
            ======================================== */}

            <div className="mt-4 flex w-full flex-wrap justify-start gap-1.5 sm:gap-2">
              {(isPersian ? car.tags_dr : car.tags_en)?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-yellow px-3 py-1 text-[9px] font-bold leading-4 text-black sm:px-4 sm:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ========================================
                DESCRIPTION
            ======================================== */}

            <p className="mt-5 w-full break-words text-[11px] leading-[2] text-[#666] sm:mt-6 sm:text-[12px] md:text-[12px] lg:text-[13px]">
              {isPersian ? car.longDesc_dr : car.longDesc_en}
            </p>

            {/* ========================================
                BUTTONS
            ======================================== */}

            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-3">
              {/* Request Car */}

              <a
                href="https://wa.me/+93786377417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-4 text-[12px] font-bold text-black transition hover:opacity-90 active:scale-[0.98] sm:flex-1 sm:text-[13px]"
              >
                <span>{isPersian ? "درخواست موتر" : "Request a car"}</span>

                <img
                  src="/RentalCar/images/icons/car_icon.png"
                  alt="car icon"
                  className="h-auto w-[15px] shrink-0"
                />
              </a>

              {/* Contact */}

              <a
                href="https://wa.me/+93786377417"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-black px-4 text-[12px] font-bold text-white transition hover:bg-[#151515] active:scale-[0.98] sm:flex-1 sm:text-[13px]"
              >
                <span>{isPersian ? "تماس فوری" : "Contact Us Now"}</span>

                <img
                  src="/RentalCar/images/icons/call_icon.png"
                  alt="call icon"
                  className="h-auto w-[15px] shrink-0"
                />
              </a>
            </div>
          </div>

          {/* ========================================
              IMAGE SECTION
          ======================================== */}

          <div className="order-2 flex min-w-0 w-full flex-col md:order-1">
            {/* Main Image */}

            <div
              className="relative w-full overflow-hidden rounded-[14px] bg-[#f5f5f5] aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]"
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

              {/* Search Button */}

              {/* <button
                type="button"
                aria-label="Search image"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/80 backdrop-blur-sm transition hover:bg-white sm:right-3 sm:top-3 sm:h-9 sm:w-9"
              >
                <img
                  src="/RentalCar/images/icons/search_icon.png"
                  alt="Search icon"
                  className="h-auto w-[18px] sm:w-[20px]"
                />
              </button> */}
            </div>

            {/* ========================================
                THUMBNAILS
            ======================================== */}

            <div className="mt-3 flex w-full items-center justify-center gap-3 sm:mt-4 sm:gap-4">
              {/* Previous */}
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={previousThumbnail}
                  aria-label="Previous images"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                >
                  <img
                    src="/RentalCar/images/icons/left_arrow_icon.png"
                    alt="Previous"
                    className="w-[15px]"
                  />
                </button>
              )}

              {/* Thumbnails */}
              <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
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
                        className={`h-[52px] w-[70px] shrink-0 overflow-hidden rounded-[10px] sm:h-[58px] sm:w-[78px] sm:rounded-[12px] ${
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
                  onClick={nextThumbnail}
                  aria-label="Next images"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                >
                  <img
                    src="/RentalCar/images/icons/right_arrow_icon.png"
                    alt="Next"
                    className="w-[15px]"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
