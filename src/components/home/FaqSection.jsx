import { useState } from "react";
import { useLangStore } from "../../store/useLangStore";

const FaqSection = () => {
  const { t, lang } = useLangStore();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  const isDari = lang === "dr";

  return (
    <section
      id="faq"
      dir={isDari ? "rtl" : "ltr"}
      className="w-full scroll-mt-8 bg-white px-4 py-10"
    >
      <div
        className="
          mx-auto
          box-border
          h-auto
          w-full
          max-w-[857px]
          md:h-[870px]
        "
      >
        {/* FAQ Title */}
        <div className="flex h-auto w-full items-start justify-center md:h-[56px]">
          <h2
            className="m-0 text-black"
            style={{
              fontFamily: "'Yekan', sans-serif",
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: 800,
              fontStyle: "normal",
              lineHeight: "100%",
              letterSpacing: "0",
              textAlign: "right",
            }}
          >
            {t.home.faq_title}
          </h2>
        </div>

        {/* FAQ Main Container */}
        <div
          className="
            mx-auto
            mt-[32px]
            box-border
            h-auto
            w-full
            max-w-[857px]
            rounded-[20px]
            bg-[#F8F8F8]
            px-3
            py-4
            md:h-[790px]
            md:px-[28px]
            md:py-[37px]
          "
        >
          {/* FAQ Questions Container */}
          <div
            className="
              mx-auto
              box-border
              w-full
              max-w-[745px]
            "
          >
            {t.home.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="w-full">
                  {/* Question Row */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className={`
                      flex
                      min-h-[66px]
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
                      md:h-[66px]
                    `}
                  >
                    {/* Question */}
                    <span
                      className={`
                        flex-1
                        min-w-0
                        ${lang === "dr" ? "text-right" : "text-left"}
                        text-black
                      `}
                      style={{
                        fontFamily: "'Yekan', sans-serif",
                        fontSize: "clamp(18px, 3vw, 22px)",
                        fontWeight: 600,
                        fontStyle: "normal",
                        lineHeight: "100%",
                        letterSpacing: "0",
                        textAlign: lang === "dr" ? "right" : "left",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <img
                      src={
                        isOpen
                          ? `${import.meta.env.BASE_URL}images/minus-icon.png`
                          : `${import.meta.env.BASE_URL}images/plus-icon.png`
                      }
                      alt={isOpen ? "Minus" : "Plus"}
                      className="
                        left-[7px]
                        h-[24px]
                        w-[24px]
                        object-contain
                        md:h-[30px]
                        md:w-[30px]
                      "
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                       ease-in-out
    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
    ${isOpen ? "border-0 border-b-2 border-solid border-[#F7D102]" : ""}
  `}
                  >
                    <div className="overflow-hidden">
                      <div className="flex min-h-[70px] items-center">
                        <p
                          className={`
                            w-full
                            pb-4
                            pt-3
                            ${lang === "dr" ? "text-right" : "text-left"}
                            
                            md:w-[638px]
                            font-sans
                          `}
                          style={{
                            
                            fontSize: "clamp(16px, 2.5vw, 20px)",
                            fontWeight: 400,
                            lineHeight: "32px",
                            textAlign: lang === "dr" ? "right" : "left",
                            color: "#000000",
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
