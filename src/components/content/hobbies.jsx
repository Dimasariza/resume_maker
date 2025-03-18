"use client"

import { GoPlus } from "react-icons/go";
import { VscArrowSwap } from "react-icons/vsc";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";
import { useDispatch, useSelector } from "react-redux";
import { addHobbie, setHobbie, setHobbiesTitle } from "@/lib/features/hobbies";

export default function Hobbies() {
    const [viewButton, setViewButton] = useState(null);
    const { title, listOfHobbies } = useSelector((state) => state.Hobbies);
    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(listOfHobbies, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(listOfHobbies, 'id', slotItemMap), [listOfHobbies, slotItemMap])

    const swapyRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, listOfHobbies, 'id', slotItemMap, setSlotItemMap)
    }, [listOfHobbies])

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
            className={`justify-center relative rounded-md ${viewButton && "outline-gray-300 outline-1 outline-dashed"}`} 
            onMouseEnter={()=>setViewButton(prev => ({...prev, assitant: true}))} 
            onMouseLeave={()=>setViewButton(prev => ({...prev, assitant: false}))}
        >         
            <input 
                type="text" 
                placeholder="HOBBIES" 
                value={title} 
                onChange={(e)=>dispatch(setHobbiesTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                autoComplete="off"
            />

            <div className="flex w-full flex-wrap gap-3">
                {
                    slottedItems.map(({ slotId, itemId, item }, index) => (
                        <div key={index} data-swapy-slot={slotId}>
                            <div 
                                className="relative w-min" 
                                onMouseEnter={()=>setViewButton(item.id)} 
                                onMouseLeave={()=>setViewButton(false)}
                                data-swapy-item={itemId} key={itemId}
                            >
                                {
                                    viewButton === item.id &&
                                    <div className="absolute right-2 -top-2 flex gap-1">
                                        {
                                            listOfHobbies.length > 1 &&
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
                                            onClick={()=>dispatch(addHobbie())}
                                        ><GoPlus /></button>
                                    </div>
                                }

                                <input 
                                    type="text" 
                                    placeholder="Enter hobby" 
                                    value={item.title} 
                                    onChange={(e)=>dispatch(setHobbie({index: item.id, value: e.target.value}))} 
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