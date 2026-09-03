export const SectionHeader = ({ title, description }) => {
  return (
    <div
      className="
        mx-auto
        flex
        h-[129px]
        w-full
        max-w-[821px]
        min-w-0
        shrink-0
        flex-col
        items-center
        text-center
      "
    >
      {/* Section Title */}
      <h2
        className="
          h-auto
    w-full
    max-w-[560px]
    min-w-0
    shrink-0
    font-[900]
    text-[40px]
    leading-[100%]
    tracking-[0%]
    text-brand-black
    lg:h-[62px]
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
          shrink-0
          bg-brand-yellow
        "
      />

      {/* Section Description */}
      {description && (
        <p
          className="
            mt-[13px]
    h-auto
    w-full
    md:max-w-[821px]
    sm:max-w-[600px]
    min-w-
    shrink-0
    whitespace-normal
    break-words
    text-center
    font-[600]
    text-[24px]
    leading-[100%]
    tracking-[0%]
    text-brand-black
    lg:h-[37px]
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;