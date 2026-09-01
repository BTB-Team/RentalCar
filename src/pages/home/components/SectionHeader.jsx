export const SectionHeader = ({ title, description }) => {
  return (
    <div
      className="
        mx-auto
        mt-[50px]
        flex
        h-[129px]
        w-full
        max-w-[821px]
        flex-col
        items-center
        text-center
      "
    >
      {/* Section Title */}
      <h2
        className="
          h-[62px]
          font-[900]
          text-[40px]
          leading-[100%]
          tracking-[0%]
          text-brand-black
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
            h-[37px]
            w-full
            font-[600]
            text-[24px]
            leading-[100%]
            tracking-[0%]
            text-center
            text-brand-black
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;