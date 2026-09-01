import { create } from 'zustand';
// وارد کردن فایل‌های ترجمه به بیس پروژه
import drTranslations from '../locales/dr.json';
import enTranslations from '../locales/en.json';

export const useLangStore = create((set) => ({
  lang: 'en', 
  // 't' به طور خودکار انبار کلمات زبان فعال را در خود نگه می‌دارد
  t: drTranslations, 

  setLang: (newLang) => {
    set({ 
      lang: newLang,
      // سوئیچ آنی و خودکار ترجمه‌ها بر اساس زبان انتخابی کاربر
      t: newLang === 'dr' ? drTranslations: enTranslations 
    });
    
    // مدیریت جهت صفحه (RTL / LTR)
    const htmlElement = document.documentElement;
    if (newLang === 'dr') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'fa');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  },
}));
