// components/navbar/NavLinks.jsx
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const HeaderNavLinks = ({ navLinks }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleServicesClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/about') {
            navigate('/about');
            setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getLinkClass = (isActive) =>
        `font-[400] text-[18px] pb-1 border-b-2 transition-colors focus:outline-none ${isActive ? 'text-brand-black border-brand-yellow' : 'text-brand-black border-transparent'
        }`;

    return (
        <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-10 bg-white rounded-[20px] px-4 lg:px-6 py-2 shadow-sm h-[56px]">
            {navLinks?.map((link) => {
                const isServicesActive = location.pathname === '/about' && location.hash === '#services';
                const isAboutActive = location.pathname === '/about' && location.hash !== '#services';

                return (
                    <li key={link.label}>
                        {link.isScroll ? (
                            <button
                                type="button"
                                onClick={handleServicesClick}
                                className={getLinkClass(isServicesActive)}
                            >
                                {link.label}
                            </button>
                        ) : (
                            <NavLink
                                to={link.to}
                                className={() => getLinkClass(link.to === '/about' ? isAboutActive : undefined)}
                                end={link.to === '/'}
                            >
                                {link.label}
                            </NavLink>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};