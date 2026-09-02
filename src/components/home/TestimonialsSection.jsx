import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetch("/testimonials");

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
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            نظرات مشتریان
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-400" />

          <p className="mt-4 text-sm text-gray-600">
            تجربه مهمانان و مسافرانی که از خدمات ما استفاده کرده‌اند
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-44 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        )}

        {/* Testimonials */}
        {!loading && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id || index}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                {/* Customer information */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                        {testimonial.name?.charAt(0)}
                      </div>
                    )}

                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        {testimonial.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <span className="text-3xl text-yellow-400">“</span>
                </div>

                {/* Review */}
                <p className="min-h-[65px] text-xs leading-6 text-gray-600">
                  {testimonial.review || testimonial.comment}
                </p>

                {/* Stars */}
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>
                        {starIndex < (testimonial.rating || 5) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* If API has no data */}
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
