'use client'

import { NavBarLayout } from "./layout";
import { NavBarColor } from "./color";
import { NavBarTypography } from "./typography";
import { NavBarSections } from "./sections";
import { BsDownload } from "react-icons/bs";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import AppLocale from "./locale";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function NavBar(params) {
    const t = useTranslations('Navbar');

    const menuItem = [
        { name: t("layout.title"), icon: '', subMenu: NavBarLayout },
        { name: t("color.title"), icon: '', subMenu: NavBarColor },
        { name: t("typography.title"), icon: '', subMenu: NavBarTypography },
        { name: t("section.title"), icon: '', subMenu: NavBarSections },
    ]

    const [loading, setLoading] = useState(false);

    return (
        <header className="nunito flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-900">
            <nav className="w-full mx-auto px-4 md:px-6 lg:px-8 flex justify-between navbar bg-base-100 shadow-sm">
                <div className="flex">
                    <img src="./logo.svg" alt="Logo" />
                    <span className="text-2xl ml-2">ResumeMaker</span>
                </div>
                
                <div className="flex">
                    {
                        menuItem.map((item, index) => ( 
                             <div className="dropdown dropdown-center" key={index}>     
                                <div tabIndex={index} role="button" className="btn btn-ghost">
                                    { item.name }<IoIosArrowDown />
                                </div>
                                <div tabIndex={index} className="menu w-max dropdown-content bg-base-100 rounded-box p-2">
                                    { item.subMenu && <item.subMenu /> }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex gap-2">
                    <AppLocale />
                    <button className="btn btn-ghost disabled" disabled>
                        {t("import.title")}
                        <div className="badge badge-info text-white">{t("import.badge")}<PiStarFourFill/></div>
                    </button>
                    <label htmlFor="download_content" className="btn  btn-warning">
                        {
                            loading
                            ? <span className="loading loading-spinner loading-xs"></span>
                            : <BsDownload /> 
                        }
                        {t("download.title")}
                    </label>
                </div>

                <input type="checkbox" id="set_loading" className="invisible" onChange={()=>setLoading(prev => !prev)} />

            </nav>
        </header>
    )
}

export default NavBar;