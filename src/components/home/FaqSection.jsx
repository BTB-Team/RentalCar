import { useState } from "react";
import { useLangStore } from "../../store/useLangStore";

const FaqSection = () => {
  const { t, lang } = useLangStore();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      dir={lang === "dr" ? "rtl" : "ltr"}
      className="w-full scroll-mt-8 bg-white px-4 py-10"
    >
      <div className="mx-auto w-full max-w-[857px]">
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
            {t.home.faq_title}
          </h2>
        </div>

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
          <div className="mx-auto w-full max-w-[745px]">
            {t.home.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className={`
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
                      ${lang === "dr" ? "text-right" : "text-left"}
                      outline-none
                    `}
                  >
                    {/* Question text */}
                    <span
                      className={`
                        flex-1
                        ${lang === "dr" ? "text-right" : "text-left"}
                        text-black
                      `}
                      style={{
                        fontFamily: "'Yekan Bakh VF', sans-serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: "34px",
                        textAlign: lang === "dr" ? "right" : "left",
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
                          className={`
                          w-[653px]
                            pb-4
                            pt-3
                            ${lang === "dr" ? "text-right" : "text-left"}
                            text-black
                          `}
                          style={{
                            fontFamily: "'Yekan Bakh VF', sans-serif",
                            fontSize: "20px",
                            fontWeight: 400,
                            lineHeight: "32px",
                            textAlign: lang === "dr" ? "right" : "left",
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
