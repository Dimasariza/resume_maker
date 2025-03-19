"use client"
import { setHexcode } from "@/lib/features/switchColor";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux"

export function NavBarColor() {
    const [randomColor, setRandomColor] = useState("#3490dc");
    const colorRef = useRef();
    const dispatch = useDispatch();
    
    const colors = [
        { name : "color-blue", hexcode: "#0082e6" },
        { name : "color-purple", hexcode: "#b92a78" },
        { name : "color-yellow", hexcode: "#f3840b" },
        { name : "color-green", hexcode: "#2ab993" },
        { name : "color-black", hexcode: "#000000" },
    ]

    useEffect(()=> {
        colorRef.current.style.background = randomColor;
        dispatch(setHexcode(randomColor))
    }, [randomColor])

    return (
        <div className="flex flex-col items-center justify-center">
            <fieldset className="fieldset">
                {
                    colors.map((item) => (
                        <button 
                            onClick={()=>dispatch(setHexcode(item.hexcode))} 
                            key={item.hexcode} 
                            style={{background: item.hexcode}}
                            className={`btn btn-circle size-15`}
                        ></button>
                    ))
                }   
                <label htmlFor="change_color" ref={colorRef} className="size-15 bg-red-500 rounded-full">
                    <input 
                        onChange={(e)=>setRandomColor(e.target.value)} 
                        type="color" 
                        id="change_color" 
                        className="bg-transparent invisible"
                        value={randomColor}
                    />
                </label>
            </fieldset>
        </div>
    )
}