import { useState } from "react";

const faqData = [
  {
    question: "آیا شما کرایه موتر ارائه می‌کنید؟",
    answer:
      "بله، خدمات کرایه موتر و سایر خدمات ترانسپورتی بر اساس نیاز شما قابل هماهنگی می‌باشد.",
  },
  {
    question: "آیا موتر برقی دارید؟",
    answer:
      "بله، بسته به موقعیت و نیاز شما، گزینه‌های مختلف خدمات ترانسپورتی قابل ارائه است.",
  },
  {
    question: "آیا برای گردشگران خارجی راهنمای سفر دارید؟",
    answer:
      "بله، خدمات راهنمایی سفر برای گردشگران و مسافران قابل هماهنگی می‌باشد.",
  },
  {
    question: "چه خدمات امنیتی را ارائه می‌دهید؟",
    answer:
      "خدمات امنیتی متناسب با نوع سفر، مقصد و نیاز مسافر قابل هماهنگی است.",
  },
  {
    question: "آیا می‌توانم سفر را از طریق شما رزرو کنم؟",
    answer:
      "بله، می‌توانید درخواست خود را ارسال کنید تا تیم ما جزئیات سفر شما را بررسی و هماهنگ کند.",
  },
  {
    question: "آیا خدمات امنیتی نیز ارائه می‌شود؟",
    answer: "بله، خدمات امنیتی یکی از خدمات قابل درخواست برای سفرها می‌باشد.",
  },
  {
    question: "آیا در جریان سفر خدمات صحی وجود دارد؟",
    answer:
      "بسته به نوع سفر و مقصد، خدمات و هماهنگی‌های مورد نیاز می‌تواند در نظر گرفته شود.",
  },
  {
    question: "آیا امکان ثبت درخواست سفر وجود دارد؟",
    answer:
      "بله، از طریق دکمه درخواست خدمات می‌توانید درخواست سفر خود را ارسال کنید.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-gray-900">سوالات متداول</h2>

          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-400" />
        </div>

        {/* FAQ container */}
        <div className="overflow-hidden rounded-xl bg-gray-50 px-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-yellow-400 last:border-b-0"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-right"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {faq.question}
                  </span>

                  {/* + / - */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-gray-900">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-xs leading-6 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
