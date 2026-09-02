import { useLangStore } from "../../store/useLangStore";
import { Logo } from "../common/Logo";

export const Footer = () => {
    const { lang } = useLangStore();
    const isRtl = lang === 'dr';

    const content = {
        dr: {
            brandName: 'کابل رینتال کار',
            tagline: 'همراه امن سفر شما',
            subtext: 'ارائه‌دهنده خدمات کرایه موتر و پشتیبانی سفر در افغانستان',
            quickLinksTitle: 'لینک‌های سریع',
            links: ['خانه', 'درباره ما', 'موتر ما', 'خدمات', 'تماس با ما'],
            contactTitle: 'ارتباط با ما',
            address: 'شیرپور، سرک ۳، خانه نمبر ۷، کابل افغانستان',
            copyright: '© 2026 Kabul Rental Car Company. All Rights Reserved.',
        },
        en: {
            brandName: 'Kabul Rental Car',
            tagline: 'Your Safe Travel Partner',
            subtext: 'Providing car rental services and travel support in Afghanistan',
            quickLinksTitle: 'Quick Links',
            links: ['Home', 'About Us', 'Our Fleet', 'Services', 'Contact Us'],
            contactTitle: 'Contact Us',
            address: 'Shirpur, St 3, House #7, Kabul Afghanistan',
            copyright: '© 2026 Kabul Rental Car Company. All Rights Reserved.',
        },
    }[lang];
    return (
        <footer
            className="w-full bg-white text-black font-yekan pt-12 relative overflow-hidden text-center"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            {/* Top Main Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-3 items-start">

                {/* Column 1: Brand & Bio */}

                <div className="flex flex-col gap-4 items-start w-[307px]">
                    <div className="-mt-7 pt-0">
                        <Logo />
                    </div>
                    {/* Dynamic accent border switching sides */}
                    <div className={`${isRtl ? 'border-r-4 pr-3' : 'border-l-4 pl-3'} border-[#FFD000]`}>
                        <h3 className="text-[24px] font-[800] leading-tight text-black">
                            {content.tagline}
                        </h3>
                        <p className="text-[20px] text-gray-700 font-[400] mt-1 leading-relaxed">
                            {content.subtext}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2 mt-2">
                        {/* Instagram */}
                        <a href="#" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                            </svg>
                        </a>
                        {/* TikTok */}
                        <a href="#" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.25 2.56.02.83.42 1.64 1.05 2.18.77.66 1.83.87 2.8.61.93-.24 1.71-.97 2.01-1.89.23-.68.27-1.42.27-2.13V.02z" />
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a href="#" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col items-start">
                    <h4 className="text-[20px] font-[700] text-black pb-1">
                        {content.quickLinksTitle}
                    </h4>
                    <span className="block w-[65px] h-[4px] rounded-[20px] border-b-4 border-[#FFD000] mb-4"></span>
                    <ul className="space-y-3 text-[15px] font-[600] text-gray-800">
                        {content.links.map((link, idx) => (
                            <li key={idx}>
                                <a href="#" className="flex items-center gap-2 hover:text-[#FFD000] transition-colors text-[20px] font-[400]">
                                    {/* Chevron flips automatically based on LTR/RTL */}
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.31729 6.12832L6.44571 -9.26403e-05L7.97754 1.53174L2.61504 6.89424L7.97754 12.2567L6.44571 13.7886L0.31729 7.66016C0.114197 7.457 0.000105005 7.1815 0.00010503 6.89424C0.000105055 6.60698 0.114197 6.33148 0.31729 6.12832Z" fill="#F7D102" />
                                    </svg>

                                    <span>{link}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="flex flex-col items-start">
                    <h4 className="text-[18px] font-[700] text-black pb-1">
                        {content.contactTitle}
                    </h4>
                    <span className="block w-[65px] h-[4px] rounded-[20px] border-b-4 border-[#FFD000] mb-4"></span>

                    <div className="space-y-4 text-[20px] font-[400] text-gray-800">
                        {/* Address */}
                        <div className="flex items-center gap-3">
                            <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11.875C8.14752 11.875 7.32995 11.5458 6.72716 10.9597C6.12436 10.3737 5.78571 9.5788 5.78571 8.75C5.78571 7.9212 6.12436 7.12634 6.72716 6.54029C7.32995 5.95424 8.14752 5.625 9 5.625C9.85248 5.625 10.67 5.95424 11.2728 6.54029C11.8756 7.12634 12.2143 7.9212 12.2143 8.75C12.2143 9.16038 12.1311 9.56674 11.9696 9.94589C11.8081 10.325 11.5713 10.6695 11.2728 10.9597C10.9744 11.2499 10.62 11.4801 10.2301 11.6371C9.84008 11.7942 9.42211 11.875 9 11.875ZM9 0C6.61305 0 4.32387 0.921872 2.63604 2.56282C0.948211 4.20376 0 6.42936 0 8.75C0 15.3125 9 25 9 25C9 25 18 15.3125 18 8.75C18 6.42936 17.0518 4.20376 15.364 2.56282C13.6761 0.921872 11.3869 0 9 0Z" fill="#F7D102" />
                            </svg>

                            <span dir="ltr" className="text-start">{content.address}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 2.68209L10.5 8.09784L0 2.68209V2.57893C0.00138783 1.89534 0.306051 1.2401 0.847262 0.75672C1.38847 0.273346 2.12211 0.00123952 2.8875 0H18.1125C18.8779 0.00123952 19.6115 0.273346 20.1527 0.75672C20.6939 1.2401 20.9986 1.89534 21 2.57893V2.68209ZM0 4.30447L10.5 9.72022V9.72491L21 4.30916V12.4211C20.9986 13.1047 20.6939 13.7599 20.1527 14.2433C19.6115 14.7267 18.8779 14.9988 18.1125 15H2.8875C2.12211 14.9988 1.38847 14.7267 0.847262 14.2433C0.306051 13.7599 0.00138783 13.1047 0 12.4211V4.30447Z" fill="#F7D102" />
                            </svg>


                            <span dir="ltr">info@kabulrentalcar.com</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.51678 13.5975L7.57136 15.54C7.16124 15.9495 6.50926 15.9495 6.08863 15.5505C5.97296 15.435 5.85729 15.33 5.74161 15.2145C4.67818 14.1456 3.69741 12.9979 2.80771 11.781C1.94542 10.584 1.25138 9.387 0.74662 8.2005C0.252379 7.0035 0 5.859 0 4.767C0 4.053 0.126189 3.3705 0.378568 2.7405C0.630946 2.1 1.03055 1.512 1.58788 0.987C2.26089 0.3255 2.997 0 3.77516 0C4.0696 0 4.36405 0.0630001 4.62694 0.189C4.90035 0.315 5.14221 0.504 5.3315 0.777L7.77116 4.2105C7.96044 4.473 8.09715 4.7145 8.19179 4.9455C8.28643 5.166 8.33901 5.3865 8.33901 5.586C8.33901 5.838 8.2654 6.09 8.11818 6.3315C7.98147 6.573 7.78167 6.825 7.52929 7.077L6.7301 7.9065C6.61442 8.022 6.56184 8.1585 6.56184 8.3265C6.56184 8.4105 6.57236 8.484 6.59339 8.568C6.62494 8.652 6.65649 8.715 6.67752 8.778C6.8668 9.1245 7.19279 9.576 7.65548 10.122C8.12869 10.668 8.63345 11.2245 9.18027 11.781C9.28543 11.886 9.4011 11.991 9.50626 12.096C9.92689 12.5055 9.93741 13.1775 9.51678 13.5975ZM21 17.1465C20.9986 17.5428 20.9088 17.9337 20.7371 18.291C20.5583 18.669 20.327 19.026 20.022 19.362C19.5068 19.929 18.9389 20.3385 18.2974 20.601C18.2869 20.601 18.2764 20.6115 18.2659 20.6115C17.6455 20.8635 16.9725 21 16.2469 21C15.1743 21 14.028 20.748 12.8187 20.2335C11.6094 19.719 10.4001 19.026 9.2013 18.1545C8.79119 17.85 8.38107 17.5455 7.99199 17.22L11.4306 13.7865C11.7251 14.007 11.988 14.175 12.2088 14.2905C12.2614 14.3115 12.3245 14.343 12.3981 14.3745C12.4822 14.406 12.5664 14.4165 12.661 14.4165C12.8398 14.4165 12.9765 14.3535 13.0921 14.238L13.8913 13.4505C14.1542 13.188 14.4066 12.9885 14.6485 12.8625C14.8903 12.7155 15.1322 12.642 15.3951 12.642C15.5949 12.642 15.8052 12.684 16.0366 12.7785C16.2679 12.873 16.5098 13.0095 16.7727 13.188L20.2534 15.6555C20.5268 15.8445 20.7161 16.065 20.8317 16.3275C20.9369 16.59 21 16.8525 21 17.1465Z" fill="#F7D102" />
                            </svg>

                            <span dir="ltr">+93 786377417</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Horizontal Divider */}
            <div className="max-w-7xl mx-auto px-6 mt-12 mb-4">
                <hr className="border-t border-[#FFD000]" />
            </div>

            {/* Copyright Notice */}
            <div className="text-center text-[13px] text-gray-700 font-[500] mb-8" dir="ltr">
                {content.copyright}
            </div>

            {/* Bottom Wave Accent */}
            <div className="w-full h-24 bg-[#FFD000] rounded-t-[50%] md:rounded-t-[100%]" />
        </footer>
    )
}