import { Link } from 'react-router-dom';
import { useLangStore } from '../../../store/useLangStore';

export const CarCard = ({ car }) => {
  const { lang, t } = useLangStore();

  if (!car) return null;

  const isDari = lang === 'dr';

  const carName = isDari ? car.name_dr : car.name_en;
  const carDescription = isDari
    ? car.shortDesc_dr
    : car.shortDesc_en;

  const categoryLabel = car.category;

  const securityTag = car.isArmored
    ? isDari
      ? 'زرهی'
      : 'Armored'
    : null;

  const detailLabel =
    t?.cars?.view_details ??
    (isDari ? 'مشاهده جزئیات' : 'View Details');
  const imageSrc = `${import.meta.env.BASE_URL}${car.mainImage.replace(/^\/+/, '')}`;

  return (
    <article
      className="
        w-full
        max-w-[380px]
        h-[455px]
        overflow-hidden
        rounded-[20px]
        border
        border-black/[0.10]
        bg-white
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
          className="
            min-h-[37px]
            text-start
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
              font-regular
              text-[16px]
              leading-none
              text-brand-black
            "
          >
            {categoryLabel}
            {car.isArmored && (
              <>
                <span className="mx-[4px]">|</span>
                <span>
                  {isDari ? 'امنیت بالا' : 'High Security'}
                </span>
              </>
            )}
          </span>
        </div>

        {/* =========================
            Description
        ========================== */}
        <p
          className="
            mt-[18px]
            min-h-[57px]
            text-start
            font-regular
            text-[16px]
            leading-[100%]
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
      inline-flex
      h-[36px]
      min-w-[64px]
      shrink-0
      items-center
      justify-center
      whitespace-nowrap
      rounded-[20px]
      border
      border-brand-yellow
      px-[12px]
      font-regular
      text-[16px]
      leading-none
      text-brand-black
    "
  >
    {car.passengerCapacity} {isDari ? 'نفر' : 'People'}
  </span>

  {/* View Details */}
  <Link
    to={`/cars/${car.id}`}
    className="
      flex
      h-[36px]
      min-w-[135px]
      shrink-0
      items-center
      justify-center
      whitespace-nowrap
      rounded-[20px]
      bg-brand-yellow
      px-[16px]
      font-extrabold
      text-[16px]
      leading-none
      text-brand-black
      transition-opacity
      hover:opacity-80
    "
  >
    {detailLabel}
  </Link>
</div>
      </div>
    </article>
  );
};