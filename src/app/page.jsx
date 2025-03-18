'use client'

import { NavBar, Content } from "@/components";
import ModalExperience from "@/components/AIModal/modalExperience";
import ModalSkills from "@/components/AIModal/modalSkills";
import ModalSummary from "@/components/AIModal/modalSummary";
import { useSelector } from "react-redux";

export default function Home() {
  const acativeColor = useSelector((state) => state.SwitchColor);
  const typography = useSelector((state) => state.SwitchTypography.font);

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <ModalSummary />
      <ModalExperience />
      <ModalSkills />
      <Content />
    </div>
  )
}
