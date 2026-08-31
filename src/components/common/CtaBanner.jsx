import React from 'react'
import { useLangStore } from '../../store/useLangStore';

export const CtaBanner = () => {

    const { lang } = useLangStore()

    return (
        <section className="max-w-[1200px] mx-auto my-10 px-4">
            <div className="bg-[#EEEEEE] rounded-[20px] h-auto md:h-[210px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-10 py-8 md:py-0">

                {/* Icon circle — 117x117, 3px yellow border */}
                <div className="w-[100px] h-[100px] md:w-[117px] md:h-[117px] shrink-0 rounded-full border-[3px] border-brand-yellow flex items-center justify-center order-1">
                    <svg width="44" height="44" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.1373 0C14.8786 0 0 14.8786 0 33.1373V49.7059C0 51.5284 1.49118 53.0196 3.31373 53.0196H13.2549C15.0774 53.0196 16.5686 51.5284 16.5686 49.7059V33.1373C16.5686 31.3147 15.0774 29.8235 13.2549 29.8235H6.85941C8.48314 16.7675 19.6504 6.62745 33.1373 6.62745C46.6241 6.62745 57.7914 16.7675 59.4151 29.8235H53.0196C51.1971 29.8235 49.7059 31.3147 49.7059 33.1373V49.7059C49.7059 51.5284 51.1971 53.0196 53.0196 53.0196H59.6471V56.3333C59.6471 58.1559 58.1559 59.6471 56.3333 59.6471H43.0784C43.0784 57.8245 41.5873 56.3333 39.7647 56.3333H26.5098C24.6873 56.3333 23.1961 57.8245 23.1961 59.6471V62.9608C23.1961 64.7833 24.6873 66.2745 26.5098 66.2745H56.3333C61.801 66.2745 66.2745 61.801 66.2745 56.3333V33.1373C66.2745 14.8786 51.3959 0 33.1373 0Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                {/* Text block */}
                <div className={`flex-1 space-y-2 order-2 ${lang === 'dr' ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                    <h3 className="font-sans font-extrabold text-brand-black text-[20px] md:text-[24px] leading-snug">
                        {lang === 'dr'
                            ? 'برای رزرو این موتر همین امروز با ما تماس بگیرید'
                            : 'Contact us today to book this car'}
                    </h3>
                    <p className="font-sans font-semibold text-brand-black text-[14px] md:text-[16px]">
                        {lang === 'dr'
                            ? 'تیم ما در ۲۴ ساعت شبانه روز آماده پاسخ‌گویی و ارائه بهترین خدمات به شما است.'
                            : 'Our team is available 24/7 to assist you and provide the best service.'}
                    </p>
                </div>

                {/* Contact button — 209x60, rounded-58 */}
                <a
                    href="tel:+93000000000"
                    className="w-full md:w-[209px] h-[60px] shrink-0 bg-brand-black text-white font-sans font-semibold text-[18px] md:text-[20px] rounded-[58px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity order-3"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path
                            d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.5 14.9C17.6 15.3 18.8 15.5 20 15.5C20.6 15.5 21 15.9 21 16.5V20C21 20.6 20.6 21 20 21C10.6 21 3 13.4 3 4C3 3.4 3.4 3 4 3H7.5C8.1 3 8.5 3.4 8.5 4C8.5 5.2 8.7 6.4 9.1 7.5C9.2 7.9 9.1 8.3 8.8 8.6L6.6 10.8Z"
                            fill="currentColor"
                        />
                    </svg>
                    {lang === 'dr' ? 'تماس با ما' : 'Contact Us'}
                </a>
            </div>
        </section>
    );
};