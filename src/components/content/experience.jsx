import { PiStarFourDuotone } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaArrowsAltV } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setEmployeer, setExpFromUntil, setPosition, setExpTitle, addExperience } from "@/lib/features/experience";

export default function Experience({reorderComponent, fitPosition = false}) {
    const [viewButton, setViewButton] = useState(false);

    const { title, listOfExperiences } = useSelector((state) => state.Experience);
    const dispatch = useDispatch();

    return (
        <>         
            <input 
                type="text" 
                placeholder="EXPERIENCE" 
                value={title} 
                onChange={(e)=>dispatch(setExpTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                autoComplete="off"
            />

            {
                listOfExperiences.map(({employeer, position, fromUntil, description}, index) => (
                    <div data-swapy-slot={index} key={index}>
                        <div 
                            className={`
                                grid grid-cols-[8%_25%_67%] justify-center relative rounded-md 
                                ${viewButton === index && "outline-gray-300 outline-1 outline-dashed"}`
                            } 
                            onMouseEnter={()=>setViewButton(index)} 
                            onMouseLeave={()=>setViewButton(false)}
                        >
                            {
                                viewButton === index &&
                                <div className="absolute right-2 -top-2 flex gap-1">
                                    <label htmlFor="experience_modal" className="btn btn-xs rounded-full"><PiStarFourDuotone />WRITING ASSISTANT</label>
                                    {
                                        listOfExperiences.length > 1 &&
                                        <>
                                            <button className="btn btn-xs btn-circle tooltip" data-tip="Remove"><FaMinus /></button>
                                            <button className="btn btn-xs btn-circle tooltip" data-tip="Reorder"><FaArrowsAltV /></button>
                                        </>
                                    }
                                    <button  
                                        onClick={()=>dispatch(addExperience())}
                                        className="btn btn-xs btn-circle tooltip" 
                                        data-tip="Add"
                                    ><GoPlus /></button>
                                </div> 
                            }      

                            {
                                reorderComponent(
                                    <input 
                                        type="text" 
                                        placeholder="Employer" 
                                        value={employeer} 
                                        onChange={(e)=>dispatch(setEmployeer({index, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold col-span-2" 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder="POSITION" 
                                        value={position} 
                                        onChange={(e)=>dispatch(setPosition({index, value: e.target.value}))} 
                                        className={
                                            `hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold col-start-2 
                                            ${fitPosition && "field-sizing-content"}`
                                        } 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder="From - Until" 
                                        value={fromUntil} 
                                        onChange={(e)=>dispatch(setExpFromUntil({index, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold field-sizing-content" 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder="Enter your work experience description" 
                                        value={description} 
                                        onChange={(e)=>dispatch(setDescription({index, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold w-full" 
                                        autoComplete="off"
                                    />
                                )
                            }

                        </div>
                    </div>
                ))
            }
        </>
    )
}