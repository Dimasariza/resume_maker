"use client"

import { GoPlus } from "react-icons/go";
import { VscArrowSwap } from "react-icons/vsc";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage, setLanguage, setLanguagesTitle } from "@/lib/features/languages";
import { useTranslations } from "next-intl";

export default function Languages() {
    const t = useTranslations('Languages');
    
    const [viewButton, setViewButton] = useState(null);
    const { title, listOfLanguages } = useSelector((state) => state.Languages);
    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(listOfLanguages, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(listOfLanguages, 'id', slotItemMap), [listOfLanguages, slotItemMap])

    const swapyRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, listOfLanguages, 'id', slotItemMap, setSlotItemMap)
    }, [listOfLanguages])

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
            className={`justify-center relative rounded-md`} 
            onMouseEnter={()=>setViewButton(prev => ({...prev, assitant: true}))} 
            onMouseLeave={()=>setViewButton(prev => ({...prev, assitant: false}))}
        >         
            <input 
                type="text" 
                placeholder={t("title")} 
                value={title} 
                onChange={(e)=>dispatch(setLanguagesTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-extrabold" 
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
                                            listOfLanguages.length > 1 &&
                                            <>
                                                <button 
                                                    className="btn btn-xs btn-circle tooltip" 
                                                    data-tip={t("remove")} 
                                                ><FaMinus /></button>
                                                <button 
                                                    className="btn btn-xs btn-circle tooltip" 
                                                    data-tip={t("reorder")} 
                                                    data-swapy-handle
                                                ><VscArrowSwap /></button>
                                            </>
                                        }
                                        <button 
                                            className="btn btn-xs btn-circle tooltip" 
                                            data-tip={t("add")}  
                                            onClick={()=>dispatch(addLanguage())}
                                        ><GoPlus /></button>
                                    </div>
                                }

                                <input 
                                    type="text" 
                                    placeholder={t("placeholder")} 
                                    value={item.title} 
                                    onChange={(e)=>dispatch(setLanguage({index: item.id, value: e.target.value}))} 
                                    className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0" 
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