// components/navbar/NavLinks.jsx
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const HeaderNavLinks = ({ navLinks }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();

    const scrollToSection = () => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/about") {
      navigate("/about#services");
      setTimeout(scrollToSection, 100);
    } else {
      navigate("/about#services", { replace: true });
      scrollToSection();
    }
  };

  const handleFaqClick = (e) => {
    e.preventDefault();

    const scrollToFaq = () => {
      document
        .getElementById("faq")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === "/") {
      scrollToFaq();
      return;
    }

    navigate("/");
    setTimeout(scrollToFaq, 200);
  };

  const getLinkClass = (isActive) =>
    `font-[400] text-[18px] pb-1 border-b-2 transition-colors focus:outline-none ${
      isActive
        ? "text-brand-black border-brand-yellow"
        : "text-brand-black border-transparent"
    }`;

  return (
    <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-10 bg-white rounded-[20px] px-4 lg:px-6 py-2 shadow-sm h-[56px]">
      {navLinks?.map((link) => {
        const isServicesActive =
          location.pathname === "/about" && location.hash === "#services";
        const isAboutActive =
          location.pathname === "/about" && location.hash !== "#services";

        return (
          <li key={link.label}>
            {link.isFaq ? (
              <button
                type="button"
                onClick={handleFaqClick}
                className={getLinkClass(false)}
              >
                {link.label}
              </button>
            ) : link.isScroll ? (
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
                className={({ isActive }) =>
                  getLinkClass(link.to === "/about" ? isAboutActive : isActive)
                }
                end={link.to === "/"}
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
