import { NavLink } from "react-router-dom"
import { useLangStore } from "../../store/useLangStore";
import logoImage from '../../assets/icons/logo-KRC.svg'

export const Logo = () => {
    const { lang } = useLangStore();

    return (
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img
                src={logoImage}
                alt={lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
                loading="eager"
                className="md:w-[81px] md:h-[81px] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain"
            />
            <span className="leading-tight tracking-normal sm:text-[14px] text-[12px] md:text-[24px] font-extrabold text-brand-black max-w-[90px] sm:max-w-none">
                {lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
            </span>
        </NavLink>
    )
}