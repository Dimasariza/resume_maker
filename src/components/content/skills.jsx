"use client"

import { GoPlus } from "react-icons/go";
import { PiStarFourDuotone } from "react-icons/pi";
import { VscArrowSwap } from "react-icons/vsc";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";
import { addSkill, setSkill, setSkillTitle } from "@/lib/features/skills";
import { useDispatch, useSelector } from "react-redux";

export default function Skills() {
    const [viewButton, setViewButton] = useState({assitant: false, skill: false});
    const { title, listOfSkills } = useSelector((state) => state.Skills);
    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(listOfSkills, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(listOfSkills, 'id', slotItemMap), [listOfSkills, slotItemMap])

    const swapyRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, listOfSkills, 'id', slotItemMap, setSlotItemMap)
    }, [listOfSkills])

    useEffect(() => {
        swapyRef.current = createSwapy(containerRef.current, {
            manualSwap: true,
        })

        swapyRef.current.onSwap((event) => {
            setSlotItemMap(event.newSlotItemMap.asArray)
        })

        return () => {
            swapyRef.current?.destroy()
        }
    }, [])

    return (
        <div 
            ref={containerRef}
            className={`justify-center relative rounded-md ${viewButton.assitant && "outline-gray-300 outline-1 outline-dashed"}`} 
            onMouseEnter={()=>setViewButton(prev => ({...prev, assitant: true}))} 
            onMouseLeave={()=>setViewButton(prev => ({...prev, assitant: false}))}
        >         
            {
                viewButton.assitant && 
                <label htmlFor="skills_modal" className="btn absolute right-2 -top-2 btn-xs rounded-full">
                    <PiStarFourDuotone />WRITING ASSISTANT
                </label>
            } 

            <input 
                type="text" 
                placeholder="SKILLS" 
                value={title} 
                onChange={(e)=>dispatch(setSkillTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                autoComplete="off"
            />

            <div className="flex w-full flex-wrap gap-3">
                {
                    slottedItems.map(({ slotId, itemId, item }, index) => (
                        <div key={index} data-swapy-slot={slotId}>
                            <div 
                                className="relative w-min" 
                                onMouseEnter={()=>setViewButton(prev => ({...prev, skill: item.id}))} 
                                onMouseLeave={()=>setViewButton(prev => ({...prev, skill: false}))}
                                data-swapy-item={itemId} key={itemId}
                            >
                                {
                                    viewButton.skill === item.id &&
                                    <div className="absolute right-2 -top-2 flex gap-1">
                                        {
                                            listOfSkills.length > 1 &&
                                            <>
                                                <button 
                                                    className="btn btn-xs btn-circle tooltip" 
                                                    data-tip="Remove" 
                                                ><FaMinus /></button>
                                                <button 
                                                    className="btn btn-xs btn-circle tooltip" 
                                                    data-tip="Reorder"
                                                    data-swapy-handle
                                                ><VscArrowSwap /></button>
                                            </>
                                        }
                                        <button 
                                            className="btn btn-xs btn-circle tooltip" 
                                            data-tip="Add" 
                                            onClick={()=>dispatch(addSkill())}
                                        ><GoPlus /></button>
                                    </div>
                                }

                                <input 
                                    type="text" 
                                    placeholder="Enter skill" 
                                    value={item.title} 
                                    onChange={(e)=>dispatch(setSkill({index: item.id, value: e.target.value}))} 
                                    className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                                    autoComplete="off"
                                />
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}