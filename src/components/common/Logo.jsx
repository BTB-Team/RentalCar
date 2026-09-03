import { NavLink } from "react-router-dom"
import { useLangStore } from "../../store/useLangStore";
import logoImage from '../../assets/icons/logo-KRC.svg'

export const Logo = () => {
    const { lang } = useLangStore();

    return (
        <NavLink to="/" className="flex items-center gap-1">
            <img
                src={logoImage}
                alt={lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
                loading="eager"
                className="w-[81px] h-[81px] object-contain"
            />
            <span className="leading-none tracking-normal text-[24px] font-extrabold text-brand-black">
                {lang === 'dr' ? 'کابل رینتال کار' : 'Kabul Rental Car'}
            </span>
        </NavLink>
    )
}