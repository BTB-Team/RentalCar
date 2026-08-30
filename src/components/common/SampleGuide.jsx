import React from 'react';
// فرض بر این است که هوک زبان را در پوشه store ساخته‌اید
import { useLangStore } from '../../store/useLangStore'; 

export default function SampleGuide() {
  // ۱. گرفتن زبان فعال (مثلا 'dr' یا 'en') از استور زوستاند
  const { lang } = useLangStore();

  // ۲. نمونه دیتای استخراج شده از db.json (بخش خدمات) برای تست داینامیک ادمین
  const mockServiceData = {
    id: "s1",
    title_dr: "کرایه موترهای زرهی",
    title_en: "Armored Car Rental",
    desc_dr: "موترهای مدل بالا و زرهی متناسب با نوع سفر شما در کابل.",
    desc_en: "High-end and armored vehicles tailored for your journey in Kabul."
  };

  return (
    <section className="w-full min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* ========================================================
            نمونه ۱: تیتر بزرگ هیرو (Display Title) - منطبق بر فونت ۹۰۰ فیگما
            نکته: استفاده از کلاس‌های منطقی (text-start) به جای (text-right)
           ======================================================== */}
        <div className="space-y-4">
          <span className="text-xs text-gray-400 block font-mono">// Display Title (Font Weight: 900)</span>
          <h1 className="font-sans font-blackfont text-brand-black text-[48px] leading-tight text-start">
            {lang === 'dr' ? 'سفر امن و مطمئن در سراسر افغانستان' : 'Safe & Reliable Travel Across Afghanistan'}
          </h1>
        </div>

        {/* ========================================================
            نمونه ۲: متن بدنه و توضیحات (Body Text) - منطبق بر فونت ۴۰۰ فیگما
            نکته: استفاده از leading-[37px] طبق مستندات تصویر فیگما
           ======================================================== */}
        <div className="space-y-2">
          <span className="text-xs text-gray-400 block font-mono">// Body Text & Paragraphs (Font Weight: 400)</span>
          <p className="font-sans font-regular text-brand-black text-[20px] leading-[37px] text-start max-w-2xl">
            {lang === 'dr' 
              ? 'از موترهای لوکس و زرهی تا راننده، راهنمای سفر و پشتیبانی کامل؛ تمام نیازهای سفر شما در یک مجموعه.' 
              : 'From luxury & armored cars to drivers, travel guides, and full support; all your travel needs in one place.'}
          </p>
        </div>

        {/* ========================================================
            نمونه ۳: رندر دیتای داینامیک API/ادمین پنل (Dynamic Data Mapping)
            نکته: ترکیب فیلدها با زبان فعال جاری سیستم
           ======================================================== */}
        <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg space-y-3">
          <span className="text-xs text-gray-400 block font-mono">// Dynamic Admin Data Rendering Sample</span>
          <h3 className="font-sans font-extrabold text-brand-black text-[22px] text-start">
            {lang === 'dr' ? mockServiceData.title_dr : mockServiceData.title_en}
          </h3>
          <p className="font-sans font-regular text-gray-600 text-[16px] text-start">
            {lang === 'dr' ? mockServiceData.desc_dr : mockServiceData.desc_en}
          </p>
        </div>

        {/* ========================================================
            نمونه ۴: دکمه اکشن برند (Yellow Primary Button) - منطبق بر فونت ۸۰۰ فیگما
            نکته: استفاده از کلاس‌های متقارن (pe-6 به جای pr-6) برای پشتیبانی خودکار از جهت صفحه
           ======================================================== */}
        <div className="space-y-4">
          <span className="text-xs text-gray-400 block font-mono">// Primary Action Button (Font Weight: 800)</span>
          <div className="flex justify-start">
            <button className="font-sans font-extrabold text-brand-black text-[20px] bg-brand-yellow h-[50px] px-8 rounded hover:opacity-90 transition-opacity active:scale-[0.98]">
              {lang === 'dr' ? 'بیشتر بدانید' : 'Read More'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
