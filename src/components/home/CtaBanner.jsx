const CtaBanner = ({ onRequestService }) => {
  const handleClick = () => {
    if (onRequestService) {
      onRequestService();
    }
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl bg-yellow-400 px-6 py-10 text-center sm:px-10">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              برای سفر بعدی خود آماده‌اید؟
            </h2>

            <p className="mt-3 text-sm font-medium text-gray-800">
              موتور و خدمات مورد نیاز خود را همین امروز تنظیم کنید.
            </p>

            <button
              type="button"
              onClick={handleClick}
              className="mt-5 rounded-xl bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              درخواست خدمات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
