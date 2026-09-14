import { NavLink } from "react-router-dom"
import { useLangStore } from "../../store/useLangStore";
import logoImage from '../../assets/icons/logo-KRC.svg'

export const Logo = () => {
    const { lang } = useLangStore();

    return (
        <NavLink to="/" className="flex items-center gap-2 shrink-0 focus:outline-none">
            <img
                src={logoImage}
                alt={lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
                loading="eager"
                className="lg:w-[81px] lg:h-[81px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain"
            />
            <span className="leading-tight tracking-normal md:text-[14px] text-[12px] lg:text-[24px] font-extrabold text-brand-black max-w-[90px] sm:max-w-none">
                {lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
            </span>
        </NavLink>
    )
}