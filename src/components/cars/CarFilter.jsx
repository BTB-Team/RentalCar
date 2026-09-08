import { useLangStore } from "../../store/useLangStore";


export const CarFilter = () => {

  const { t, activeFilter, setActiveFilter } = useLangStore();

  const filters = [
    {
      id: "all",
      label: t.cars.filters.all,
    },
    {
      id: "luxury",
      label: t.cars.filters.luxury,
    },
    {
      id: "4wd",
      label: t.cars.filters.fourWD,
    },
    {
      id: "armored",
      label: t.cars.filters.armored,
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={`min-w-20 rounded-2xl  px-5 sm:px-10 py-2 sm:py-3 text-sm font-bold transition ${
              isActive
                ? "bg-brand-yellow text-brand-black"
                : "bg-white text-brand-black hover:bg-brand-yellow/70"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};
