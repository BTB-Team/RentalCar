import { useLangStore } from "../../store/useLangStore";
import eyeIcon from "../../assets/images/hugeicons_vision.svg";
import targetIcon from "../../assets/images/stash_target.svg";

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
      icon: targetIcon,
    },
    {
      id: "vision",
      title: t.home.vision.title,
      description: t.home.vision.description,
      icon: eyeIcon,
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 md:py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {cards.map((card) => (
          <article
            key={card.id}
            className="
              relative
              overflow-hidden
              rounded-[16px]
              border
              bg-white
              shadow-[-8px_8px_rgba(247,209,2,1)]
              transition-all
              duration-300
              hover:-translate-y-1
              sm:rounded-[20px]
              sm:shadow-[-12px_12px_rgba(247,209,2,1)]
              md:shadow-[-15px_15px_rgba(247,209,2,1)]
            "
          >
            {/* Card content */}
            <div className="flex flex-col justify-end px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7">
              {/* Title + Icon */}
              <div className="mb-3 flex items-center gap-2 sm:gap-3">
                <img
                  src={card.icon}
                  alt=""
                  className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
                  loading="lazy"
                />

                <h2 className="font-sans text-lg leading-tight font-blackfont text-brand-black sm:text-xl md:text-2xl">
                  {card.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-start font-sans text-sm leading-7 font-regular text-brand-black/80 sm:text-base sm:leading-8 md:text-lg md:leading-[2]">
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
