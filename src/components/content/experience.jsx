import { PiStarFourDuotone } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaArrowsAltV } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeer, setExpFromUntil, setPosition, setExpTitle, addExperience, setExpDescription } from "@/lib/features/experience";
import { useTranslations } from "next-intl";
import ModalExperience from "../AIModal/modalExperience";
import { createSwapy, utils } from "swapy";

export default function Experience({reorderComponent, fitPosition = false}) {
    const t = useTranslations('Experiences');
    
    const [viewButton, setViewButton] = useState(false);

    const { title, listOfExperiences } = useSelector((state) => state.Experience);
    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(listOfExperiences, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(listOfExperiences, 'id', slotItemMap), [listOfExperiences, slotItemMap])

    const swapyRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, listOfExperiences, 'id', slotItemMap, setSlotItemMap)
    }, [listOfExperiences])

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
                onChange={(e)=>dispatch(setExpTitle(e.target.value))} 
                className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-extrabold" 
                autoComplete="off"
            />

            {
                slottedItems.map(({slotId, itemId, item: {employeer, position, fromUntil, description, id}}) => (
                    <div data-swapy-slot={slotId} key={slotId}>
                        <div 
                            className={`
                                grid grid-cols-[8%_25%_67%] justify-center relative rounded-md 
                                ${viewButton === id && "outline-gray-300 outline-1 outline-dashed"}`
                            } 
                            onMouseEnter={()=>setViewButton(id)} 
                            onMouseLeave={()=>setViewButton(false)}
                            data-swapy-item={itemId}
                            key={itemId}
                        >
                            <ModalExperience experienceId={id}/>
                            {
                                viewButton === id &&
                                <div className="absolute right-2 -top-2 flex gap-1">
                                    <label htmlFor={"experience_modal" + id} className="btn btn-xs rounded-full btn-dash btn-primary">
                                        <PiStarFourDuotone />{t("aiAssistant.title")}
                                    </label>
                                    <button 
                                        className={`btn btn-xs btn-circle tooltip btn-dash btn-primary ${listOfExperiences.length == 1 && "hidden"}`}
                                        data-tip={t("remove")}
                                    ><FaMinus /></button>
                                    <button 
                                        className={`btn btn-xs btn-circle tooltip btn-dash btn-primary ${listOfExperiences.length == 1 && "hidden"}`} 
                                        data-tip={t("reorder")}
                                        data-swapy-handle
                                    ><FaArrowsAltV /></button>
                                    <button  
                                        onClick={()=>dispatch(addExperience())}
                                        className="btn btn-xs btn-circle tooltip btn-dash btn-primary" 
                                        data-tip={t("add")}
                                    ><GoPlus /></button>
                                </div> 
                            }      

                            {
                                reorderComponent(
                                    <input 
                                        type="text" 
                                        placeholder={t("employeer")} 
                                        value={employeer} 
                                        onChange={(e)=>dispatch(setEmployeer({index: id, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-bold col-span-2 text-primary" 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder={t("position")}
                                        value={position} 
                                        onChange={(e)=>dispatch(setPosition({index: id, value: e.target.value}))} 
                                        className={
                                            `hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-bold col-start-2 
                                            ${fitPosition ? "field-sizing-content" : "w-full"}`
                                        } 
                                        autoComplete="off"
                                    />,
                                    <input 
                                        type="text" 
                                        placeholder={t("fromUntil")}
                                        value={fromUntil} 
                                        onChange={(e)=>dispatch(setExpFromUntil({index: id, value: e.target.value}))} 
                                        className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 field-sizing-content" 
                                        autoComplete="off"
                                    />,
                                    <textarea 
                                        placeholder={t("desc")} 
                                        autoComplete="off"
                                        value={description} 
                                        onChange={(e)=>dispatch(setExpDescription({index: id, value: e.target.value}))} 
                                        wrap="soft" 
                                        className="p-1 textarea min-h-min hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 field-sizing-content textarea-ghost resize-none w-full" 
                                    ></textarea>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}