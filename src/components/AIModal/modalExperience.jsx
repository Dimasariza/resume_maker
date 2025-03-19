"use client"

import { RiRobot2Line } from "react-icons/ri";
import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AIChatSession } from "@service/AIModel";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCheckCircle } from "react-icons/fa";
import { setExpDescription } from "@/lib/features/experience";

const ModalExperience = ({experienceId}) => {
  const t = useTranslations('Experiences.aiAssistant');
  const dispatch = useDispatch()

  const exp = useSelector(state => state.Experience)
  
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false);

  const [generatedExp, setGeneratedExp] = useState([]);
  const [selectedExp, setSelectedExp] = useState([])

  const onAddSelectedExp = (exp) => {
    setSelectedExp(prev => {
      if(prev.includes(exp)) {
        return prev.filter(p => p != exp)
      } else {
        return [...prev, exp]
      }
    })
  }

  const generateSummary = async (e) => {
    e.preventDefault()
    setGeneratedExp([])
    setSelectedExp([])
    setLoading(true)
    const promp = `Job title ${value}. Depending on the job, give me a job description as bullets point. You can talk about job description currently relevant to existing Industry. Please give me only in the bullets point without any grouping. Give me the bullets with format ** description **.`
    const result = await AIChatSession.sendMessage(promp)
    const resultText = result.response.text()
    const matches = resultText.match(/\*\*(.*?)\*\*/g).map(item => item.replace(/\*\*/g, ''));

    setGeneratedExp(matches)
    setLoading(false)
  }

  const addSelectedExp = (e) => {
    e.preventDefault()
    const payload = selectedExp.map(item => `• ${item}`)
    const value = payload.join("\n")
    dispatch(setExpDescription({index: experienceId, value}))
    document.getElementById("experience_modal" + experienceId).checked = false;
  }

  return (
    <>
      <input type="checkbox" id={"experience_modal" + experienceId} className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between">
            <div className="w-full text-center">
              {
                loading
                ? <span className="loading loading-bars loading-xs"></span>
                : <span className="flex justify-center"><RiRobot2Line className="text-6xl"/></span> 
              }
              <h3 className="text-lg font-bold">{t("h1")}</h3>
              <span>{t("h2")}</span>
            </div>
            <label htmlFor={"experience_modal" + experienceId} className="btn btn-xs btn-ghost">X</label>
          </div>
          <form>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">{t("role.title")}</legend>
              <input 
                type="text" 
                value={value} 
                onChange={(e)=>setValue(e.target.value)} 
                className="input w-full" 
                placeholder={t("role.placeholder")} 
              />
            </fieldset>

            <div className="flex-col flex max-h-[200px] overflow-auto p-2 gap-1">
              {
                generatedExp?.map(item => (
                  <div className="w-full" key={item}>
                    <span 
                      onClick={()=>onAddSelectedExp(item)} 
                      className={`text-xs btn btn-sm opacity-60 tracking-wide text-left ${selectedExp.includes(item) && "bg-red-500"}`}
                    >{item}</span>
                  </div>
                ))
              }
            </div>

            <button 
              className="btn w-full mt-2 btn-primary" 
              type="submit" 
              onClick={generateSummary}
              disabled={!value.length}><BsStars 
            />{t("generate")}</button>

            {
              selectedExp.length > 0 &&
                <button 
                  className="btn w-full mt-2 btn-primary btn-outline" 
                  onClick={addSelectedExp}
                >
                    <FaRegCheckCircle />{t("useExp")}
                    <div className="rounded-full text-center size-5 bg-primary text-white">{selectedExp.length}</div>
                </button>
            }
          </form>
        </div>
        <label className="modal-backdrop" htmlFor={"experience_modal" + experienceId}></label>
      </div>
    </>
  )
}

export default withChatSession(ModalExperience) 