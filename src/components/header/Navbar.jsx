import { useLangStore } from "../../store/useLangStore"
import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/icons/logo-KRC.svg'

export const Navbar = () => {
    const { t, lang, setLang } = useLangStore();

    const navLinks = [
        { to: '/', label: t.navbar.home },
        { to: '/cars', label: t.navbar.cars },
        { to: '/services', label: t.navbar.services },
        { to: '/faq', label: t.navbar.faq || (lang === 'dr' ? 'سوالات متداول' : 'FAQ') },
        { to: '/about', label: t.navbar.about },
    ];

//    The link that is active will have yellow underline
    const linkClass = ({ isActive }) =>
        `font-extrabold text-[15px] pb-1 border-b-2 transition-colors ${isActive
            ? 'text-brand-black border-brand-yellow'
            : 'text-brand-black border-transparent hover:border-gray-200'
        }`;

    const toggleLang = () => {
        setLang(lang === 'dr' ? 'en' : 'dr');
    };
    return (
        <header className="fixed top-[39px] inset-x-0 z-50 h-[81px]">
            <nav className="max-w-7xl mx-auto flex items-center px-6 gap-x-12">
                {/* Box 1: Logo */}
                <NavLink to="/" className="flex items-center gap-2 h-[81px]">
                    <img
                        src={logoImage}
                        alt={lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
                        loading="eager"
                        className="w-[81px] h-[81px] object-contain"
                    />
                    <span className="leading-none tracking-normal">
                        {lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
                    </span>
                </NavLink>

                {/* Box 2: Links */}
                <ul className="hidden md:flex items-center gap-x-[78px] bg-white rounded-[20px] px-6 py-3 shadow-sm h-[56px]">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Box 3: Language button */}
                <button
                    onClick={toggleLang}
                    className="font-extrabold text-[14px] text-brand-black hover:opacity-70 bg-white rounded-[20px] px-4 py-3 shadow-sm h-[56px]"
                >
                    {lang === 'dr' ? 'دری' : 'EN'}
                </button>

                {/* Box 4: Contact button */}

                <a href="tel:+93000000000"
                    className="hidden sm:flex items-center gap-2 justify-center bg-white font-[400] text-[18px] px-6 py-3 rounded-[20px] shadow-sm hover:opacity-90 transition-opacity"
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
            </nav>
        </header>
    )
}