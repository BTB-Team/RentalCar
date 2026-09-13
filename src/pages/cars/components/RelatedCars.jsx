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
  const [visibleCards, setVisibleCards] = useState(getVisibleCards);
  const [currentIndex, setCurrentIndex] = useState(getVisibleCards());
  const [cardStep, setCardStep] = useState(0);

  const containerRef = useRef(null);

  const totalCars = cars.length;
  const shouldCarousel = totalCars > visibleCards;

  /*
   * Calculate the exact width of one card + gap.
   */
  useEffect(() => {
    const updateCardSize = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;

      const cardWidth =
        (containerWidth - GAP * (visibleCards - 1)) /
        visibleCards;

      setCardStep(cardWidth + GAP);
    };

    updateCardSize();

    const resizeObserver = new ResizeObserver(() => {
      updateCardSize();
    });

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
   * Responsive breakpoint.
   */
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();

      setVisibleCards((prev) => {
        if (prev !== newVisibleCards) {
          return newVisibleCards;
        }

        return prev;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Clone cards for infinite carousel.
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
   * Reset position when responsive breakpoint changes.
   */
  useEffect(() => {
    setCurrentIndex(shouldCarousel ? visibleCards : 0);
  }, [visibleCards, totalCars, shouldCarousel]);

  /*
   * Next.
   */
  const handleNext = () => {
    if (!shouldCarousel) {
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  /*
   * Previous.
   */
  const handlePrevious = () => {
    if (!shouldCarousel) {
      return;
    }

    setCurrentIndex((prev) => prev - 1);
  };

  /*
   * Infinite carousel reset.
   *
   * No animation is used here.
   */
  useEffect(() => {
    if (!shouldCarousel) {
      return;
    }

    if (currentIndex >= totalCars + visibleCards) {
      setCurrentIndex(visibleCards);
    }

    if (currentIndex <= 0) {
      setCurrentIndex(totalCars);
    }
  }, [
    currentIndex,
    shouldCarousel,
    totalCars,
    visibleCards,
  ]);

  /*
   * Swipe support.
   */
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  if (totalCars === 0) {
    return null;
  }

  const isPersian = lang === "dr";

  return (
    <section
      dir={isPersian ? "rtl" : "ltr"}
      className="mx-auto mb-18  mt-16 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24"
    >
      {/* ================= HEADER ================= */}

      <div className="mb-4 flex w-full items-center justify-between">
        {/* Title */}

        <h2 className="text-lg md:text-[28px] font-bold text-black">
          {isPersian ? "موتر های مرتبط" : "Related Cars"}
        </h2>

        {/* Buttons */}

        <div className="flex items-center gap-2">
          {/* Previous */}

          <button
            type="button"
            onClick={handlePrevious}
            disabled={!shouldCarousel}
            aria-label={
              isPersian
                ? "موترهای قبلی"
                : "Previous cars"
            }
            className="flex transition-opacity disabled:cursor-not-allowed disabled:opacity-50 lex h-8 md:h-10 w-8 md:w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
          >
            <img
              src="/RentalCar/images/icons/left_arrow_icon.png"
              alt=""
              className="h-auto w-[15px]"
            />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            disabled={!shouldCarousel}
            aria-label={
              isPersian
                ? "موترهای بعدی"
                : "Next cars"
            }
            className="flex transition-opacity disabled:cursor-not-allowed disabled:opacity-50 lex h-8 md:h-10 w-8 md:w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow"
          >
            <img
              src="/RentalCar/images/icons/right_arrow_icon.png"
              alt=""
              className="h-auto w-[15px]"
            />
          </button>
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}

      <div
        ref={containerRef}
        className="w-full overflow-hidden "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          dir="ltr"
          className="flex gap-5"
          style={{
            transform: `translate3d(-${
              currentIndex * cardStep
            }px, 0, 0)`,
          }}
        >
          {carouselCars.map((car, index) => {
            const carName = isPersian
              ? car.name_dr
              : car.name_en;

            const tags = isPersian
              ? car.tags_dr
              : car.tags_en;

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
                className=" shrink-0 overflow-hidden rounded-[14px] border border-[#D9D9D9] bg-white"
                style={{
                  width:
                    cardStep > 0
                      ? `${cardStep - GAP}px`
                      : `calc((100% - ${
                          GAP * (visibleCards - 1)
                        }px) / ${visibleCards})`,
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
                  {/* Name */}

                  <h3 className="mt-3 md:mt-5 text-start text-lg md:text-2xl font-semibold">
                    {carName}
                  </h3>

                  {/* Tags */}

                  <div className="mt-3 md:mt-5 flex min-h-[22px] flex-wrap justify-start gap-1">
                    {tags?.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-brand-yellow px-2 items-center text-sm md:text-base font-semibold leading-none text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-3 md:mt-5 overflow-hidden font-semibold text-base leading-[1.9] ${
                      isPersian
                        ? "text-right"
                        : "text-left"
                    } text-[#333]`}
                  >
                    {description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-6 md:mt-8 flex items-center justify-between gap-2 pt-3">
                    {/* Details */}

                    <span className="shrink-0 rounded-full border border-brand-yellow px-3 py-[5px] text-sm md:text-base font-semibold leading-none text-black">
                      {car.passengerCapacity}{" "}
                      {passengerLabel}
                    </span>

                    {/* Passengers */}
                     <Link
                      to={`/cars/${car.id}`}
                      className="shrink-0 rounded-full bg-brand-yellow px-3 py-[6px] text-sm md:text-base font-semibold leading-none text-black"
                    >
                      {isPersian
                        ? "مشاهده جزئیات"
                        : "View Details"}
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