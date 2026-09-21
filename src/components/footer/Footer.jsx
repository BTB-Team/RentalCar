import { useLangStore } from "../../store/useLangStore";
import { NavLink } from "react-router-dom";
import { Logo } from "../common/Logo";
import { FooterLinks } from "../common/FooterLinks";

export const Footer = () => {
  const { lang } = useLangStore();
  const isRtl = lang === "dr";

  const content = {
    dr: {
      brandName: "کابل رینتال کار",
      tagline: "همراه امن سفر شما",
      subtext: "ارائه‌دهنده خدمات کرایه موتر و پشتیبانی سفر در افغانستان",
      quickLinksTitle: "لینک‌های سریع",
      links: [
        { label: "خانه", href: "/" },
        { label: "درباره ما", href: "/about" },
        { label: "موتر ما", href: "/cars" },
        { label: "خدمات", href: "/about#services", isScroll: true },
        { label: "تماس با ما", href: "https://wa.me/93786377417" },
      ],
      contactTitle: "ارتباط با ما",
      address: "شیرپور، سرک ۳، خانه نمبر ۷، کابل افغانستان",
      copyright: ".2026 Kabul Rental Car Company. All Rights Reserved ©",
    },
    en: {
      brandName: "Kabul Rental Car",
      tagline: "Your Safe Travel Partner",
      subtext: "Providing car rental services and travel support in Afghanistan",
      quickLinksTitle: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Fleet", href: "/cars" },
        { label: "Services", href: "/about#services", isScroll: true },
        { label: "Contact Us", href: "https://wa.me/93786377417" },
      ],
      contactTitle: "Contact Us",
      address: "Shirpur, St 3, House #7, Kabul Afghanistan",
      copyright: "© 2026 Kabul Rental Car Company. All Rights Reserved.",
    },
  }[lang];

  return (
    <footer
      className="relative w-full bg-white text-black font-yekan pt-10 md:pt-14 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr] gap-8 md:gap-10 items-start">

        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-4 text-start">
          <div className="-mt-5 mb-5">
            <Logo />
          </div>

          {/* Accent Border & Tagline */}
          <div className="border-s-[5px] ps-3.5 border-[#FFD000] space-y-1.5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black leading-snug">
              {content.tagline}
            </h3>
            <p className="text-[20px] text-black leading-normal max-w-[270px]">
              {content.subtext}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/krc_rental_car?igsi=azR5d21pamFvMTQ3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3998 2.66675H21.5998C25.8665 2.66675 29.3332 6.13341 29.3332 10.4001V21.6001C29.3332 23.6511 28.5184 25.6181 27.0681 27.0684C25.6178 28.5187 23.6508 29.3334 21.5998 29.3334H10.3998C6.13317 29.3334 2.6665 25.8667 2.6665 21.6001V10.4001C2.6665 8.34907 3.48126 6.38207 4.93154 4.93179C6.38183 3.48151 8.34883 2.66675 10.3998 2.66675ZM10.1332 5.33341C8.86013 5.33341 7.63923 5.83913 6.73906 6.7393C5.83888 7.63948 5.33317 8.86037 5.33317 10.1334V21.8667C5.33317 24.5201 7.47984 26.6667 10.1332 26.6667H21.8665C23.1395 26.6667 24.3604 26.161 25.2606 25.2609C26.1608 24.3607 26.6665 23.1398 26.6665 21.8667V10.1334C26.6665 7.48008 24.5198 5.33341 21.8665 5.33341H10.1332ZM22.9998 7.33341C23.4419 7.33341 23.8658 7.50901 24.1783 7.82157C24.4909 8.13413 24.6665 8.55805 24.6665 9.00008C24.6665 9.44211 24.4909 9.86603 24.1783 10.1786C23.8658 10.4912 23.4419 10.6667 22.9998 10.6667C22.5578 10.6667 22.1339 10.4912 21.8213 10.1786C21.5088 9.86603 21.3332 9.44211 21.3332 9.00008C21.3332 8.55805 21.5088 8.13413 21.8213 7.82157C22.1339 7.50901 22.5578 7.33341 22.9998 7.33341ZM15.9998 9.33341C17.7679 9.33341 19.4636 10.0358 20.7139 11.286C21.9641 12.5363 22.6665 14.232 22.6665 16.0001C22.6665 17.7682 21.9641 19.4639 20.7139 20.7141C19.4636 21.9644 17.7679 22.6667 15.9998 22.6667C14.2317 22.6667 12.536 21.9644 11.2858 20.7141C10.0355 19.4639 9.33317 17.7682 9.33317 16.0001C9.33317 14.232 10.0355 12.5363 11.2858 11.286C12.536 10.0358 14.2317 9.33341 15.9998 9.33341ZM15.9998 12.0001C14.939 12.0001 13.9216 12.4215 13.1714 13.1717C12.4213 13.9218 11.9998 14.9392 11.9998 16.0001C11.9998 17.0609 12.4213 18.0784 13.1714 18.8285C13.9216 19.5787 14.939 20.0001 15.9998 20.0001C17.0607 20.0001 18.0781 19.5787 18.8283 18.8285C19.5784 18.0784 19.9998 17.0609 19.9998 16.0001C19.9998 14.9392 19.5784 13.9218 18.8283 13.1717C18.0781 12.4215 17.0607 12.0001 15.9998 12.0001Z" fill="black" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@kabulrentalcar?si=TdSuaomS4boNiJ2z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* 💡 تبدیل کلمات خط‌تیره‌دار به camelCase استاندارد ری‌اکت */}
                 <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#0F0F0F"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7478 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#0F0F0F"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@kabulrentalcars"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1335 7.76C21.2223 6.71937 20.7201 5.3832 20.7202 4H16.6002V20.5333C16.5691 21.4283 16.1916 22.2761 15.5473 22.898C14.903 23.5199 14.0423 23.8672 13.1469 23.8667C11.2535 23.8667 9.68021 22.32 9.68021 20.4C9.68021 18.1067 11.8935 16.3867 14.1735 17.0933V12.88C9.57354 12.2667 5.54688 15.84 5.54688 20.4C5.54688 24.84 9.22688 28 13.1335 28C17.3202 28 20.7202 24.6 20.7202 20.4V12.0133C22.3909 13.2131 24.3967 13.8569 26.4535 13.8533V9.73333C26.4535 9.73333 23.9469 9.85333 22.1335 7.76Z" fill="black" />
              </svg>
            </a>

            {/* facebook */}
            <a
              href="https://www.facebook.com/share/1BsSVuKHF8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16C4 19.1826 5.26428 22.2348 7.51472 24.4853C9.76516 26.7357 12.8174 28 16 28ZM16 28V17.3333M16 17.3333V13.3333C16 12.6261 16.281 11.9478 16.781 11.4477C17.2811 10.9476 17.9594 10.6667 18.6667 10.6667H19.3333M16 17.3333H13.3333M16 17.3333H18.6667" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </a>

            {/* Google Maps Location */}
            <a
              href="https://share.google/rLyBD7EhRnQtmFX1W"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
              className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.66663C10.1089 2.66663 5.33331 7.44222 5.33331 13.3333C5.33331 21.3333 16 29.3333 16 29.3333C16 29.3333 26.6666 21.3333 26.6666 13.3333C26.6666 7.44222 21.891 2.66663 16 2.66663ZM16 17.3333C13.7909 17.3333 12 15.5424 12 13.3333C12 11.1242 13.7909 9.33329 16 9.33329C18.2091 9.33329 20 11.1242 20 13.3333C20 15.5424 18.2091 17.3333 16 17.3333Z" fill="black" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg sm:text-xl font-bold text-black pb-1">
            {content.quickLinksTitle}
          </h4>
          <span className="block w-14 h-1 rounded-full bg-[#FFD000] mb-4"></span>
          <FooterLinks content={content} />
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg sm:text-xl font-bold text-black pb-1">
            {content.contactTitle}
          </h4>
          <span className="block w-14 h-1 rounded-full bg-[#FFD000] mb-4"></span>

          <div className="space-y-3.5 text-sm sm:text-base font-normal">
            {/* Address */}
            <a
              href="https://share.google/rLyBD7EhRnQtmFX1W"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-amber-600 transition-colors group"
            >
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 mt-0.5"
              >
                <path
                  d="M9 11.875C8.14752 11.875 7.32995 11.5458 6.72716 10.9597C6.12436 10.3737 5.78571 9.5788 5.78571 8.75C5.78571 7.9212 6.12436 7.12634 6.72716 6.54029C7.32995 5.95424 8.14752 5.625 9 5.625C9.85248 5.625 10.67 5.95424 11.2728 6.54029C11.8756 7.12634 12.2143 7.9212 12.2143 8.75C12.2143 9.16038 12.1311 9.56674 11.9696 9.94589C11.8081 10.325 11.5713 10.6695 11.2728 10.9597C10.9744 11.2499 10.62 11.4801 10.2301 11.6371C9.84008 11.7942 9.42211 11.875 9 11.875ZM9 0C6.61305 0 4.32387 0.921872 2.63604 2.56282C0.948211 4.20376 0 6.42936 0 8.75C0 15.3125 9 25 9 25C9 25 18 15.3125 18 8.75C18 6.42936 17.0518 4.20376 15.364 2.56282C13.6761 0.921872 11.3869 0 9 0Z"
                  fill="#FFD000"
                />
              </svg>
              <span className="text-start leading-snug break-words">
                {content.address}
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@kabulrentalcar.com"
              className="flex items-center gap-3 hover:text-amber-600 transition-colors"
            >
              <svg
                width="18"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2.68209L10.5 8.09784L0 2.68209V2.57893C0.00138783 1.89534 0.306051 1.2401 0.847262 0.75672C1.38847 0.273346 2.12211 0.00123952 2.8875 0H18.1125C18.8779 0.00123952 19.6115 0.273346 20.1527 0.75672C20.6939 1.2401 20.9986 1.89534 21 2.57893V2.68209ZM0 4.30447L10.5 9.72022V9.72491L21 4.30916V12.4211C20.9986 13.1047 20.6939 13.7599 20.1527 14.2433C19.6115 14.7267 18.8779 14.9988 18.1125 15H2.8875C2.12211 14.9988 1.38847 14.7267 0.847262 14.2433C0.306051 13.7599 0.00138783 13.1047 0 12.4211V4.30447Z"
                  fill="#FFD000"
                />
              </svg>
              <span dir="ltr" className="break-all">
                info@kabulrentalcar.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+93786377417"
              className="flex items-center gap-3 hover:text-amber-600 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M9.51678 13.5975L7.57136 15.54C7.16124 15.9495 6.50926 15.9495 6.08863 15.5505C5.97296 15.435 5.85729 15.33 5.74161 15.2145C4.67818 14.1456 3.69741 12.9979 2.80771 11.781C1.94542 10.584 1.25138 9.387 0.74662 8.2005C0.252379 7.0035 0 5.859 0 4.767C0 4.053 0.126189 3.3705 0.378568 2.7405C0.630946 2.1 1.03055 1.512 1.58788 0.987C2.26089 0.3255 2.997 0 3.77516 0C4.0696 0 4.36405 0.0630001 4.62694 0.189C4.90035 0.315 5.14221 0.504 5.3315 0.777L7.77116 4.2105C7.96044 4.473 8.09715 4.7145 8.19179 4.9455C8.28643 5.166 8.33901 5.3865 8.33901 5.586C8.33901 5.838 8.2654 6.09 8.11818 6.3315C7.98147 6.573 7.78167 6.825 7.52929 7.077L6.7301 7.9065C6.61442 8.022 6.56184 8.1585 6.56184 8.3265C6.56184 8.4105 6.57236 8.484 6.59339 8.568C6.62494 8.652 6.65649 8.715 6.67752 8.778C6.8668 9.1245 7.19279 9.576 7.65548 10.122C8.12869 10.668 8.63345 11.2245 9.18027 11.781C9.28543 11.886 9.4011 11.991 9.50626 12.096C9.92689 12.5055 9.93741 13.1775 9.51678 13.5975ZM21 17.1465C20.9986 17.5428 20.9088 17.9337 20.7371 18.291C20.5583 18.669 20.327 19.026 20.022 19.362C19.5068 19.929 18.9389 20.3385 18.2974 20.601C18.2869 20.601 18.2764 20.6115 18.2659 20.6115C17.6455 20.8635 16.9725 21 16.2469 21C15.1743 21 14.028 20.748 12.8187 20.2335C11.6094 19.719 10.4001 19.026 9.2013 18.1545C8.79119 17.85 8.38107 17.5455 7.99199 17.22L11.4306 13.7865C11.7251 14.007 11.988 14.175 12.2088 14.2905C12.2614 14.3115 12.3245 14.343 12.3981 14.3745C12.4822 14.406 12.5664 14.4165 12.661 14.4165C12.8398 14.4165 12.9765 14.3535 13.0921 14.238L13.8913 13.4505C14.1542 13.188 14.4066 12.9885 14.6485 12.8625C14.8903 12.7155 15.1322 12.642 15.3951 12.642C15.5949 12.642 15.8052 12.684 16.0366 12.7785C16.2679 12.873 16.5098 13.0095 16.7727 13.188L20.2534 15.6555C20.5268 15.8445 20.7161 16.065 20.8317 16.3275C20.9369 16.59 21 16.8525 21 17.1465Z"
                  fill="#FFD000"
                />
              </svg>
              <span dir="ltr">+93 786377417</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl w-full h-[2px] bg-[#F7D102] px-5 sm:px-8 mx-auto mt-24 mb-6">
      </div>

      {/* Copyright Notice */}
      <div className="text-center font-normal text-[20px] leading-normal  sm:text-sm text-black px-4 mb-12">
        {content.copyright}
      </div>

      {/* Bottom Wave Decorative Accent */}
      <div className="w-full h-12 sm:h-20 bg-[#FFD000] rounded-t-full -mt-6" />
    </footer>
  );
};