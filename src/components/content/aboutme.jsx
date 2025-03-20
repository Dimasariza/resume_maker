"use client"

import { setSelfDescription, setSummaryTitle } from "@/lib/features/personalSummary";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PiStarFourDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import ModalSummary from "../AIModal/modalSummary";

export default function AboutMe({viewTitle = true}) {
    const t = useTranslations('AboutMe');
    
    const [viewButton, setViewButton] = useState(false);

    const { title, description } = useSelector((state) => state.PersonalSummary);

    const dispatch = useDispatch();

    return (
        <div 
            className={`justify-center relative rounded-md ${viewButton && "outline-gray-300 outline-1 outline-dashed"}`} 
            onMouseEnter={()=>setViewButton(true)} 
            onMouseLeave={()=>setViewButton(false)}
        >
            <ModalSummary />
            {
                viewButton && 
                <label 
                    htmlFor="about_me_modal" 
                    className="btn absolute right-2 -top-2 btn-xs rounded-full btn-dash btn-primary"
                >
                    <PiStarFourDuotone />{t("aiAssistant.title")}
                </label>
            }

            {
                viewTitle &&
                <input 
                    type="text" 
                    placeholder={t("title")} 
                    value={title} 
                    onChange={(e)=> dispatch(setSummaryTitle(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-extrabold w-full" 
                    autoComplete="off"
                />
            }

            <textarea 
                autoComplete="off"
                placeholder={t("placeholder")} 
                value={description} 
                onChange={(e)=> dispatch(setSelfDescription(e.target.value))} 
                wrap="soft" 
                className="p-1 text-base textarea min-h-min hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 field-sizing-content textarea-ghost resize-none w-full" 
            ></textarea>
        </div>
    )
}