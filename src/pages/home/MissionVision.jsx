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
      <div className="mx-auto grid  max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {cards.map((card) => (
          <article
            key={card.id}
            className="
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
            <div className=" flex flex-col justify-end px-4 py-5 sm:px-5 sm:py-6 md:px-3 md:ml-[3rem]  md:py-3">
              {/* Title + Icon */}
              <div className="mb-3 flex items-center gap-2 sm:gap-3">
                <img
                  src={card.icon}
                  alt=""
                  className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                  loading="lazy"
                />

                <h2 className="font-sans text-xl leading-tight font-blackfont text-brand-black sm:text-2xl md:text-3xl">
                  {card.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-start  font-sans text-base leading-7 font-regular text-brand-black/80  sm:leading-8  md:leading-[2] ">
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
