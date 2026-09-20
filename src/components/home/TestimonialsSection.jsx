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
    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6406 22.4104C15.6406 20.5771 15.1614 19.0375 14.2031 17.7917C13.5239 16.9333 12.6024 16.3694 11.4385 16.1C10.2926 15.8333 9.20931 15.8146 8.23014 16.0417C7.89681 14.0625 8.43848 11.9667 9.81348 9.74583C11.1913 7.52639 12.9676 5.85764 15.1426 4.73958L11.8489 0C10.1822 0.825 8.59889 1.87083 7.14056 3.13542C5.66139 4.4 4.34889 5.85417 3.18222 7.49792C2.01556 9.14167 1.14056 10.9979 0.578057 13.1021C0.0155573 15.2062 -0.140692 17.3521 0.128058 19.5604C0.478058 22.4771 1.41972 24.8104 2.95306 26.5396C4.485 28.291 6.39334 29.1667 8.67806 29.1667C10.6885 29.1667 12.3572 28.5625 13.6781 27.3375C14.985 26.1375 15.6378 24.4931 15.6364 22.4042L15.6406 22.4104ZM34.6489 22.4104C34.6489 20.5771 34.1697 19.0375 33.2114 17.7917C32.5308 16.9167 31.6093 16.3493 30.4468 16.0896C29.2801 15.8326 28.2107 15.8174 27.2385 16.0438C26.9051 14.0854 27.426 11.9812 28.8051 9.75208C30.1801 7.54375 31.9551 5.87708 34.1301 4.75208L30.8447 0C29.1767 0.825 27.6072 1.87014 26.1364 3.13542C24.6439 4.4189 23.3183 5.8845 22.1906 7.49792C21.0322 9.14375 20.1697 10.9979 19.6072 13.1021C19.0358 15.2046 18.8822 17.3988 19.1551 19.5604C19.501 22.4771 20.4385 24.8104 21.9676 26.5396C23.4954 28.2785 25.4003 29.1479 27.6822 29.1479C29.6961 29.1507 31.3642 28.5417 32.6864 27.3208C33.9933 26.1208 34.6475 24.4764 34.6489 22.3875V22.4104Z" fill="#F7D102"/>
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
      className="w-full bg-white px-4 py-16 mt-8"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col items-center">
          <h2 className="m-0 text-center text-[40px] font-black leading-[62px] text-black">
            {t.home.testimonials_title}
          </h2>

          <div className="mt-[14px] h-[4px] w-full max-w-[514px] bg-[#F7D102]" />

          <p className="m-0 mt-[25px] w-full max-w-[777px] text-center sm:text-[24px] md:text-[32px]  font-semibold leading-[50px] text-black">
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
                      <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6406 22.4104C15.6406 20.5771 15.1614 19.0375 14.2031 17.7917C13.5239 16.9333 12.6024 16.3694 11.4385 16.1C10.2926 15.8333 9.20931 15.8146 8.23014 16.0417C7.89681 14.0625 8.43848 11.9667 9.81348 9.74583C11.1913 7.52639 12.9676 5.85764 15.1426 4.73958L11.8489 0C10.1822 0.825 8.59889 1.87083 7.14056 3.13542C5.66139 4.4 4.34889 5.85417 3.18222 7.49792C2.01556 9.14167 1.14056 10.9979 0.578057 13.1021C0.0155573 15.2062 -0.140692 17.3521 0.128058 19.5604C0.478058 22.4771 1.41972 24.8104 2.95306 26.5396C4.485 28.291 6.39334 29.1667 8.67806 29.1667C10.6885 29.1667 12.3572 28.5625 13.6781 27.3375C14.985 26.1375 15.6378 24.4931 15.6364 22.4042L15.6406 22.4104ZM34.6489 22.4104C34.6489 20.5771 34.1697 19.0375 33.2114 17.7917C32.5308 16.9167 31.6093 16.3493 30.4468 16.0896C29.2801 15.8326 28.2107 15.8174 27.2385 16.0438C26.9051 14.0854 27.426 11.9812 28.8051 9.75208C30.1801 7.54375 31.9551 5.87708 34.1301 4.75208L30.8447 0C29.1767 0.825 27.6072 1.87014 26.1364 3.13542C24.6439 4.4189 23.3183 5.8845 22.1906 7.49792C21.0322 9.14375 20.1697 10.9979 19.6072 13.1021C19.0358 15.2046 18.8822 17.3988 19.1551 19.5604C19.501 22.4771 20.4385 24.8104 21.9676 26.5396C23.4954 28.2785 25.4003 29.1479 27.6822 29.1479C29.6961 29.1507 31.3642 28.5417 32.6864 27.3208C33.9933 26.1208 34.6475 24.4764 34.6489 22.3875V22.4104Z" fill="#F7D102"/>
                      </svg>
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
                          className="text-[21px] leading-[21px] text-[#F7D102]"
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
