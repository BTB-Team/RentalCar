import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../common/Logo';

export const MobileDrawer = ({ isOpen, onClose, navLinks, lang, contactText }) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleServicesClick = (e) => {
        e.preventDefault();
        onClose();

        if (location.pathname !== '/about') {
            navigate('/about#services');
            setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.location.hash = 'services';
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 md:hidden overflow-y-auto animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-black hover:bg-brand-yellow transition-colors focus:outline-none"
                    aria-label="Close menu"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div onClick={onClose} className="cursor-pointer">
                    <Logo />
                </div>
            </div>

            <div className="my-auto py-6">
                <ul className={`flex flex-col gap-y-3 w-full ${lang === 'dr' ? 'text-right' : 'text-left'}`}>
                    {navLinks.map((link) => {
                        const isServicesActive = location.pathname === '/about' && location.hash === '#services';
                        const isAboutActive = location.pathname === '/about' && location.hash !== '#services';

                        const getButtonClass = (isActive) =>
                            `flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-200 w-full ${isActive ? 'bg-brand-yellow text-brand-black shadow-sm font-bold' : 'text-brand-black hover:bg-gray-50'
                            }`;

                        return (
                            <li key={link.label} className="w-full">
                                {link.isScroll ? (
                                    <button
                                        type="button"
                                        onClick={handleServicesClick}
                                        className={getButtonClass(isServicesActive)}
                                    >
                                        <span>{link.label}</span>
                                        <span className={`text-sm opacity-60 ${lang === 'dr' ? 'rotate-180' : ''}`}>➔</span>
                                    </button>
                                ) : (
                                    <NavLink
                                        to={link.to}
                                        onClick={onClose}
                                        end={link.to === '/'}
                                        className={() => getButtonClass(link.to === '/about' ? isAboutActive : undefined)}
                                    >
                                        <span>{link.label}</span>
                                        <span className={`text-sm opacity-60 ${lang === 'dr' ? 'rotate-180' : ''}`}>➔</span>
                                    </NavLink>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex flex-col gap-4 pt-5 border-t border-gray-100 w-full">
                <a
                    href="tel:+93786377417"
                    onClick={onClose}
                    className="w-full bg-brand-black text-white text-center py-4 rounded-xl font-bold text-base shadow-md hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
                >
                    {contactText}
                </a>
            </div>
        </div>
    );
};