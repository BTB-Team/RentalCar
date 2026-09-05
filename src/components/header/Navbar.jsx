import { useLangStore } from "../../store/useLangStore"
import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/icons/logo-KRC.svg'
import { Logo } from "../common/Logo";
import { useEffect, useState, useRef } from "react";

export const Navbar = () => {
    const { t, lang, setLang } = useLangStore();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);   // last scroll position seen
    const anchorY = useRef(0);       // scroll position where current direction started

    useEffect(() => {
        // Minimum pixel scroll distance before toggling the navbar state
        const threshold = 10;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setIsVisible(true);
                anchorY.current = currentScrollY;
                lastScrollY.current = currentScrollY;
                return;
            }

            const scrollingDown = currentScrollY > lastScrollY.current;
            const scrollingUp = currentScrollY < lastScrollY.current;

            // Reset anchor when direction flips
            if (scrollingDown && currentScrollY < anchorY.current) {
                anchorY.current = currentScrollY;
            }
            if (scrollingUp && currentScrollY > anchorY.current) {
                anchorY.current = currentScrollY;
            }

            const distance = currentScrollY - anchorY.current;

            if (distance > threshold) {
                setIsVisible(false);   // scrolled down enough
                anchorY.current = currentScrollY;
            } else if (distance < -threshold) {
                setIsVisible(true);    // scrolled up enough
                anchorY.current = currentScrollY;
            }

            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: '/', label: t.navbar.home },
        { to: '/cars', label: t.navbar.cars },
        { to: '/services', label: t.navbar.services },
        { to: '/faq', label: t.navbar.faq || (lang === 'dr' ? 'سوالات متداول' : 'FAQ') },
        { to: '/about', label: t.navbar.about },
    ];

    //    The link that is active will have yellow underline
    const linkClass = ({ isActive }) =>
        `font-[400] text-[18px] pb-1 border-b-2 transition-colors focus:outline-none ${isActive
            ? 'text-brand-black border-brand-yellow'
            : 'text-brand-black border-transparent'
        }`;

    const toggleLang = () => {
        setLang(lang === 'dr' ? 'en' : 'dr');
    };
    return (
        <>
            <header className={`fixed top-[15px] left-0 w-full z-50 h-[81px] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className=" max-w-7xl w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Box 1: Logo */}
                    <Logo />
                    {/* Box 2: Links */}
                    <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-10 bg-white rounded-[20px] px-4 lg:px-6 py-2 shadow-sm h-[56px]">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 */}
                    {/* Box 3: Language button */}
                    {/* <button
                        onClick={toggleLang}
                        className="font-extrabold text-[13px] sm:text-[14px] text-brand-black hover:opacity-70 bg-white rounded-[20px] sm:px-4 px-3 py-3 shadow-sm h-[48px]  sm:h-[56px] focus:outline-none"
                    >
                        {lang === 'dr' ? 'EN' : 'دری'}
                    </button> */}
                    <div className="flex items-center bg-white p-1 rounded-full border border-gray-200 shadow-sm h-[48px] sm:h-[56px]">
                        <button
                            type="button"
                            onClick={() => setLang('en')}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 focus:outline-none ${lang === 'en'
                                ? 'bg-brand-yellow text-brand-black shadow-md scale-105'
                                : 'text-gray-500 hover:text-brand-black'
                                }`}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            onClick={() => setLang('dr')}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 focus:outline-none ${lang === 'dr'
                                ? 'bg-brand-yellow text-brand-black shadow-md scale-105'
                                : 'text-gray-500 hover:text-brand-black'
                                }`}
                        >
                            دری
                        </button>
                    </div>

                    {/* Box 4: Contact button */}

                    <a href="tel:+93000000000"
                        className="hidden md:flex items-center gap-2 justify-center bg-white font-[400] text-[16px] lg:text-[18px] px-4 lg:px-6 py-2.5 lg:py-3 rounded-[20px] shadow-sm hover:opacity-90 transition-opacity focus:outline-none"
                    >
                        <svg
                            width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="text-brand-yellow"
                        >
                            <path
                                d="M14.7332 19.9333L12.2665 22.4C11.7465 22.92 10.9198 22.92 10.3865 22.4133C10.2398 22.2667 10.0932 22.1333 9.9465 21.9867C8.59814 20.6294 7.35458 19.1719 6.2265 17.6267C5.13317 16.1067 4.25317 14.5867 3.61317 13.08C2.9865 11.56 2.6665 10.1067 2.6665 8.72C2.6665 7.81333 2.8265 6.94666 3.1465 6.14666C3.4665 5.33333 3.97317 4.58666 4.67984 3.92C5.53317 3.08 6.4665 2.66666 7.45317 2.66666C7.8265 2.66666 8.19984 2.74666 8.53317 2.90666C8.87984 3.06666 9.1865 3.30666 9.4265 3.65333L12.5198 8.01333C12.7598 8.34666 12.9332 8.65333 13.0532 8.94666C13.1732 9.22666 13.2398 9.50666 13.2398 9.76C13.2398 10.08 13.1465 10.4 12.9598 10.7067C12.7865 11.0133 12.5332 11.3333 12.2132 11.6533L11.1998 12.7067C11.0532 12.8533 10.9865 13.0267 10.9865 13.24C10.9865 13.3467 10.9998 13.44 11.0265 13.5467C11.0665 13.6533 11.1065 13.7333 11.1332 13.8133C11.3732 14.2533 11.7865 14.8267 12.3732 15.52C12.9732 16.2133 13.6132 16.92 14.3065 17.6267C14.4398 17.76 14.5865 17.8933 14.7198 18.0267C15.2532 18.5467 15.2665 19.4 14.7332 19.9333ZM29.2932 24.44C29.2914 24.9432 29.1775 25.4397 28.9598 25.8933C28.7332 26.3733 28.4398 26.8267 28.0532 27.2533C27.3998 27.9733 26.6798 28.4933 25.8665 28.8267C25.8532 28.8267 25.8398 28.84 25.8265 28.84C25.0398 29.16 24.1865 29.3333 23.2665 29.3333C21.9065 29.3333 20.4532 29.0133 18.9198 28.36C17.3865 27.7067 15.8532 26.8267 14.3332 25.72C13.8132 25.3333 13.2932 24.9467 12.7998 24.5333L17.1598 20.1733C17.5332 20.4533 17.8665 20.6667 18.1465 20.8133C18.2132 20.84 18.2932 20.88 18.3865 20.92C18.4932 20.96 18.5998 20.9733 18.7198 20.9733C18.9465 20.9733 19.1198 20.8933 19.2665 20.7467L20.2798 19.7467C20.6132 19.4133 20.9332 19.16 21.2398 19C21.5465 18.8133 21.8532 18.72 22.1865 18.72C22.4398 18.72 22.7065 18.7733 22.9998 18.8933C23.2932 19.0133 23.5998 19.1867 23.9332 19.4133L28.3465 22.5467C28.6932 22.7867 28.9332 23.0667 29.0798 23.4C29.2132 23.7333 29.2932 24.0667 29.2932 24.44Z"
                                fill="currentColor"
                            />
                        </svg>
                        {t.navbar.contact}
                    </a>
                    {/* Mobile menu toggle */}

                    <button
                        className="md:hidden text-brand-black hover:opacity-70 bg-white rounded-[20px] sm:px-4 px-3 py-3 shadow-sm h-[48px] sm:h-[56px] focus:outline-none"

                        onClick={() => setIsMobileOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6 w-5 h-5 text-brand-black">
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </nav>

                {/* md:hidden bg-white shadow-md mx-4 mt-2 rounded-[20px] max-h-[70vh] overflow-y-auto */}

                {/* Mobile menu */}
                {/* {isMobileOpen && (
                <div className="md:hidden bg-white shadow-md mx-h-[70vh] overflow-y-auto rounded-[20px]">
                    <ul className="flex flex-col items-center gap-y-4 py-4">
                        {navLinks.map((link) => (
                            <li
                                key={link.to}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}


            </header>

            {/* Full-Screen Mobile Drawer */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 md:hidden overflow-y-auto animate-in fade-in duration-200">
                    {/* Top Header: Close Button (Left) & Brand Logo (Right) */}
                    <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-black hover:bg-brand-yellow transition-colors focus:outline-none"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div onClick={() => setIsMobileOpen(false)} className="cursor-pointer">
                            <Logo />
                        </div>
                    </div>

                    {/* Navigation Links Card Stack */}
                    <div className="my-auto py-6">
                        <ul className={`flex flex-col gap-y-3 w-full ${lang === 'dr' ? 'text-right' : 'text-left'}`}>
                            {navLinks.map((link) => (
                                <li key={link.to} className="w-full" onClick={() => setIsMobileOpen(false)}>
                                    <NavLink
                                        to={link.to}
                                        end={link.to === '/'}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-200 ${isActive
                                                ? 'bg-brand-yellow text-brand-black shadow-sm font-bold'
                                                : 'text-brand-black hover:bg-gray-50'
                                            }`
                                        }
                                    >
                                        <span>{link.label}</span>
                                        <span className={`text-sm opacity-60 ${lang === 'dr' ? 'rotate-180' : ''}`}>
                                            ➔
                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom CTA Block */}
                    <div className="flex flex-col gap-4 pt-5 border-t border-gray-100 w-full">
                        {/* Phone Quick Link */}
                        <a
                            href="tel:+93000000000"
                            className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-gray-50 text-brand-black font-semibold border border-gray-100 hover:border-brand-yellow transition-colors dir-ltr"
                        >
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="text-brand-black">
                                <path d="M14.7332 19.9333L12.2665 22.4C11.7465 22.92 10.9198 22.92 10.3865 22.4133C10.2398 22.2667 10.0932 22.1333 9.9465 21.9867C8.59814 20.6294 7.35458 19.1719 6.2265 17.6267C5.13317 16.1067 4.25317 14.5867 3.61317 13.08C2.9865 11.56 2.6665 10.1067 2.6665 8.72C2.6665 7.81333 2.8265 6.94666 3.1465 6.14666C3.4665 5.33333 3.97317 4.58666 4.67984 3.92C5.53317 3.08 6.4665 2.66666 7.45317 2.66666C7.8265 2.66666 8.19984 2.74666 8.53317 2.90666C8.87984 3.06666 9.1865 3.30666 9.4265 3.65333L12.5198 8.01333C12.7598 8.34666 12.9332 8.65333 13.0532 8.94666C13.1732 9.22666 13.2398 9.50666 13.2398 9.76C13.2398 10.08 13.1465 10.4 12.9598 10.7067C12.7865 11.0133 12.5332 11.3333 12.2132 11.6533L11.1998 12.7067C11.0532 12.8533 10.9865 13.0267 10.9865 13.24C10.9865 13.3467 10.9998 13.44 11.0265 13.5467C11.0665 13.6533 11.1065 13.7333 11.1332 13.8133C11.3732 14.2533 11.7865 14.8267 12.3732 15.52C12.9732 16.2133 13.6132 16.92 14.3065 17.6267C14.4398 17.76 14.5865 17.8933 14.7198 18.0267C15.2532 18.5467 15.2665 19.4 14.7332 19.9333ZM29.2932 24.44C29.2914 24.9432 29.1775 25.4397 28.9598 25.8933C28.7332 26.3733 28.4398 26.8267 28.0532 27.2533C27.3998 27.9733 26.6798 28.4933 25.8665 28.8267C25.8532 28.8267 25.8398 28.84 25.8265 28.84C25.0398 29.16 24.1865 29.3333 23.2665 29.3333C21.9065 29.3333 20.4532 29.0133 18.9198 28.36C17.3865 27.7067 15.8532 26.8267 14.3332 25.72C13.8132 25.3333 13.2932 24.9467 12.7998 24.5333L17.1598 20.1733C17.5332 20.4533 17.8665 20.6667 18.1465 20.8133C18.2132 20.84 18.2932 20.88 18.3865 20.92C18.4932 20.96 18.5998 20.9733 18.7198 20.9733C18.9465 20.9733 19.1198 20.8933 19.2665 20.7467L20.2798 19.7467C20.6132 19.4133 20.9332 19.16 21.2398 19C21.5465 18.8133 21.8532 18.72 22.1865 18.72C22.4398 18.72 22.7065 18.7733 22.9998 18.8933C23.2932 19.0133 23.5998 19.1867 23.9332 19.4133L28.3465 22.5467C28.6932 22.7867 28.9332 23.0667 29.0798 23.4C29.2132 23.7333 29.2932 24.0667 29.2932 24.44Z" fill="currentColor" />
                            </svg>
                            <span className="tracking-wide">+93 000 000 000</span>
                        </a>

                        {/* Primary Action Button */}
                        <a
                            href="tel:+93000000000"
                            onClick={() => setIsMobileOpen(false)}
                            className="w-full bg-brand-black text-white text-center py-4 rounded-xl font-bold text-base shadow-md hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
                        >
                            {t.navbar.contact}
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}