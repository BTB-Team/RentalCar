import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:5000/testimonials");

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        setTestimonials(
          Array.isArray(data) ? data : data.testimonials || data.data || [],
        );
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section dir="rtl" className="w-full bg-white px-4 py-10">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        <div className="flex flex-col items-center">
          <h2 className="m-0 text-center text-[40px] font-black leading-[62px] text-black">
            نظرات مشتریان
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
            تجربه مهمانان و مسافرانی که از خدمات ما استفاده کرده‌اند
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
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <article
                key={testimonial.id || index}
                className="
                  h-[237px]
                  w-full
                  rounded-[20px]
                  border
                  border-[#D9D9D9]
                  bg-white
                  px-[19px]
                  py-[28px]
                "
              >
                <div className="relative h-[143px] w-full">
                  {/* Quote */}
                  <span
                    className="
                      absolute
                      left-0
                      top-[7px]
                      flex
                      h-[29px]
                      w-[35px]
                      items-center
                      justify-center
                      text-[34px]
                      font-bold
                      leading-none
                      text-[#F7D102]
                    "
                  >
                    “
                  </span>

                  {/* Avatar */}
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={
                        testimonial.name_dr || testimonial.name || "Customer"
                      }
                      className="
                        absolute
                        right-0
                        top-0
                        h-[45px]
                        w-[45px]
                        rounded-full
                        object-cover
                      "
                    />
                  ) : (
                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        flex
                        h-[45px]
                        w-[45px]
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-200
                        text-sm
                        font-bold
                        text-gray-600
                      "
                    >
                      {(testimonial.name_dr || testimonial.name || "?").charAt(
                        0,
                      )}
                    </div>
                  )}

                  {/* Name */}
                  <h3
                    className="
                      absolute
                      right-[71px]
                      top-[3px]
                      m-0
                      w-[111px]
                      text-right
                      text-black
                      text-[16px]
                      font-semibold
                      leading-[25px]
                    "
                  >
                    {testimonial.name_dr || testimonial.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="
                      absolute
                      right-[71px]
                      top-[27px]
                      m-0
                      w-auto
                      whitespace-nowrap
                      text-right
                      text-black
                      text-[13px]
                      font-light
                      leading-[20px]
                    "
                  >
                    {testimonial.role_dr || testimonial.role}
                  </p>

                  <p
                    className="
                      absolute
                      bottom-0
                      right-0
                      m-0
                      w-full
                      text-black
                      text-[13px]
                      font-normal
                      leading-[20px]
                      text-justify
                    "
                  >
                    {testimonial.comment_dr ||
                      testimonial.review ||
                      testimonial.comment}
                  </p>
                </div>

                <div className="mt-[30px] flex h-[21px] items-center gap-[3px] [direction:ltr]">
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
                هنوز نظری ثبت نشده است.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
