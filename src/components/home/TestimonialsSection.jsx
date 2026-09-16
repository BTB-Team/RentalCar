import { useEffect, useRef, useState } from "react";

import { useLangStore } from "../../store/useLangStore";

const TestimonialsSection = () => {
  const { t, lang } = useLangStore();
  const isDari = lang === "dr";
  const trackRef = useRef(null);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPosition = useRef(0);
  const currentPosition = useRef(0);

  const avatarFallback = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
      <rect width="45" height="45" rx="22.5" fill="#E5E7EB"/>
      <circle cx="22.5" cy="17" r="8" fill="#D1D5DB"/>
      <path d="M9 35c3-6 9-9 13.5-9S33 29 36 35" fill="#D1D5DB"/>
    </svg>
  `)}`;

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const baseUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;
        const response = await fetch(new URL("db.json", baseUrl).toString());

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        const list = Array.isArray(data)
          ? data
          : data.testimonials || data.data || [];

        setTestimonials(Array.isArray(list) ? list : []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  useEffect(() => {
    if (!trackRef.current || testimonials.length <= 3) return;

    const track = trackRef.current;
    let position = 0;
    let animationFrame;

    currentPosition.current = position;

    const move = () => {
      if (!isDragging.current) {
        position += 2;

        const firstCard = track.children[0];

        if (firstCard) {
          const cardWidth = firstCard.offsetWidth;
          const gap = 20;
          const moveDistance = cardWidth + gap;

          if (position >= moveDistance) {
            position = 0;
            track.appendChild(firstCard);
          }
        }

        currentPosition.current = position;
      } else {
        position = currentPosition.current;
      }

      track.style.transform = `translateX(${isDari ? position : -position}px)`;

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationFrame);
  }, [testimonials, isDari]);

  const handlePointerDown = (event) => {
    if (!trackRef.current || testimonials.length <= 3) return;

    isDragging.current = true;
    startX.current = event.clientX;
    startPosition.current = currentPosition.current;

    trackRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current || !trackRef.current) return;

    const difference = event.clientX - startX.current;

    let newPosition;

    if (isDari) {
      newPosition = startPosition.current + difference;
    } else {
      newPosition = startPosition.current - difference;
    }

    if (newPosition < 0) {
      newPosition = 0;
    }

    currentPosition.current = newPosition;

    trackRef.current.style.transform = `translateX(${
      isDari ? newPosition : -newPosition
    }px)`;
  };

  const handlePointerUp = () => {
    if (!isDragging.current || !trackRef.current) return;

    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
  };

  const carouselTestimonials =
    testimonials.length > 3 ? [...testimonials, ...testimonials] : testimonials;

  return (
    <section
      dir={isDari ? "rtl" : "ltr"}
      className="w-full bg-white px-4 py-10"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col items-center">
          <h2 className="m-0 text-center text-[40px] font-black leading-[62px] text-black">
            {t.home.testimonials_title}
          </h2>

          <div className="mt-[14px] h-[4px] w-full max-w-[514px] bg-[#F7D102]" />

          <p className="m-0 mt-[25px] w-full max-w-[777px] text-center text-[32px] font-semibold leading-[50px] text-black">
            {t.home.testimonials_description}
          </p>
        </div>

        {loading && (
          <div className="mt-[22px] grid grid-cols-1 gap-5 px-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[237px] animate-pulse rounded-[20px] bg-gray-100"
              />
            ))}
          </div>
        )}

        {!loading && (
          <div className="mt-[22px] overflow-hidden px-5">
            {carouselTestimonials.length > 0 ? (
              <div
                ref={trackRef}
                className="flex w-max cursor-grab gap-5 select-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
                style={{ touchAction: "pan-y" }}
              >
                {carouselTestimonials.map((testimonial, index) => (
                  <article
                    key={`${testimonial.id || index}-${index}`}
                    className="testimonial-card flex min-h-[237px] w-[calc((1200px-40px)/3)] min-w-[280px] flex-shrink-0 flex-col rounded-[20px] border border-[#D9D9D9] bg-white px-[19px] py-[28px] shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F7D102] hover:shadow-[0_18px_35px_rgba(247,209,2,0.15)]"
                  >
                    <div className="flex w-full items-start gap-[12px]">
                      <span
                        className={`flex h-[29px] w-[35px] items-center justify-center text-[34px] font-bold leading-none text-[#F7D102] ${
                          isDari ? "order-1" : "order-2"
                        }`}
                      >
                        “
                      </span>

                      <div
                        className={`flex min-w-0 flex-1 items-center gap-[12px] ${
                          isDari ? "text-right" : "text-left"
                        }`}
                      >
                        {testimonial.avatar ? (
                          <img
                            src={testimonial.avatar}
                            onError={(event) => {
                              event.currentTarget.onerror = null;
                              event.currentTarget.src = avatarFallback;
                            }}
                            alt={
                              (isDari
                                ? testimonial.name_dr
                                : testimonial.name_en) ||
                              testimonial.name ||
                              "Customer"
                            }
                            className="h-[45px] w-[45px] rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
                            {(
                              (isDari
                                ? testimonial.name_dr
                                : testimonial.name_en) ||
                              testimonial.name ||
                              "?"
                            ).charAt(0)}
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <h3
                            className={`m-0 text-[16px] font-semibold leading-[25px] text-black ${
                              isDari ? "text-right" : "text-left"
                            }`}
                          >
                            {(isDari
                              ? testimonial.name_dr
                              : testimonial.name_en) || testimonial.name}
                          </h3>

                          <p
                            className={`m-0 text-[13px] font-light leading-[20px] text-black ${
                              isDari ? "text-right" : "text-left"
                            }`}
                          >
                            {(isDari
                              ? testimonial.role_dr
                              : testimonial.role_en) || testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`m-0 mt-[16px] flex-1 break-words text-[13px] font-normal leading-[20px] text-black ${
                        isDari ? "text-right" : "text-left"
                      }`}
                    >
                      {(isDari
                        ? testimonial.comment_dr
                        : testimonial.comment_en) ||
                        testimonial.review ||
                        testimonial.comment}
                    </p>

                    <div className="mt-[18px] flex h-[21px] items-center gap-[3px] [direction:ltr]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-[20px] leading-[21px] text-[#F7D102]"
                        >
                          {starIndex <
                          (testimonial.stars || testimonial.rating || 5)
                            ? "★"
                            : "☆"}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="w-full py-8 text-center text-sm text-gray-500">
                {t.home.no_testimonials}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
