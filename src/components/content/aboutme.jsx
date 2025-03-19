"use client"

import { setDescription, setSummaryTitle } from "@/lib/features/personalSummary";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PiStarFourDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

export default function AboutMe({viewTitle = true}) {
    const t = useTranslations('AboutMe');
    
    const [viewButton, setViewButton] = useState(false);

    const { name, role } = useSelector((state) => state.PersonalSummary);

    const dispatch = useDispatch();

    return (
        <div 
            className={`text-text-color-primary justify-center relative rounded-md ${viewButton && "outline-gray-300 outline-1 outline-dashed"}`} 
            onMouseEnter={()=>setViewButton(true)} 
            onMouseLeave={()=>setViewButton(false)}
        >
            {
                viewButton && 
                <label 
                    htmlFor="about_me_modal" 
                    className="btn absolute right-2 -top-2 btn-xs rounded-full"
                >
                    <PiStarFourDuotone />{t("aiAssistant.title")}
                </label>
            }

            {
                viewTitle &&
                <input 
                    type="text" 
                    placeholder={t("title")} 
                    value={name} 
                    onChange={(e)=> dispatch(setSummaryTitle(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-extrabold w-full" 
                    autoComplete="off"
                />
            }

            <input 
                type="text" 
                placeholder={t("placeholder")} 
                value={role} 
                onChange={(e)=> dispatch(setDescription(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 w-full" 
                autoComplete="off"
            />
        </div>
    )
}