export const SectionHeader = ({ title, description }) => {
  return (
    <div
       className="
    mx-auto
    mt-[50px]
    flex
    h-[129px]
    w-full
    flex-col
    items-center
    text-center
  "
    >
      {/* Section Title */}
      <h2
         className="
    w-full
    max-w-[821px]
    px-[16px]
    text-center
    text-[28px]
    sm:text-[32px]
    lg:text-[40px]
    font-[900]
    leading-[130%]
    lg:leading-[100%]
    text-brand-black
    whitespace-normal
    break-words
    lg:whitespace-nowrap
  "
      >
        {title}
      </h2>

      {/* Yellow Divider */}
      <div
        className="
          mt-[13px]
          h-[4px]
          w-[514px]
          max-w-full
          shrink-0
          bg-brand-yellow
        "
      />

      {/* Section Description */}
      {description && (
  <p
    className="
    mt-[13px]
    w-full
    font-semibold
    text-[24px]
    leading-[100%]
    tracking-[0%]
    text-center
    text-brand-black
    whitespace-normal
    lg:whitespace-nowrap
  "
  >
    {description}
  </p>
  )}
    </div>
  );
};

export default SectionHeader;