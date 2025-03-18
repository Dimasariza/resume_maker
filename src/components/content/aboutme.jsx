"use client"

import { setDescription, setSummaryTitle } from "@/lib/features/personalSummary";
import { useState } from "react";
import { PiStarFourDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

export default function AboutMe({viewTitle = true}) {
    const [viewButton, setViewButton] = useState(false);

    const { name, role } = useSelector((state) => state.PersonalSummary);
    const dispatch = useDispatch();

    return (
        <div 
            className={`justify-center relative rounded-md ${viewButton && "outline-gray-300 outline-1 outline-dashed"}`} 
            onMouseEnter={()=>setViewButton(true)} 
            onMouseLeave={()=>setViewButton(false)}
        >
            {
                viewButton && 
                <label 
                    htmlFor="about_me_modal" 
                    className="btn absolute right-2 -top-2 btn-xs rounded-full"
                >
                    <PiStarFourDuotone />WRITING ASSISTANT
                </label>
            }

            {
                viewTitle &&
                <input 
                    type="text" 
                    placeholder="ABOUT ME" 
                    value={name} 
                    onChange={(e)=> dispatch(setSummaryTitle(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 text-2xl font-bold w-full" 
                    autoComplete="off"
                />
            }

            <input 
                type="text" 
                placeholder="Enter your professional summary" 
                value={role} 
                onChange={(e)=> dispatch(setDescription(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold w-full" 
                autoComplete="off"
            />
        </div>
    )
}