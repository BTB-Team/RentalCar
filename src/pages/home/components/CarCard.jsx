import { Link } from 'react-router-dom';

import { useLangStore } from '../../../store/useLangStore';

export const CarCard = ({ car }) => {
  const { lang, t } = useLangStore();

  if (!car) return null;

  const isDari = lang === 'dr';

  // =========================
  // Data from Database
  // ========================= 
  const carName = isDari ? car.name_dr : car.name_en;
  const carDescription = isDari
    ? car.shortDesc_dr
    : car.shortDesc_en;
    

  const passengerLabel = isDari
    ? car.passengerLabel_dr
    : car.passengerLabel_en;

  const detailLabel =
    t?.cars?.view_details ??
    (isDari ? 'مشاهده جزئیات' : 'View Details');

  const imageSrc = `${import.meta.env.BASE_URL}${car.mainImage.replace(/^\/+/, '')}`;

  return (
    <article
      className="
        group
        w-full
        max-w-[380px]
        h-[455px]
        overflow-hidden
        rounded-[20px]
        border
        border-black/[0.10]
        bg-white
        transition-all
        duration-300
        ease-out
        hover:-translate-y-[6px]
        hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]
      "
    >
     {
      // =========================
      // Car Image
      // =========================
     }

      <div
        className="
          relative
          h-[200px]
          w-full
          overflow-hidden
          rounded-t-[20px]
        "
      >
        <img
          src={imageSrc}
          alt={carName}
          loading="lazy"
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.05]
        "
      />
      </div>

      {/* =========================
          Car Information
      ========================== */}

      <div
        className="
          ms-[13px]
          me-[13px]
          mt-0
          h-[222px]
          rounded-[20px]
          ps-[2px]
          pe-[2px]
          pt-[20px]
          pb-[2px]
        "
      >
        {/* Car Name */}

        <h2
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            h-[40px]
            w-[306px]
            truncate
            whitespace-nowrap
            overflow-hidden
            font-semibold
            text-[24px]
            leading-[100%]
            text-brand-black
          "
        >
          {carName}
        </h2>

       {/* =========================
    Tags
========================== */}

<div
  className="
    mt-[20px]
    flex
    min-w-0
    flex-wrap
    items-center
    justify-start
    gap-[7px]
  "
>
  {(isDari ? car.tags_dr : car.tags_en)?.map((tag, index) => (
    <span
      key={index}
      dir={isDari ? 'rtl' : 'ltr'}
      className="
        inline-flex
        h-[26px]
        max-w-full
        shrink-0
        items-center
        justify-center
        whitespace-nowrap
        rounded-[20px]
        bg-brand-yellow
        px-[9px]
        font-[600]
        text-[16px]
        leading-[100%]
        tracking-[0%]
        text-brand-black
      "
    >
      {tag}
    </span>
  ))}
</div>
        {/* =========================
            Description
        ========================== */}

        <p
          dir={isDari ? 'rtl' : 'ltr'}
          className="
          mt-[20px]
          h-[57px]
          w-full
          overflow-hidden
          text-ellipsis
          font-semibold
          text-[16px]
          leading-[28.5px]
          tracking-[0%]
          text-brand-black
          line-clamp-2
          "
        >
          {carDescription}
        </p>

        {/* =========================
            Bottom Actions
        ========================== */}

        <div
          className="
            mt-[26px]
            flex
            items-center
            justify-between
            gap-[12px]
          "
        >
          {/* Passenger Capacity */}

          <span
            className="
              flex
              w-fit
              h-[36px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-[20px]
              border
              border-brand-yellow
              px-[14px]
              font-[600]
              text-[16px]
              leading-[100%]
              tracking-[0%]
              text-center
              text-brand-black
            "
          >
            {car.passengerCapacity} {passengerLabel}
          </span>

          {/* View Details */}

          <Link
            to={`/cars/${car.id}`}
            className="
              flex
              h-[36px]
              w-[135px]
              shrink-0
              items-center
              justify-center
              rounded-[20px]
              bg-brand-yellow
              px-[10px]
              font-[600]
              text-[16px]
              leading-[100%]
              tracking-[0%]
              text-brand-black
              transition-all
              duration-300
              ease-out
              hover:scale-[1.04]
              hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
            "
          >
            {detailLabel}
          </Link>
        </div>
      </div>
    </article>
  );
};
