import { Link } from 'react-router-dom';
import { useLangStore } from '../../../store/useLangStore';

export const CarCard = ({ car }) => {
  const { lang, t } = useLangStore();

  if (!car) return null;

  const isDari = lang === 'dr';

  const carName = car.name_en;
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
    group
  "
>
        <img
          src={imageSrc}
          alt={carName}
          loading="lazy"
          className="
          h-full
          w-full
          object-fit: contain
          transition-transform
          duration-500 ease-out 
          group-hover:scale-[1.05]
          "
        />  
      </div>

      {/* =========================
          Car Information
      ========================== */}
      <div className="relative ms-[13px] me-[13px] h-[222px] rounded-[20px] ps-[13px] pe-[13px] pt-[16px]">
  {/* نام موتر */}
  <h2
    dir="ltr"
    className="w-full truncate overflow-hidden whitespace-nowrap font-extrabold text-[24px] leading-[100%] text-brand-black"
  >
    {carName}
  </h2>

  {/* لیبل‌ها */}
  <div className="mt-[20px] flex flex-wrap items-center justify-start gap-[7px]">
    {(isDari ? car.tags_dr : car.tags_en)?.map((tag, index) => (
      <span
        key={index}
        className="inline-flex min-h-[26px] items-center justify-center rounded-[20px] bg-brand-yellow px-[12px] font-[600] text-[16px] leading-[100%] tracking-[0%] text-brand-black"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* توضیحات */}
  <p
    dir={isDari ? 'rtl' : 'ltr'}
    className="mt-[18px] h-[57px] min-h-[57px] w-full overflow-hidden text-ellipsis font-semibold text-[16px] leading-[28.5px] tracking-[0%] text-brand-black line-clamp-2"
  >
    {carDescription}
  </p>

  {/* دکمه‌ها؛ همیشه ثابت در پایین */}
  <div className="absolute top-[200px] start-[0px] end-[0px] flex h-[36px] items-center justify-between gap-[8px]">
    <span className="flex h-[36px] min-w-[64px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] border border-brand-yellow px-[4px] font-[600] text-[16px] leading-[100%] text-center text-brand-black">
      {car.passengerCapacity} {isDari ? 'نفر' : 'People'}
    </span>

    <Link
      to={`/cars/${car.id}`}
      className="flex h-[36px] w-[135px] shrink-0 items-center justify-center rounded-[20px] bg-brand-yellow px-[10px] font-[600] text-[16px] leading-[100%] tracking-[0%] text-brand-black transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]"
    >
      {detailLabel}
    </Link>
  </div>
</div>
    </article>
  );
};