const ServiceCtaSkeleton = () => {
  return (
    <section
      className="
        mx-auto
        w-full
        h-[250px]
        sm:h-[280px]
        md:h-[339px]
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-gray-100
        mt-20 
        px-6
        py-8
        text-center
        animate-pulse
      "
    >
      {/* title */}
      <div className="h-8 w-72 animate-pulse rounded-md bg-gray-300 md:h-9 md:w-96" />

      {/* description */}
      <div className="mt-7 h-5 w-80 animate-pulse rounded-md bg-gray-300 md:w-[430px]" />

      {/* button */}
      <div className="mt-6 h-12 w-40 animate-pulse rounded-2xl bg-gray-300" />
    </section>
  );
};

export default ServiceCtaSkeleton;
