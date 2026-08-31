import { useLangStore } from '../../../store/useLangStore';

export const SectionHeader = ({ title, description }) => {
  const { lang } = useLangStore();

  return (
    <div
      className={`mx-auto flex w-full  mt-[80px]
       max-w-[821px] flex-col items-center ${
        lang === 'dr' ? 'text-center' : 'text-center'
      }`}
    >
      <h2
  className="
    text-start
    font-blackfont
    text-[40px]
    leading-[100%]
    text-brand-black
  "
>
  {title}
</h2>

      {/* Yellow Divider */}
      <div className="mt-[13px] h-[4px] w-[514px] max-w-full bg-brand-yellow" />

      {/* Section Description */}
      {description && (
        <p className="mt-[13px] font-semibold text-[24px] leading-none text-brand-black">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;