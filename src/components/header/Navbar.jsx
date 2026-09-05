import { useState } from 'react';
import { useLangStore } from '../../store/useLangStore';
import { Logo } from '../common/Logo';
import { HeaderNavLinks } from '../common/HeaderNavLinks';
import { MobileDrawer } from '../common/MobileDrawer';
import { ScrollToTopButton } from '../common/ScrollToTopButton';
import { useScrollVisibility } from './useScrollVisibility';

export const Navbar = () => {
    const { t, lang, setLang } = useLangStore();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { isVisible, showScrollTop, scrollToTop } = useScrollVisibility();

    const navLinks = [
        { to: '/', label: t.navbar.home },
        { to: '/cars', label: t.navbar.cars },
        { to: '/about', label: t.navbar.services, isScroll: true },
        { to: '/faq', label: t.navbar.faq || (lang === 'dr' ? 'سوالات متداول' : 'FAQ') },
        { to: '/about', label: t.navbar.about },
    ];

    return (
        <>
            <header
                className={`fixed top-[15px] left-0 w-full z-50 h-[81px] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+20px)]'
                    }`}
            >
                <nav className="max-w-7xl w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Logo />
                    <HeaderNavLinks navLinks={navLinks} />

                    <div className="flex items-center bg-white rounded-[20px] p-1.5 shadow-sm border border-gray-100 h-[48px] sm:h-[56px] gap-1">
                        {/* Language Toggle Button (Shows target language) */}
                        <button
                            type="button"
                            onClick={() => setLang(lang === 'dr' ? 'en' : 'dr')}
                            className="flex items-center justify-center px-3 sm:px-4 h-full rounded-[16px] font-bold text-xs sm:text-sm text-brand-black bg-gray-100 hover:bg-brand-yellow transition-all duration-200 focus:outline-none"
                            aria-label="Switch language"
                        >
                            {lang === 'dr' ? 'EN' : 'دری'}
                        </button>

                        {/* Divider */}
                        <div className="w-[1px] h-6 bg-gray-200 my-auto md:hidden" />

                        {/* Mobile Menu Toggle Button */}
                        <button
                            type="button"
                            onClick={() => setIsMobileOpen((prev) => !prev)}
                            className="md:hidden flex items-center justify-center p-2 sm:p-2.5 h-full rounded-[16px] text-brand-black hover:bg-gray-100 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? (
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-black">
                                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-black">
                                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <a
                        href="tel:+93000000000"
                        className="hidden md:flex items-center gap-2 justify-center bg-white text-[16px] lg:text-[18px] px-4 lg:px-6 py-2.5 lg:py-3 rounded-[20px] shadow-sm hover:opacity-90"
                    >
                        {t.navbar.contact}
                    </a>
                </nav>
            </header>

            <MobileDrawer
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
                navLinks={navLinks}
                lang={lang}
                contactText={t.navbar.contact}
            />

            <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
        </>
    );
};