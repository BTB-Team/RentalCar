const CarHeroSkeleton = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gray-100
        px-4
        pt-52
        pb-16
        text-center
        animate-pulse
        rounded-b-[45%]
      "
    >
      {/* title skeleton */}
      <div className="mx-auto h-12 w-80 rounded-lg bg-gray-300 sm:w-[596px]" />

      {/* description skeleton */}
      <div className="mx-auto mt-6 h-5 w-72 rounded-md bg-gray-300 sm:w-[450px]" />

      <div className="mx-auto mt-4 h-5 w-64 rounded-md bg-gray-300 sm:w-96" />

      {/* filter buttons skeleton */}
      <div className="mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-4">
        <div className="h-11 w-28 rounded-2xl bg-gray-300" />
        <div className="h-11 w-28 rounded-2xl bg-gray-300" />
        <div className="h-11 w-28 rounded-2xl bg-gray-300" />
        <div className="h-11 w-28 rounded-2xl bg-gray-300" />
      </div>
    </section>
  );
};

export default CarHeroSkeleton;
