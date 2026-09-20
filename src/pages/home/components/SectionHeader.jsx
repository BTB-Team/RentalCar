export const SectionHeader = ({ title, description }) => {
  return (
    <div
    // 💡 اضافه شدن کلاس lg:mt-[-40px] برای بالا بردن عنوان در دسکتاپ، بدون دست زدن به موبایل و تبلت
    className="mx-auto mt-[-90px] sm:mt-[50px] md:mt-[-32px] lg:mt-[-40px] flex h-[165px] sm:h-[129px] w-full flex-col items-center text-center"
 >
   {/* Section Title */}
   <h2
      className="w-80 sm:w-full max-w-[821px] px-[16px] text-center sm:text-[32px] md:text-[40px] lg:text-[40px] font-[900] leading-[130%] lg:leading-[100%] text-brand-black md:py-4 whitespace-normal break-words lg:whitespace-nowrap"
   >
     {title}
   </h2>

   {/* Yellow Divider */}
   <div
     className="mt-[13px] mb-2 h-[4px] w-80 sm:w-[514px] max-w-full shrink-0 bg-brand-yellow"
   />

   {/* Section Description */}
   {description && (
     <p
       className="mt-[20px] mb-0 sm:mt-[13px] w-80 sm:w-full font-semibold sm:text-[24px] leading-[100%] tracking-[0%] text-center text-brand-black whitespace-normal lg:whitespace-nowrap"
     >
       {description}
     </p>
   )}
 </div>

  );
};

export default SectionHeader;