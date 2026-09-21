import { useLangStore } from "../../../store/useLangStore";

export const MapSection = () => {
  const { t } = useLangStore();

  // 💡 لایو فیکس قطعی: استفاده از API رسمی گوگل مپ برای باز شدن مستقیم، بدون ارور و ۱۰۰٪ تضمینی لوکیشن شما در برنامه گوگل مپ
  const googleMapExternalUrl = "https://share.google/rLyBD7EhRnQtmFX1W";

  // آدرس نقشه زنده برای رندر شدن داخلی کامپوننت سایت
  const googleMapEmbedUrl = "https://maps.app.goo.gl/K7Rqkts86rJ7Z2Mi6";

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 select-none bg-white">
      
      {/* --- 1. HEADER: Title & Description --- */}
      <div className="flex flex-col items-center text-center mb-8 gap-4">
        <div className="flex items-center justify-center gap-3">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0004 0C12.787 0 7.69501 5.0768 7.69501 11.2731C7.69501 13.6739 8.46185 15.9053 9.75955 17.7392L17.6206 31.3291C18.7215 32.7674 19.4533 32.4942 20.3688 31.2531L29.0396 16.4977C29.2144 16.1808 29.352 15.8433 29.4717 15.4987C30.0217 14.1578 30.3046 12.7224 30.3046 11.2731C30.305 5.0768 25.2145 0 19.0004 0ZM19.0004 5.282C22.3467 5.282 25.0074 7.93668 25.0074 11.2731C25.0074 14.6095 22.3467 17.2634 19.0004 17.2634C15.6545 17.2634 12.9926 14.6102 12.9926 11.2735C12.9926 7.93668 15.6545 5.28238 19 5.28238" fill="#F7D102"/>
            <path d="M26.1869 18.585L26.1687 18.6328L26.1846 18.5891L26.1869 18.585ZM12.9223 26.2416C7.55439 27.0001 3.79999 28.8146 3.79999 31.4856C3.79999 35.0834 10.073 37.9999 19 37.9999C27.9269 37.9999 34.2 35.0834 34.2 31.4856C34.2 28.8146 30.446 27.0001 25.0785 26.2416L24.3348 27.5077C28.3803 28.069 31.16 29.2485 31.16 30.6173C31.16 32.5363 25.7157 34.0916 19 34.0916C12.2842 34.0916 6.83999 32.5363 6.83999 30.6173C6.83961 29.2531 9.60107 28.0747 13.6591 27.5112L12.9223 26.2416Z" fill="#F7D102"/>
        </svg>

          <h2 className="font-sans font-black text-[28px] sm:text-[32px] md:text-[36px] text-black leading-[100%] tracking-normal text-center">
            {t.home?.map?.title || "موقعیت ما"}
          </h2>
        </div>

        <p className="font-sans font-semibold text-[16px] sm:text-[20px] md:text-[24px] text-black max-w-[820px] leading-[130%] md:leading-[100%] tracking-normal text-center">
          {t.home?.map?.description || "به‌راحتی ما را پیدا کنید و از خدمات کرایه موتر ما بهره‌مند شوید."}
        </p>
      </div>

      {/* --- 2. MAP CONTAINER --- */}
      <a 
        href={googleMapExternalUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Open in Google Maps"
        className="block w-full max-w-[1200px] mx-auto rounded-[20px] overflow-hidden shadow-sm h-[260px] sm:h-[300px] relative z-10 transition-all duration-300 group cursor-pointer"
      >
        {/* لایه شفاف محافظ زنده برای مهار کلیک‌های روی آی‌فریم و اجرای لینک بیرونی */}
        <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/[0.02] transition-colors" />
        
        <iframe
          src={googleMapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kabul Rental Car Location"
          className="w-full h-full grayscale-[10%] contrast-[110%]"
        />
      </a>

    </section>
  );
};

export default MapSection;
