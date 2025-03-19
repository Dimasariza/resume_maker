'use client'

import { NavBar, Content } from "@/components";
import ModalExperience from "@/components/AIModal/modalExperience";
import ModalSkills from "@/components/AIModal/modalSkills";
import ModalSummary from "@/components/AIModal/modalSummary";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { hexcode } = useSelector((state) => state.SwitchColor);
  const typography = useSelector((state) => state.SwitchTypography.font);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", hexcode);
    console.log(hexcode)
  }, [hexcode]);

  return (
    <div className={`flex flex-col items-center justify-center bg-primary`}>
      <NavBar />
      <ModalSummary />
      <ModalExperience />
      <ModalSkills />
      <Content />
    </div>
  )
}
