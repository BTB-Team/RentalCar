import { useEffect, useState } from "react";
import { useLangStore } from "../../store/useLangStore";

const TestimonialsSection = () => {
  const { t, lang } = useLangStore();
  const isDari = lang === "dr";
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <section
      dir={isDari ? "rtl" : "ltr"}
      className="w-full bg-white px-4 py-10"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        <div className="flex flex-col items-center">
          <h2 className="m-0 text-center text-[40px] font-black leading-[62px] text-black">
            {t.home.testimonials_title}
          </h2>
          <div
            className="
              mt-[14px]
              h-[4px]
              w-full
              max-w-[514px]
              bg-[#F7D102]
            "
          />
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
          <div
            className="
              mt-[22px]
              grid
              grid-cols-1
              gap-5
              px-5
              md:grid-cols-3
            "
          >
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <article
                key={testimonial.id || index}
                className="
                  flex
                  h-[237px]
                  w-full
                  flex-col
                  rounded-[20px]
                  border
                  border-[#D9D9D9]
                  bg-white
                  px-[19px]
                  py-[28px]
                "
              >
                <div className="flex w-full items-start gap-[12px]">
                  <span
                    className={`
                      flex
                      h-[29px]
                      w-[35px]
                      items-center
                      justify-center
                      text-[34px]
                      font-bold
                      leading-none
                      text-[#F7D102]
                      ${isDari ? "order-1" : "order-2"}
                    `}
                  >
                    “
                  </span>

                  <div
                    className={`
                      flex
                      min-w-0
                      flex-1
                      items-center
                      gap-[12px]
                      ${isDari ? "text-right" : "text-left"}
                    `}
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
                        className={`
                          m-0
                          text-[16px]
                          font-semibold
                          leading-[25px]
                          text-black
                          ${isDari ? "text-right" : "text-left"}
                        `}
                      >
                        {(isDari ? testimonial.name_dr : testimonial.name_en) ||
                          testimonial.name}
                      </h3>

                      <p
                        className={`
                          m-0
                          text-[13px]
                          font-light
                          leading-[20px]
                          text-black
                          ${isDari ? "text-right" : "text-left"}
                        `}
                      >
                        {(isDari ? testimonial.role_dr : testimonial.role_en) ||
                          testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className={`
                    mt-[16px]
                    m-0
                    flex-1
                    overflow-hidden
                    text-[13px]
                    font-normal
                    leading-[20px]
                    text-black
                    ${isDari ? "text-right" : "text-left"}
                  `}
                >
                  {(isDari ? testimonial.comment_dr : testimonial.comment_en) ||
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

            {/* No testimonials */}
            {testimonials.length === 0 && (
              <div className="col-span-full py-8 text-center text-sm text-gray-500">
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
