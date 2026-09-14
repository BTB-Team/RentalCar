import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const MobileDrawer = ({ isOpen, onClose, navLinks, lang, contactText, }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleServicesClick = (e) => {
    e.preventDefault();
    onClose();

    if (location.pathname !== "/about") {
      navigate("/about#services");
      setTimeout(() => {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.hash = "services";
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFaqClick = (e) => {
    e.preventDefault();
    onClose();

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

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 xl:hidden overflow-y-auto animate-in fade-in duration-200">
      <div className="flex items-center justify-between pb-5 border-b border-gray-100">
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-brand-black hover:bg-brand-yellow transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div onClick={onClose} className="cursor-pointer">
          <Logo />
        </div>
      </div>

      <div className="my-auto py-6">
        <ul
          className={`flex flex-col gap-y-3 w-full ${lang === "dr" ? "text-right" : "text-left"}`}
        >
          {navLinks.map((link) => {
            const isServicesActive =
              location.pathname === "/about" && location.hash === "#services";
            const isAboutActive =
              location.pathname === "/about" && location.hash !== "#services";

            const getButtonClass = (isActive) =>
              `flex items-center justify-between px-5 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-200 w-full ${isActive
                ? "bg-brand-yellow text-white shadow-sm font-bold"
                : "text-brand-black hover:bg-gray-50"
              }`;

            return (
              <li
                key={link.label}
                className="w-full border border-gray-100 rounded-2xl"
              >
                {link.isFaq ? (
                  <button
                    type="button"
                    onClick={handleFaqClick}
                    className={getButtonClass(false)}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`text-sm opacity-60 ${lang === "dr" ? "rotate-180" : ""}`}
                    >
                      ➔
                    </span>
                  </button>
                ) : link.isScroll ? (
                  <button
                    type="button"
                    onClick={handleServicesClick}
                    className={getButtonClass(isServicesActive)}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`text-sm opacity-60 ${lang === "dr" ? "rotate-180" : ""}`}
                    >
                      ➔
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      getButtonClass(
                        link.to === "/about" ? isAboutActive : isActive,
                      )
                    }
                  >
                    <span>{link.label}</span>
                    <span
                      className={`text-sm opacity-60 ${lang === "dr" ? "rotate-180" : ""}`}
                    >
                      ➔
                    </span>
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
          className="w-full bg-brand-black text-white flex gap-3 items-center justify-center py-4 rounded-xl font-bold text-base shadow-md hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8918 17.4416L10.7335 19.5999C10.2785 20.0549 9.55516 20.0549 9.0885 19.6116C8.96016 19.4832 8.83183 19.3666 8.7035 19.2382C7.52368 18.0506 6.43556 16.7753 5.4485 15.4233C4.49183 14.0933 3.72183 12.7633 3.16183 11.4449C2.6135 10.1149 2.3335 8.84325 2.3335 7.62992C2.3335 6.83658 2.4735 6.07825 2.7535 5.37825C3.0335 4.66659 3.47683 4.01325 4.09516 3.42992C4.84183 2.69492 5.6585 2.33325 6.52183 2.33325C6.8485 2.33325 7.17516 2.40325 7.46683 2.54325C7.77016 2.68325 8.0385 2.89325 8.2485 3.19659L10.9552 7.01158C11.1652 7.30325 11.3168 7.57158 11.4218 7.82825C11.5268 8.07325 11.5852 8.31825 11.5852 8.53992C11.5852 8.81992 11.5035 9.09992 11.3402 9.36825C11.1885 9.63658 10.9668 9.91658 10.6868 10.1966L9.80016 11.1183C9.67183 11.2466 9.6135 11.3983 9.6135 11.5849C9.6135 11.6783 9.62516 11.7599 9.6485 11.8533C9.6835 11.9466 9.7185 12.0166 9.74183 12.0866C9.95183 12.4716 10.3135 12.9733 10.8268 13.5799C11.3518 14.1866 11.9118 14.8049 12.5185 15.4233C12.6352 15.5399 12.7635 15.6566 12.8802 15.7733C13.3468 16.2283 13.3585 16.9749 12.8918 17.4416ZM25.6318 21.3849C25.6303 21.8252 25.5306 22.2596 25.3402 22.6566C25.1418 23.0766 24.8852 23.4732 24.5468 23.8466C23.9752 24.4766 23.3452 24.9316 22.6335 25.2232C22.6218 25.2232 22.6102 25.2349 22.5985 25.2349C21.9102 25.5149 21.1635 25.6666 20.3585 25.6666C19.1685 25.6666 17.8968 25.3866 16.5552 24.8149C15.2135 24.2432 13.8718 23.4732 12.5418 22.5049C12.0868 22.1666 11.6318 21.8282 11.2002 21.4666L15.0152 17.6516C15.3418 17.8966 15.6335 18.0832 15.8785 18.2116C15.9368 18.2349 16.0068 18.2699 16.0885 18.3049C16.1818 18.3399 16.2752 18.3516 16.3802 18.3516C16.5785 18.3516 16.7302 18.2816 16.8585 18.1533L17.7452 17.2783C18.0368 16.9866 18.3168 16.7649 18.5852 16.6249C18.8535 16.4616 19.1218 16.3799 19.4135 16.3799C19.6352 16.3799 19.8685 16.4266 20.1252 16.5316C20.3818 16.6366 20.6502 16.7883 20.9418 16.9866L24.8035 19.7282C25.1068 19.9382 25.3168 20.1832 25.4452 20.4749C25.5618 20.7666 25.6318 21.0582 25.6318 21.3849Z" fill="white" />
          </svg>

          {contactText}
        </a>
      </div>
    </div>
  );
};
