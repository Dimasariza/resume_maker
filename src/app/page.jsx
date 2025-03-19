'use client'

import { NavBar, Content } from "@/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { hexcode } = useSelector((state) => state.SwitchColor);
  const { font, size } = useSelector((state) => state.SwitchTypography);

  const getFont = () => {
    switch(font) {
      case 'dm_serif_display-dm_sans':
        return 'dm_sans'
      case 'fjalla_one-inter':
        return 'inter'
      default:
        return font
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", hexcode);
  }, [hexcode]);

  return (
    <div 
      className={`flex flex-col items-center justify-center 
      ${ size == "small" && "text-sm" }
      ${ size == "big" && "text-lg" }
      ${ getFont() }
      ${ hexcode == "#000000" ? "bg-[#313131]" : "bg-primary"}` }
    >
      <NavBar />
      <Content />
    </div>
  )
}
