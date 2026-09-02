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

  const categoryLabel = isDari
    ? car.category_dr ?? car.category
    : car.category_en ?? car.category;

  const securityTag = car.isArmored
    ? isDari
      ? car.armoredLabel_dr
      : car.armoredLabel_en
    : null;

  const securityLabel = car.isArmored
    ? isDari
      ? car.securityLabel_dr
      : car.securityLabel_en
    : null;

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
      {/* =========================
          Car Image
      ========================== */}

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
          ps-[13px]
          pe-[13px]
          py-[16px]
        "
      >
        {/* Car Name */}

        <h2
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            w-full
            truncate
            whitespace-nowrap
            overflow-hidden
            font-extrabold
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
            items-center
            justify-start
            gap-[7px]
            flex-wrap
          "
        >
          {/* Security / Armored Tag */}

          {securityTag && (
            <span
              className="
                inline-flex
                h-[26px]
                items-center
                justify-center
                rounded-[20px]
                bg-brand-yellow
                px-[9px]
                font-regular
                text-[16px]
                leading-none
                text-brand-black
              "
            >
              {securityTag}
            </span>
          )}

          {/* Category + Security */}

          <span
            className="
              inline-flex
              min-h-[26px]
              items-center
              justify-center
              rounded-[20px]
              bg-brand-yellow
              px-[12px]
              font-[600]
              text-[16px]
              leading-[100%]
              tracking-[0%]
              text-brand-black
            "
          >
            {categoryLabel}

            {securityLabel && (
              <>
                <span className="mx-[4px]">|</span>

                <span>
                  {securityLabel}
                </span>
              </>
            )}
          </span>
        </div>

        {/* =========================
            Description
        ========================== */}

        <p
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            mt-[18px]
            min-h-[57px]
            w-full
            font-semibold
            text-[16px]
            leading-[100%]
            tracking-[0%]
            text-brand-black
          "
        >
          {carDescription}
        </p>

        {/* =========================
            Bottom Actions
        ========================== */}

        <div
          className="
            mt-[20px]
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
              h-[36px]
              min-w-[64px]
              shrink-0
              items-center
              justify-center
              whitespace-nowrap
              rounded-[20px]
              border
              border-brand-yellow
              px-[4px]
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
