const TechnicalSpecsItem = ({spec}) => {
  return (
    <div
      key={spec.label}
      className="flex h-[43px] items-center justify-between rounded-[15px] border border-[#D9D9D9] px-3"
    >
      <div className="flex items-center gap-2">
        <img src={spec.icon} alt="home icon" className="size-5 md:size-7" />
        <span className="text-sm md:text-base font-semibold text-brand-black">
          {spec.label}
        </span>
      </div>
      <span className="text-sm md:text-base font-semibold text-brand-black">{spec.value}</span>
    </div>
  );
};

export default TechnicalSpecsItem;
