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
            links: [{ 'label': 'خانه', 'href': '/' }, { 'label': 'درباره ما', 'href': '/about' }, { 'label': 'موتر ما', 'href': '/cars' }, { 'label': 'خدمات', 'href': '/services' }, { 'label': 'تماس با ما', 'href': '/contact' }],
            contactTitle: 'ارتباط با ما',
            address: 'شیرپور، سرک ۳، خانه نمبر ۷، کابل افغانستان',
            copyright: '© 2026 Kabul Rental Car Company. All Rights Reserved.',
        },
        en: {
            brandName: 'Kabul Rental Car',
            tagline: 'Your Safe Travel Partner',
            subtext: 'Providing car rental services and travel support in Afghanistan',
            quickLinksTitle: 'Quick Links',
            links: [{ 'label': 'Home', 'href': '/' }, { 'label': 'About Us', 'href': '/about' }, { 'label': 'Our Fleet', 'href': '/cars' }, { 'label': 'Services', 'href': '/services' }, { 'label': 'Contact Us', 'href': '/contact' }],
            contactTitle: 'Contact Us',
            address: 'Shirpur, St 3, House #7, Kabul Afghanistan',
            copyright: '© 2026 Kabul Rental Car Company. All Rights Reserved.',
        },
    }[lang];
    return (
        <footer
            className="relative w-full bg-white text-black font-yekan pt-12 relative overflow-hidden text-center"
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
                        <p className="text-[20px]  font-[400] mt-1 leading-relaxed">
                            {content.subtext}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2 mt-2">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/krc_rental_car?igsi=azR5d21pamFvMTQ3&utm_source=qr" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3998 2.66675H21.5998C25.8665 2.66675 29.3332 6.13341 29.3332 10.4001V21.6001C29.3332 23.6511 28.5184 25.6181 27.0681 27.0684C25.6178 28.5187 23.6508 29.3334 21.5998 29.3334H10.3998C6.13317 29.3334 2.6665 25.8667 2.6665 21.6001V10.4001C2.6665 8.34907 3.48126 6.38207 4.93154 4.93179C6.38183 3.48151 8.34883 2.66675 10.3998 2.66675ZM10.1332 5.33341C8.86013 5.33341 7.63923 5.83913 6.73906 6.7393C5.83888 7.63948 5.33317 8.86037 5.33317 10.1334V21.8667C5.33317 24.5201 7.47984 26.6667 10.1332 26.6667H21.8665C23.1395 26.6667 24.3604 26.161 25.2606 25.2609C26.1608 24.3607 26.6665 23.1398 26.6665 21.8667V10.1334C26.6665 7.48008 24.5198 5.33341 21.8665 5.33341H10.1332ZM22.9998 7.33341C23.4419 7.33341 23.8658 7.50901 24.1783 7.82157C24.4909 8.13413 24.6665 8.55805 24.6665 9.00008C24.6665 9.44211 24.4909 9.86603 24.1783 10.1786C23.8658 10.4912 23.4419 10.6667 22.9998 10.6667C22.5578 10.6667 22.1339 10.4912 21.8213 10.1786C21.5088 9.86603 21.3332 9.44211 21.3332 9.00008C21.3332 8.55805 21.5088 8.13413 21.8213 7.82157C22.1339 7.50901 22.5578 7.33341 22.9998 7.33341ZM15.9998 9.33341C17.7679 9.33341 19.4636 10.0358 20.7139 11.286C21.9641 12.5363 22.6665 14.232 22.6665 16.0001C22.6665 17.7682 21.9641 19.4639 20.7139 20.7141C19.4636 21.9644 17.7679 22.6667 15.9998 22.6667C14.2317 22.6667 12.536 21.9644 11.2858 20.7141C10.0355 19.4639 9.33317 17.7682 9.33317 16.0001C9.33317 14.232 10.0355 12.5363 11.2858 11.286C12.536 10.0358 14.2317 9.33341 15.9998 9.33341ZM15.9998 12.0001C14.939 12.0001 13.9216 12.4215 13.1714 13.1717C12.4213 13.9218 11.9998 14.9392 11.9998 16.0001C11.9998 17.0609 12.4213 18.0784 13.1714 18.8285C13.9216 19.5787 14.939 20.0001 15.9998 20.0001C17.0607 20.0001 18.0781 19.5787 18.8283 18.8285C19.5784 18.0784 19.9998 17.0609 19.9998 16.0001C19.9998 14.9392 19.5784 13.9218 18.8283 13.1717C18.0781 12.4215 17.0607 12.0001 15.9998 12.0001Z" fill="black" />
                            </svg>

                        </a>
                        {/* Facebook */}
                        <a href="https://youtube.com/@kabulrentalcar?si=TdSuaomS4boNiJ2z" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.213 9.427a3.653 3.653 0 0 0-2.573-2.587C24.36 6.2 16 6.2 16 6.2s-8.36 0-10.64.64A3.653 3.653 0 0 0 2.787 9.427C2.16 11.72 2.16 16 2.16 16s0 4.28.627 6.573a3.653 3.653 0 0 0 2.573 2.587c2.28.64 10.64.64 10.64.64s8.36 0 10.64-.64a3.653 3.653 0 0 0 2.573-2.587C29.84 20.28 29.84 16 29.84 16s0-4.28-.627-6.573Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.2 11.4v9.2l8-4.6-8-4.6Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                            </svg>
                        </a>
                        {/* TikTok */}
                        <a href="https://www.tiktok.com/@kabulrentalcars?_r=1&_d=f3ia4168eg8cl9&sec_uid=MS4wLjABAAAAr4qcX1OifzdzIeMJJSl1LHbaKdX15nGqonGee-tjZEh5oZKSk4DMVgvBn5NzDqNr&share_author_id=6777446267845952517&sharer_language=en&source=h5_m&u_code=da62f7c3204h7h&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=97F2A3ED-B371-417B-AB58-9F65A620DB80&user_id=6777446267845952517&sec_user_id=MS4wLjABAAAAr4qcX1OifzdzIeMJJSl1LHbaKdX15nGqonGee-tjZEh5oZKSk4DMVgvBn5NzDqNr&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1335 7.76C21.2223 6.71937 20.7201 5.3832 20.7202 4H16.6002V20.5333C16.5691 21.4283 16.1916 22.2761 15.5473 22.898C14.903 23.5199 14.0423 23.8672 13.1469 23.8667C11.2535 23.8667 9.68021 22.32 9.68021 20.4C9.68021 18.1067 11.8935 16.3867 14.1735 17.0933V12.88C9.57354 12.2667 5.54688 15.84 5.54688 20.4C5.54688 24.84 9.22688 28 13.1335 28C17.3202 28 20.7202 24.6 20.7202 20.4V12.0133C22.3909 13.2131 24.3967 13.8569 26.4535 13.8533V9.73333C26.4535 9.73333 23.9469 9.85333 22.1335 7.76Z" fill="black" />
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a href="#" className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.4001 6.54658C24.1775 5.31205 22.7214 4.3332 21.1167 3.66706C19.5121 3.00092 17.7908 2.66082 16.0534 2.66658C8.7734 2.66658 2.84007 8.59991 2.84007 15.8799C2.84007 18.2132 3.4534 20.4799 4.60007 22.4799L2.7334 29.3332L9.7334 27.4932C11.6667 28.5466 13.8401 29.1066 16.0534 29.1066C23.3334 29.1066 29.2667 23.1732 29.2667 15.8932C29.2667 12.3599 27.8934 9.03991 25.4001 6.54658ZM16.0534 26.8666C14.0801 26.8666 12.1467 26.3332 10.4534 25.3332L10.0534 25.0932L5.8934 26.1866L7.00006 22.1332L6.7334 21.7199C5.6368 19.9693 5.05463 17.9456 5.0534 15.8799C5.0534 9.82658 9.98673 4.89324 16.0401 4.89324C18.9734 4.89324 21.7334 6.03991 23.8001 8.11991C24.8236 9.13839 25.6346 10.35 26.1862 11.6843C26.7378 13.0187 27.019 14.4494 27.0134 15.8932C27.0401 21.9466 22.1067 26.8666 16.0534 26.8666ZM22.0801 18.6532C21.7467 18.4932 20.1201 17.6932 19.8267 17.5732C19.5201 17.4666 19.3067 17.4132 19.0801 17.7332C18.8534 18.0666 18.2267 18.8132 18.0401 19.0266C17.8534 19.2532 17.6534 19.2799 17.3201 19.1066C16.9867 18.9466 15.9201 18.5866 14.6667 17.4666C13.6801 16.5866 13.0267 15.5066 12.8267 15.1732C12.6401 14.8399 12.8001 14.6666 12.9734 14.4932C13.1201 14.3466 13.3067 14.1066 13.4667 13.9199C13.6267 13.7332 13.6934 13.5866 13.8001 13.3732C13.9067 13.1466 13.8534 12.9599 13.7734 12.7999C13.6934 12.6399 13.0267 11.0132 12.7601 10.3466C12.4934 9.70658 12.2134 9.78658 12.0134 9.77324H11.3734C11.1467 9.77324 10.8001 9.85324 10.4934 10.1866C10.2001 10.5199 9.34673 11.3199 9.34673 12.9466C9.34673 14.5732 10.5334 16.1466 10.6934 16.3599C10.8534 16.5866 13.0267 19.9199 16.3334 21.3466C17.1201 21.6932 17.7334 21.8932 18.2134 22.0399C19.0001 22.2932 19.7201 22.2532 20.2934 22.1732C20.9334 22.0799 22.2534 21.3732 22.5201 20.5999C22.8001 19.8266 22.8001 19.1732 22.7067 19.0266C22.6134 18.8799 22.4134 18.8132 22.0801 18.6532Z" fill="black" />
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
                    <ul className="space-y-3 text-[15px] font-[600]">
                        {content.links.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className="flex items-center gap-2 hover:text-[#FFD000] transition-colors text-[20px] font-[400]">
                                    {/* Chevron flips automatically based on LTR/RTL */}
                                    {
                                        isRtl ? (
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.31729 6.12832L6.44571 -9.26403e-05L7.97754 1.53174L2.61504 6.89424L7.97754 12.2567L6.44571 13.7886L0.31729 7.66016C0.114197 7.457 0.000105005 7.1815 0.00010503 6.89424C0.000105055 6.60698 0.114197 6.33148 0.31729 6.12832Z" fill="#F7D102" />
                                            </svg>
                                        ) : (
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.68271 6.12832L1.55429 -9.26403e-05L0.02246 1.53174L5.38496 6.89424L0.02246 12.2567L1.55429 13.7886L7.68271 7.66016C7.8858 7.457 7.99989 7.1815 7.99989 6.89424C7.99989 6.60698 7.8858 6.33148 7.68271 6.12832Z" fill="#F7D102" />
                                            </svg>
                                        )
                                    }



                                    <span>{link.label}</span>
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

                    <div className="space-y-4 text-[20px] font-[400]">
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
            <div className="w-[1200px] mx-auto h-[2px] mt-12 mb-8">
                <hr className="border-t border-[#FFD000]" />
            </div>

            {/* Copyright Notice */}
            <div className="text-center text-[20px] font-[400] mb-[60px]" dir="ltr">
                {content.copyright}
            </div>

            {/* Bottom Wave Accent */}
            {/* <div className="w-full h-24 bg-[#FFD000] rounded-t-[50%] md:rounded-t-[100%]" /> */}
            <div className="w-full h-[95px] bg-[#F7D102] rounded-t-full -mt-10 -z-10" />
        </footer>
    )
}