import { useEffect, useMemo, useRef, useState } from "react";

import { Link } from "react-router-dom";

const GAP = 20;

const getVisibleCards = () => {
  if (typeof window === "undefined") {
    return 3;
  }

  if (window.innerWidth < 768) {
    return 1;
  }

  if (window.innerWidth < 1024) {
    return 2;
  }

  return 3;
};

export const RelatedCars = ({ cars = [], lang }) => {
  const isPersian = lang === "dr";

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);

  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalCars = cars.length;
  const shouldCarousel = totalCars > visibleCards;

  /*
   * --------------------------------------------------
   * Responsive visible cards
   * --------------------------------------------------
   */

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * --------------------------------------------------
   * Calculate card width
   * --------------------------------------------------
   */

  useEffect(() => {
    const updateCardSize = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;

      if (!containerWidth) {
        return;
      }

      const cardWidth =
        (containerWidth - GAP * (visibleCards - 1)) / visibleCards;

      setCardStep(cardWidth + GAP);
    };

    updateCardSize();

    const resizeObserver = new ResizeObserver(updateCardSize);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateCardSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCardSize);
    };
  }, [visibleCards]);

  /*
   * --------------------------------------------------
   * Infinite carousel clones
   *
   * [last cards] [real cards] [first cards]
   * --------------------------------------------------
   */

  const carouselCars = useMemo(() => {
    if (!shouldCarousel) {
      return cars;
    }

    const before = cars.slice(-visibleCards);
    const after = cars.slice(0, visibleCards);

    return [...before, ...cars, ...after];
  }, [cars, visibleCards, shouldCarousel]);

  /*
   * --------------------------------------------------
   * Start from first real card
   * --------------------------------------------------
   */

  useEffect(() => {
    if (shouldCarousel) {
      setCurrentIndex(visibleCards);
    } else {
      setCurrentIndex(0);
    }
  }, [visibleCards, totalCars, shouldCarousel]);

  /*
   * --------------------------------------------------
   * MOVE LEFT
   *
   * ← button
   *
   * Cards physically move LEFT.
   * --------------------------------------------------
   */

  const moveLeft = () => {
    if (!shouldCarousel) {
      return;
    }

    setCurrentIndex((previous) => previous + 1);
  };

  /*
   * --------------------------------------------------
   * MOVE RIGHT
   *
   * → button
   *
   * Cards physically move RIGHT.
   * --------------------------------------------------
   */

  const moveRight = () => {
    if (!shouldCarousel) {
      return;
    }

    setCurrentIndex((previous) => previous - 1);
  };

  /*
   * --------------------------------------------------
   * Infinite loop
   * --------------------------------------------------
   */

  useEffect(() => {
    if (!shouldCarousel) {
      return;
    }

    const firstRealIndex = visibleCards;
    const lastRealIndex = visibleCards + totalCars - 1;

    if (currentIndex > lastRealIndex) {
      setCurrentIndex(firstRealIndex);
    }

    if (currentIndex < firstRealIndex) {
      setCurrentIndex(lastRealIndex);
    }
  }, [currentIndex, shouldCarousel, totalCars, visibleCards]);

  /*
   * --------------------------------------------------
   * Swipe
   *
   * Swipe LEFT  -> cards move LEFT
   * Swipe RIGHT -> cards move RIGHT
   *
   * Same physical behavior in both languages.
   * --------------------------------------------------
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

    if (Math.abs(distance) < 50) {
      return;
    }

    /*
     * Finger moved LEFT
     * Cards move LEFT
     */

    if (distance > 0) {
      moveLeft();
      return;
    }

    /*
     * Finger moved RIGHT
     * Cards move RIGHT
     */

    moveRight();
  };

  /*
   * --------------------------------------------------
   * No cars
   * --------------------------------------------------
   */

  if (totalCars === 0) {
    return null;
  }

  /*
   * --------------------------------------------------
   * Track position
   *
   * currentIndex increases -> translate becomes
   * more negative -> cards move LEFT.
   *
   * currentIndex decreases -> translate becomes
   * less negative -> cards move RIGHT.
   * --------------------------------------------------
   */

  const translateX = currentIndex * cardStep;
    return (
      <section
        dir={isPersian ? "rtl" : "ltr"}
        className="mx-auto mb-12 mt-12 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 max-w-[1400px]"
      >
        {/* ================= HEADER ================= */}
        <div className="mb-6 flex w-full items-center justify-between">
          
          {/* ================= TITLE ================= */}
          <h2 className="text-xl font-black font-sans text-brand-black sm:text-2xl md:text-[28px]">
            {isPersian ? "موتر های مرتبط" : "Related Cars"}
          </h2>
  
          {/* ================= NAVIGATION BUTTONS ================= */}
          <div className="flex items-center gap-2">
            {isPersian ? (
              <>
                {/* RIGHT ARROW (حرکت به راست - ضخیم و مشکی) */}
                <button
                  type="button"
                  onClick={moveRight}
                  disabled={!shouldCarousel}
                  aria-label="حرکت به راست"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10 text-brand-black"
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
  
                {/* LEFT ARROW (حرکت به چپ - ضخیم و مشکی) */}
                <button
                  type="button"
                  onClick={moveLeft}
                  disabled={!shouldCarousel}
                  aria-label="حرکت به چپ"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10 text-brand-black"
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
              </>
            ) : (
              <>
                {/* LEFT ARROW */}
                <button
                  type="button"
                  onClick={moveLeft}
                  disabled={!shouldCarousel}
                  aria-label="Move left"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10 text-brand-black"
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
  
                {/* RIGHT ARROW */}
                <button
                  type="button"
                  onClick={moveRight}
                  disabled={!shouldCarousel}
                  aria-label="Move right"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10 text-brand-black"
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
              </>
            )}
          </div>
        </div>
  
        {/* ================= CAROUSEL AREA ================= */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            dir="ltr"
            className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {carouselCars.map((car, index) => {
              const carName = isPersian ? car.name_dr : car.name_en;
              const tags = isPersian ? car.tags_dr : car.tags_en;
              const description = isPersian ? car.shortDesc_dr : car.shortDesc_en;
              const passengerLabel = isPersian ? car.passengerLabel_dr : car.passengerLabel_en;
  
              return (
                <article
                  key={`${car.id}-${index}`}
                  dir={isPersian ? "rtl" : "ltr"}
                  className="shrink-0 overflow-hidden rounded-[14px] border border-[#D9D9D9] bg-white transition-all shadow-sm hover:shadow-md flex flex-col"
                  style={{
                    width:
                      cardStep > 0
                        ? `${cardStep - GAP}px`
                        : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                  }}
                >
                  {/* ================= IMAGE SECTION ================= */}
                  <div className="h-[180px] sm:h-[220px] md:h-[200px] w-full overflow-hidden shrink-0">
                    <img
                      src={`/RentalCar${car.mainImage}`}
                      alt={carName}
                      className="h-full w-full object-cover select-none pointer-events-none"
                      draggable="false"
                    />
                  </div>
  
                  {/* ================= CONTENT SECTION ================= */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between min-h-[190px]">
                    
                    <div className="space-y-3">
                      {/* NAME */}
                      <h3 className="text-start text-base sm:text-lg md:text-xl font-bold text-brand-black break-words">
                        {carName}
                      </h3>
  
                      {/* TAGS */}
                      <div className="flex flex-wrap items-center justify-start gap-1.5 min-h-[24px]">
                        {tags?.map((tag) => (
                          <span
                            key={tag}
                            className="whitespace-nowrap rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
  
                      {/* DESCRIPTION */}
                      <p className="text-start text-xs sm:text-sm font-medium leading-[1.8] text-[#535353] line-clamp-3">
                        {description}
                      </p>
                    </div>
  
                    {/* BOTTOM ACTIONS BAR (ریسپانسیو کامل المان‌های داخلی) */}
                    <div className="mt-4 flex flex-row items-center justify-between gap-2 pt-2 border-t border-gray-50">
                      {/* PASSENGER CAPACITY */}
                      <span className="shrink-0 rounded-full border border-brand-yellow px-2.5 py-1 text-[11px] sm:text-xs md:text-sm font-bold text-black whitespace-nowrap">
                        {car.passengerCapacity} {passengerLabel}
                      </span>
  
                      {/* VIEW DETAILS BUTTON */}
                      <Link
                        to={`/cars/${car.id}`}
                        className="shrink-0 rounded-full bg-brand-yellow px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm font-bold text-black transition hover:opacity-90 active:scale-95 whitespace-nowrap"
                      >
                        {isPersian ? "مشاهده جزئیات" : "View Details"}
                      </Link>
                    </div>
  
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );

};
