const TechnicalSpecsItem = ({spec}) => {
  return (
    <div
      key={spec.label}
      className="flex h-[43px] items-center justify-between rounded-[12px] border border-[#E5E5E5] px-3"
    >
      <div className="flex items-center gap-2">
        <img src={spec.icon} alt="home icon" className="h-auto w-[15px]" />
        <span className="text-[11px] font-medium text-[#222]">
          {spec.label}
        </span>
      </div>
      <span className="text-[10px] font-medium text-[#222]">{spec.value}</span>
    </div>
  );
};

export default TechnicalSpecsItem;
