import { useState } from "react";

const faqData = [
  {
    question: "آیا تنها خدمات کرایه موتر ارائه می‌کنید؟",
    answer:
      "خیر. در کنار کرایه موتر، خدمات امنیتی، راننده، ریزرف هوتل، راهنمای سفر، انتقال از میدان هوایی، ترجمان، پشتیبانی صحی و ثبت حرفه‌ای سفر نیز ارائه می‌شود.",
  },
  {
    question: "آیا موتر زرهی دارید؟",
    answer:
      "بله، برای سفرها و مشتریانی که به سطح بالاتر امنیت نیاز دارند، موترهای زرهی در دسترس است.",
  },
  {
    question: "آیا موترها قبل از سفر بررسی می‌شوند؟",
    answer:
      "بله. تمام وسایط توسط تیم تخنیکی متخصص خود شرکت بررسی، چک‌آپ و آماده می‌شوند.",
  },
  {
    question: "آیا برای گردشگران خارجی راهنمای سفر دارید؟",
    answer:
      "بله، راهنمایان محلی و چندزبانه بر اساس مقصد و نیاز مشتری فراهم می‌شوند.",
  },
  {
    question: "آیا خدمات استقبال از میدان هوایی دارید؟",
    answer:
      "بله، تیم ما مسافر را از میدان هوایی استقبال کرده و تا هوتل یا مقصد مورد نظر انتقال می‌دهد.",
  },
  {
    question: "آیا می‌توانم هوتل را نیز از طریق شما ریزرف کنم؟",
    answer:
      "بله، خدمات ریزرف هوتل‌های پنج‌ستاره در کابل و شهرهای مهم افغانستان فراهم است.",
  },
  {
    question: "آیا خدمات امنیتی نیز ارائه می‌شود؟",
    answer:
      "بله، راننده، محافظ، گارد، اسکورت امنیتی و ارزیابی مسیر بر اساس نیاز سفر قابل تنظیم است.",
  },
  {
    question: "آیا در جریان سفر خدمات صحی وجود دارد؟",
    answer:
      "بله، بر اساس برنامه سفر، تیم صحی برای پشتیبانی و کمک‌های اولیه همراه مسافر خواهد بود.",
  },
  {
    question: "آیا امکان ثبت درخواست سفر وجود دارد؟",
    answer:
      "بله، خدمات عکاسی، فیلم‌برداری، تصویربرداری هوایی و ایدیت حرفه‌ای محتوا ارائه می‌شود",
  },
];

const FaqSection = () => {
  // First question is open just like the Figma design
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section dir="rtl" className="w-full bg-white px-4 py-10">
      {/* Main FAQ container
          Figma: 857px wide / 798px total height
      */}
      <div className="mx-auto w-full max-w-[857px]">
        {/* =========================
            TITLE
        ========================== */}
        <div className="h-[56px] text-center">
          <h2
            className="m-0 text-black"
            style={{
              fontFamily: "'Yekan Bakh VF', sans-serif",
              fontSize: "36px",
              fontWeight: 800,
              lineHeight: "56px",
              textAlign: "center",
            }}
          >
            سوالات متداول
          </h2>
        </div>

        {/* =========================
            FAQ BOX
            Figma: 857 × 710
        ========================== */}
        <div
          className="
            mt-[32px]
            min-h-[710px]
            w-full
            rounded-[20px]
            bg-[#F8F8F8]
            px-[28px]
            py-[37px]
            sm:px-[56px]
          "
        >
          {/* =========================
              QUESTIONS CONTAINER
              Figma: 745px wide
          ========================== */}
          <div className="mx-auto w-full max-w-[745px]">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  {/* =========================
                      QUESTION ROW
                      Figma: 745 × 66
                  ========================== */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      h-[66px]
                      w-full
                      flex-row
                      items-center
                      justify-between
                      border-0
                      border-b-2
                      border-solid
                      border-[#F7D102]
                      bg-transparent
                      p-0
                      text-right
                      outline-none
                    "
                  >
                    {/* Question text */}
                    <span
                      className="
                        flex-1
                        text-right
                        text-black
                      "
                      style={{
                        fontFamily: "'Yekan Bakh VF', sans-serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: "34px",
                        textAlign: "right",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus icon */}
                    <span
                      className="
                        mr-4
                        flex
                        h-[30px]
                        w-[30px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F7D102]
                        text-black
                      "
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "30px",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* =========================
                      ANSWER
                      Animated with pure Tailwind
                  ========================== */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="flex min-h-[70px] items-center">
                        <p
                          className="
                          w-[653px]
                            pb-4
                            pt-3
                            text-right
                            text-black
                          "
                          style={{
                            fontFamily: "'Yekan Bakh VF', sans-serif",
                            fontSize: "20px",
                            fontWeight: 400,
                            lineHeight: "32px",
                            textAlign: "right",
                            opacity: 0.64,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
