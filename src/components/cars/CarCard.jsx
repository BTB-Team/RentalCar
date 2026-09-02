import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";

export const CarCard = ({ car }) => {
  const { lang, t } = useLangStore();
  console.log(car);
  const name = lang === "dr" ? car.name_dr : car.name_en;

  const description = lang === "dr" ? car.shortDesc_dr : car.shortDesc_en;

  const tags = lang === "dr" ? car.tags_dr : car.tags_en;
  console.log(tags)

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Car Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.mainImage}
          alt={name}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h2 className="text-center text-lg font-extrabold text-brand-black">
          {name}
        </h2>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {tags?.slice(0, 2).map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-extrabold text-brand-black"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 min-h-[72px] text-center text-sm leading-6 font-regular text-gray-700">
          {description}
        </p>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
            {car.passengerCapacity} {t.cars.passengers}
          </span>
          <Link
            to={`/cars/${car.id}`}
            className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold text-brand-black transition hover:brightness-95"
          >
            {t.cars.viewDetails}
          </Link>
        </div>
      </div>
    </article>
  );
};
