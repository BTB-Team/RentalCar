// import { useLangStore } from "../../store/useLangS

import { useLangStore } from "../../store/useLangStore";

/* =========================
   Vision / Eye Icon
========================= */
const VisionIcon = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 shrink-0 text-brand-yellow sm:h-9 sm:w-9"
      aria-hidden="true"
    >
      {/* Dotted ring */}
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="2.5 4.5"
      />

      {/* Eye outline */}
      <path
        d="M8 20C8 20 13 13.5 20 13.5C27 13.5 32 20 32 20C32 20 27 26.5 20 26.5C13 26.5 8 20 8 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Iris */}
      <circle
        cx="20"
        cy="20"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Pupil */}
      <circle cx="20" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
};

/* =========================
   Mission / Target-Search Icon
========================= */
const MissionIcon = () => {
  return (
    <svg
      viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 shrink-0 text-brand-yellow sm:h-9 sm:w-9"
      aria-hidden="true"
    >
      {/* Dotted ring */}
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="2.5 4.5"
      />

      {/* Magnifying glass circle */}
      <circle
        cx="17"
        cy="17"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* Inner dot */}
      <circle cx="18" cy="18" r="2" fill="currentColor" />

      {/* Handle */}
      <line
        x1="23.2"
        y1="23.2"
        x2="28"
        y2="28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* =========================
   Mission & Vision
========================= */
function MissionVision() {
  const { t } = useLangStore();

  const cards = [
    {
      id: "mission",
      title: t.home.mission.title,
      description: t.home.mission.description,
      icon: <MissionIcon />,
    },
    {
      id: "vision",
      title: t.home.vision.title,
      description: t.home.vision.description,
      icon: <VisionIcon />,
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 md:gap-8"
      >
        {cards.map((card) => (
          <article
            key={card.id}
            className="
              relative
              overflow-hidden
              rounded-[20px]
              border-b-[10px]
              border-l-[10px]
              border-brand-yellow
              bg-white
              shadow-[0_6px_20px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
            "
          >
            {/* Card content */}
            <div
              className="
                flex
                min-h-[170px]
                flex-col
                justify-end
                px-6
                py-7
                sm:min-h-[190px]
                sm:px-8
                sm:py-8
                lg:px-9
              "
            >
              {/* Title + Icon */}
              <div
                className="flex items-end justify-start gap-3 mb-3 font-bold "
              >
                

                {card.icon}
                <h2
                  className="text-xl leading-tight font-blackfont text-brand-black sm:text-2xl"
                >
                  {card.title}
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-7 text-start text-brand-black/80 sm:text-base sm:leading-8"
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MissionVision;