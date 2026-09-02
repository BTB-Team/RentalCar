// eslint-disable-next-line react/prop-types
const CtaBanner = ({ onRequestService }) => {
  const handleClick = () => {
    if (onRequestService) {
      onRequestService();
    }
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative mx-auto flex h-[339px] w-full max-w-[1200px]
    items-center justify-center overflow-hidden rounded-[20px]
    bg-[url('src/components/home/images/cta.png')] bg-cover bg-center
    px-6 py-10 text-center sm:px-10"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 flex h-[199px] w-full max-w-[544px] flex-col items-center justify-center rounded-[20px]">
            <h2 className="h-[56px] w-[427px] text-right text-[36px] font-black leading-none tracking-[0] text-black">
              برای سفر بعدی خود آماده‌اید؟
            </h2>

            <p className="mt-3 h-[37px] w-[544px] whitespace-nowrap text-right text-[24px] font-semibold leading-none tracking-[0] text-black">
              موتور و خدمات مورد نیاز خود را همین امروز تنظیم کنید.
            </p>

            <button
              type="button"
              onClick={handleClick}
              className="mt-5 flex h-[66px] w-[219px] shrink-0 items-center justify-center rounded-[20px] bg-white text-gray-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="h-[37px] w-[171px] whitespace-nowrap text-right text-[24px] font-semibold tracking-[0] text-black">
                درخواست خدمات
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
