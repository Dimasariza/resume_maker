"use client"
import { setPictureToggle, switchToggle } from "@/lib/features/switchSection";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export function NavBarSections() {    
    const section = useSelector((state) => state.SwitchSection);
    const dispatch = useDispatch();

    const initiateTemplate = {
        type: "",
        placement: "",
        title: "",
        description: ""
    }
    
    const [customTemplate, setCustomTemplate] = useState(initiateTemplate)

    const toggle = [
        { name : "Picture" },
        { name : "Location" },
        { name : "About Me" },
        { name : "Phone Number" },
        { name : "Role" },
        { name : "Email" },
        { name : "Work Experience" },
        { name : "Website" },
        { name : "Education" },
        { name : "LinkedIn" },
        { name : "Skills" },
        { name : "Custom 1" },
        { name : "Languages" },
        { name : "Custom 2" },
        { name : "Hobbies" },
    ]

    return (
        <div className="p-2">
            <div className="grid grid grid-cols-2 gap-2">
                <span>Personal Details</span>
                {
                    toggle.map((item, index) => (
                        <label className="fieldset-label" key={index}>
                            <input type="checkbox" 
                                checked={section[item.name]} 
                                onChange={()=>dispatch(switchToggle(item.name))} 
                                className="toggle toggle-xs" 
                            />
                            { item.name }
                        </label>
                    ))
                }
            </div>

            <div className="divider"></div>

            <span>Add Custom Section</span>

            <div className="flex w-full justify-between items-center gap-2">
                <div className="dropdown dropdown-center w-full">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1 w-full">Click  ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>Select Type</li>
                        {   
                            ["Text Section", "List Section"].map((item, index) => (
                                <li key={index}><a>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="dropdown dropdown-center w-full">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1 w-full">Click  ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>Select Placement</li>
                        {   
                            ["Left Column", "Right Column"].map((item, index) => (
                                <li key={index}><a>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <button className="btn btn-square btn-sm btn-outline btn-info">
                    <FiPlus />
                </button>
            </div>
        </div>
    )
}