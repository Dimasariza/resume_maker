'use client'

import { NavBarLayout } from "./layout";
import { NavBarColor } from "./color";
import { NavBarTypography } from "./typography";
import { NavBarSections } from "./sections";
import { BsDownload } from "react-icons/bs";
import { PiStarFourFill } from "react-icons/pi";
import { PiGlobe } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export function NavBar(params) {


    const menuItem = [
        { name: "Layout", icon: '', subMenu: NavBarLayout },
        { name: "Color", icon: '', subMenu: NavBarColor },
        { name: "Typography", icon: '', subMenu: NavBarTypography },
        { name: "Sections", icon: '', subMenu: NavBarSections },
    ]

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-900">
            <nav className="w-full mx-auto px-4 md:px-6 lg:px-8 flex justify-between navbar bg-base-100 shadow-sm">
                <div className="flex">
                    <img src="./logo.svg" alt="Logo" />
                    <span className="text-2xl ml-2">ResumeMaker.Online</span>
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

                <div className="">
                    <div className="dropdown dropdown-center">     
                        <div tabIndex={4} role="button" className="btn btn-ghost">
                        <PiGlobe />
                            { "En" }
                        </div>
                        <div tabIndex={4}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            { 
                                ["English", "Espanol", "Francais", "Deutsch", "Italiano", "Nederlands", "Svenska", "Dansk", "Norsk", "Portugis", "Polski"].map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </div>
                    </div>
                    <button className="btn btn-ghost">
                        Import
                        <div className="badge badge-info text-white">New<PiStarFourFill/></div>
                    </button>
                    <button className="btn btn-active btn-warning">
                        <BsDownload />
                        Download
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;