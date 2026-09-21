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
       className="group w-[calc(100%-32px)] max-w-[380px] sm:w-full h-[455px] overflow-hidden rounded-[20px] border border-black/[0.10] bg-white transition-all duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)] flex flex-col justify-between pb-[16px]"
    >
      <div>
        {/* Car Image */}
        <div
          className="relative h-[170px] sm:h-[200px] w-full overflow-hidden rounded-t-[20px] group"
        >
          <img
            src={imageSrc}
            alt={carName}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />  
        </div>

        {/* Car Information */}
        <div className="relative px-[13px] pt-[16px]">
          {/* نام موتر */}
          <h2
            dir="ltr"
            className="w-full truncate overflow-hidden whitespace-nowrap text-right font-semibold text-[20px] sm:text-[24px] leading-[100%] text-brand-black"
          >
            {carName}
          </h2>

          {/* لیبل‌ها */}
          {/* 💡 PRODUCTION FIX: Changed sm:flex-nowrap to flex-wrap globally so that tags gracefully stack underneath each other between 1024px and 1070px */}
          <div className="mt-[14px] flex flex-wrap items-center justify-start gap-[5px] sm:mt-[20px] sm:gap-[7px]">
            {(isDari ? car.tags_dr : car.tags_en)?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex h-[26px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] bg-brand-yellow px-[12px] py-0 font-[600] text-[16px] leading-[26px] tracking-[0%] text-brand-black"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* توضیحات */}
          <p
            dir={isDari ? 'rtl' : 'ltr'}
            className="mt-[14px] h-[52px] min-h-[52px] w-full overflow-hidden text-ellipsis font-semibold text-[14px] leading-[26px] tracking-[0%] text-brand-black line-clamp-2 sm:mt-[18px] sm:h-[57px] sm:min-h-[57px] sm:text-[16px] sm:leading-[28.5px]"
          >
            {carDescription}
          </p>
        </div>
      </div>
      
      {/* دکمه‌ها؛ همیشه ثابت در پایین */}
      {/* 💡 PRODUCTION FIX: Removed rigid top-[230px] plotting and handled alignment with padding constraints so buttons remain perfectly visible regardless of tag counts */}
      <div className="px-[13px] flex h-[36px] items-center justify-between gap-[6px] sm:gap-[8px]">   
        <span className={`flex h-[36px] min-w-[64px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] border border-brand-yellow ${isDari ? 'px-[4px]' : 'px-[8px]'} font-[600] text-[16px] py-0 leading-[36px] text-center text-brand-black`}>
          {car.passengerCapacity} {isDari ? 'نفر' : 'People'}
        </span>
      
        <Link
          to={`/cars/${car.id}`}
          className="flex h-[36px] w-[125px] shrink-0 items-center justify-center rounded-[20px] bg-brand-yellow px-[8px] py-0 font-[600] text-[14px] leading-[36px] tracking-[0%] text-brand-black transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)] sm:w-[135px] sm:px-[10px] sm:text-[16px]"
        >
          {detailLabel}
        </Link>
      </div>
    </article>

  );
};
