"use client"
import { setColor } from "@/lib/features/switchColor";
import { useDispatch, useSelector } from "react-redux"

export function NavBarColor() {
    const dispatch = useDispatch();
    
    const color = [
        { name : "app-color-blue" },
        { name : "app-color-purple" },
        { name : "app-color-yellow" },
        { name : "app-color-green" },
        { name : "app-color-black" },
    ]

    const handleSwitchColor = (color) => {
        dispatch(setColor(color.name))
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <fieldset className="fieldset">
                {
                    color.map((item, index) => (
                        // <label className="flex gap-2 cursor-pointer items-center" key={index}>
                        //     <input type="radio" name="theme-radios" className="radio radio-sm theme-controller size-15" value="default"/>
                        // </label>
                        <button onClick={()=>handleSwitchColor(item)} key={index} className={`btn btn-circle size-15 bg-${item}`}></button>
                    ))
                }   
                <input type="color" className="btn-circle btn size-15" />

            </fieldset>
        </div>
    )
}