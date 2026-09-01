import { useLangStore } from '../../../store/useLangStore';
import { getServiceIcon } from './iconMapper';

export const ServiceCard = ({ service }) => {
  const { lang } = useLangStore();

  if (!service) return null;

  const isDari = lang === 'dr';

  const title = isDari
    ? service.title_dr
    : service.title_en;

  const description = isDari
    ? service.desc_dr
    : service.desc_en;

  return (
    <article
      className="
        group
        flex
        h-[224px]
        w-full
        max-w-[285px]
        flex-col
        rounded-[20px]
        bg-gradient-to-br
        from-brand-yellow/[0.18]
        to-brand-yellow/[0.81]
        px-[21px]
        pt-[19px]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-[6px]
        hover:scale-[1.03]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-[60px]
          w-[60px]
          shrink-0
          items-center
          justify-center
          rounded-[20px]
          bg-white

          transition-all
          duration-300
          ease-out

          group-hover:scale-[1.08]
          group-hover:shadow-[0_6px_15px_rgba(0,0,0,0.12)]
        "
      >
        {getServiceIcon(service.icon)}
      </div>

      {/* Content */}
      <div
        className="
          mt-[11px]
          w-full
        "
      >
        {/* Title */}
        <h3
          dir={isDari ? 'rtl' : 'ltr'}
          className={`
            w-full
            min-h-[37px]
            font-extrabold
            text-[24px]
            leading-[100%]
            text-brand-black
            break-words
            ${isDari ? 'font-extrabold text-end' : 'font-bold text-start'}
          `}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            mt-[12px]
            w-full
            font-semibold
            text-[13px]
            leading-[26px]
            text-brand-black
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;