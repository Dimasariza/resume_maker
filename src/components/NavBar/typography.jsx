import { setFont, setFontSize } from "@/lib/features/switchTypography";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";

export function NavBarTypography() {
    const t = useTranslations('Navbar.typography');

    const { font, size } = useSelector((state) => state.SwitchTypography);
    const dispatch = useDispatch();

    const typography = [
        { class: "nunito", name: "Nunito" },
        { class: "archivo_narrow", name: "Archivo Narrow" },
        { class: "syne", name: "Syne" },
        { class: "dm_serif_display-dm_sans", name: "DM Serif Display + DM Sans" },
        { class: "poppins", name: "Poppins" },
        { class: "rubik", name: "Rubik" },
        { class: "fira_sans", name: "Fira Sans" },
        { class: "josefin_sans", name: "Josefin Sans" },
        { class: "roboto_mono", name: "Roboto mono" },
        { class: "fjalla_one-inter", name: "Fjalla One + Inter" },
    ]

    const typographySize = [
        { name: t("size.small"), id: "small" },
        { name: t("size.medium"), id: "medium" },
        { name: t("size.big"), id: "big" },
    ]

    const handleClickFont = (font) => {
        const elem = document.activeElement;
        if (elem) elem?.blur();

        dispatch(setFont(font))
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="">{t("font.title")}</label>
            <div className="dropdown dropdown-center w-full">
                <div tabIndex={1} role="button" className="btn w-full capitalize">
                    { typography.find(item => item.class == font).name }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        typography.map((item, index) => (
                            <li key={index} onClick={()=>handleClickFont(item.class)} >
                                <a>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <label htmlFor="">{t("size.title")}</label>
            <div className="flex join justify-center">
                
                {
                    typographySize.map(({name, id}) => (
                        <input 
                            onChange={() => dispatch(setFontSize(id))} 
                            key={id} 
                            className="join-item btn" 
                            type="radio" 
                            name="typography" 
                            aria-label={name} 
                            checked={id === size}
                        />
                    ))
                }
            </div>
        </div>
    )
}