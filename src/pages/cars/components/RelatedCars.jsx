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
      className="mx-auto mb-18 mt-16 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24"
    >
      {/* ================= HEADER ================= */}

      <div className="mb-4 flex w-full items-center justify-between">
        {/* ================= TITLE ================= */}

        <h2 className="text-lg font-bold text-black md:text-[28px]">
          {isPersian ? "موتر های مرتبط" : "Related Cars"}
        </h2>

        {/* ================= BUTTONS ================= */}

        <div className="flex items-center gap-2">
          {isPersian ? (
            <>
              {/* RIGHT ARROW
                  Cards move RIGHT */}

              <button
                type="button"
                onClick={moveRight}
                disabled={!shouldCarousel}
                aria-label="حرکت به راست"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-opacity disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:w-10"
              >
                <img
                  src="/RentalCar/images/icons/right_arrow_icon.png"
                  alt="حرکت به راست"
                  className="h-auto w-[15px]"
                />
              </button>

              {/* LEFT ARROW
                  Cards move LEFT */}

              <button
                type="button"
                onClick={moveLeft}
                disabled={!shouldCarousel}
                aria-label="حرکت به چپ"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-opacity disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:w-10"
              >
                <img
                  src="/RentalCar/images/icons/left_arrow_icon.png"
                  alt="حرکت به چپ"
                  className="h-auto w-[15px]"
                />
              </button>
            </>
          ) : (
            <>
              {/* LEFT ARROW
                  Cards move LEFT */}

              <button
                type="button"
                onClick={moveLeft}
                disabled={!shouldCarousel}
                aria-label="Move left"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-opacity disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:w-10"
              >
                <img
                  src="/RentalCar/images/icons/left_arrow_icon.png"
                  alt="Move left"
                  className="h-auto w-[15px]"
                />
              </button>

              {/* RIGHT ARROW
                  Cards move RIGHT */}

              <button
                type="button"
                onClick={moveRight}
                disabled={!shouldCarousel}
                aria-label="Move right"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-opacity disabled:cursor-not-allowed disabled:opacity-50 md:h-10 md:w-10"
              >
                <img
                  src="/RentalCar/images/icons/right_arrow_icon.png"
                  alt="Move right"
                  className="h-auto w-[15px]"
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}

      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          dir="ltr"
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translate3d(-${translateX}px, 0, 0)`,
          }}
        >
          {carouselCars.map((car, index) => {
            const carName = isPersian ? car.name_dr : car.name_en;

            const tags = isPersian ? car.tags_dr : car.tags_en;

            const description = isPersian
              ? car.shortDesc_dr
              : car.shortDesc_en;

            const passengerLabel = isPersian
              ? car.passengerLabel_dr
              : car.passengerLabel_en;

            return (
              <article
                key={`${car.id}-${index}`}
                dir={isPersian ? "rtl" : "ltr"}
                className="shrink-0 overflow-hidden rounded-[14px] border border-[#D9D9D9] bg-white"
                style={{
                  width:
                    cardStep > 0
                      ? `${cardStep - GAP}px`
                      : `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
                }}
              >
                {/* ================= IMAGE ================= */}

                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={`/RentalCar${car.mainImage}`}
                    alt={carName}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div className="flex min-h-[178px] flex-col px-2 pb-3 pt-3">
                  {/* NAME */}

                  <h3 className="mt-3 text-start text-lg font-semibold md:mt-5 md:text-2xl">
                    {carName}
                  </h3>

                  {/* TAGS */}

                  <div className="mt-3 flex min-h-[22px] flex-wrap items-center justify-start gap-1 md:mt-5">
                    {tags?.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-brand-yellow px-2 py-1 text-sm font-semibold leading-none text-black md:text-base"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-3 overflow-hidden text-base font-semibold leading-[1.9] text-[#333] md:mt-5">
                    {description}
                  </p>

                  {/* BOTTOM */}

                  <div className="mt-6 flex items-center justify-between gap-2 pt-3 md:mt-8">
                    {/* PASSENGER */}

                    <span className="shrink-0 rounded-full border border-brand-yellow px-3 py-[5px] text-sm font-semibold leading-none text-black md:text-base">
                      {car.passengerCapacity} {passengerLabel}
                    </span>

                    {/* VIEW DETAILS */}

                    <Link
                      to={`/cars/${car.id}`}
                      className="shrink-0 rounded-full bg-brand-yellow px-3 py-[6px] text-sm font-semibold leading-none text-black md:text-base"
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

