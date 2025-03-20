import { GoPlus } from "react-icons/go";
import { FaArrowsAltV } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSwapy, utils } from "swapy";
import { setDegree, setEduFromUntil, setSchool, setEduTitle, addEducation } from "@/lib/features/education";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function Education({reorderComponent, fitDegree = false}) {
    const t = useTranslations('Educations');
    
    const [viewButton, setViewButton] = useState(false);

    const { title, listOfEducations } = useSelector((state) => state.Educations);
    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(listOfEducations, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(listOfEducations, 'id', slotItemMap), [listOfEducations, slotItemMap])

    const swapyRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, listOfEducations, 'id', slotItemMap, setSlotItemMap)
    }, [listOfEducations])

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
        <div ref={containerRef}> 
            <input 
                type="text" 
                placeholder={t("title")}
                value={title} 
                onChange={(e)=> dispatch(setEduTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-extrabold" 
                autoComplete="off"
            />

            {
                slottedItems.map(({slotId, itemId, item: {school, degree, fromUntil, id}}) => (
                    <div data-swapy-slot={slotId} key={slotId}>
                        <div 
                            className={`grid grid-cols-[8%_25%_67%] justify-center relative rounded-md 
                                ${viewButton === id && "outline-gray-300 outline-1 outline-dashed"}`
                            } 
                            onMouseEnter={()=>setViewButton(id)} 
                            onMouseLeave={()=>setViewButton(false)}
                            data-swapy-item={itemId}
                            key={itemId}
                        >
                            {
                                viewButton === id &&
                                <div className="absolute right-2 -top-2 flex gap-1">
                                    <button 
                                        className={`btn btn-xs btn-circle tooltip btn-dash btn-primary ${listOfEducations.length == 1 && "hidden"}`}  
                                        data-tip={t("remove")}
                                    ><FaMinus /></button>
                                    <button 
                                        className={`btn btn-xs btn-circle tooltip btn-dash btn-primary ${listOfEducations.length == 1 && "hidden"}`}  
                                        data-tip={t("reorder")} 
                                        data-swapy-handle
                                    ><FaArrowsAltV /></button>
                                    <button 
                                        onClick={()=>dispatch(addEducation())}
                                        className="btn btn-xs btn-circle tooltip btn-dash btn-primary" 
                                        data-tip={t("add")}
                                    ><GoPlus /></button>
                                </div> 
                            }  

                            {
                                reorderComponent(
                                    <input 
                                        type="text" 
                                        placeholder={t("school")} 
                                        value={school} 
                                        onChange={(e)=>dispatch(setSchool({index: id, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-bold col-span-2 text-primary" 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder={t("degree")} 
                                        value={degree} 
                                        onChange={(e)=>dispatch(setDegree({index: id, value: e.target.value}))} 
                                        className={
                                            `hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-bold
                                            ${fitDegree ? "field-sizing-content" : "w-full"}`
                                        } 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder={t("fromUntil")} 
                                        value={fromUntil} 
                                        onChange={(e)=>dispatch(setEduFromUntil({index: id, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 field-sizing-content" 
                                        autoComplete="off"
                                    />
                                )
                            }

                        </div>
                    </div>
                ))
            }
        </div>
    )
}