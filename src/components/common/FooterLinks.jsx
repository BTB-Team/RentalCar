import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const FooterLinks = ({ content }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e, link) => {
        // Handle section scroll for Services link (#services)
        if (link.isScroll) {
            e.preventDefault();
            if (location.pathname !== '/about') {
                navigate('/about#services');
                setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                window.location.hash = 'services';
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        // For regular pages, scroll straight to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ul className="space-y-3 text-[15px] font-[600]">
            {content.links.map((link) => (
                <li key={link.label}>
                    <NavLink
                        to={link.href}
                        onClick={(e) => handleLinkClick(e, link)}
                        className="flex items-center gap-2 hover:text-[#FFD000] transition-colors text-[20px] font-[400]"
                    >
                        {/* Auto-flips in RTL mode without duplicating SVG code */}
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rtl:rotate-180 transition-transform"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.68271 6.12832L1.55429 -9.26403e-05L0.02246 1.53174L5.38496 6.89424L0.02246 12.2567L1.55429 13.7886L7.68271 7.66016C7.8858 7.457 7.99989 7.1815 7.99989 6.89424C7.99989 6.60698 7.8858 6.33148 7.68271 6.12832Z"
                                fill="#F7D102"
                            />
                        </svg>
                        <span>{link.label}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};