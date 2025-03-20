"use client"

import { useState } from "react";
import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { FaRegCheckCircle } from "react-icons/fa";
import { AIChatSession } from "@service/AIModel";
import { useDispatch } from "react-redux";
import { addMultiSkills } from "@/lib/features/skills";

const ModalSkills = () => {
  const t = useTranslations('Skills.aiAssistant');
  const dispatch = useDispatch()
  
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false);

  const [generatedSkills, setGeneratedSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([])

  const onAddSelectedSkills = (skill) => {
    setSelectedSkills(prev => {
      if(prev.includes(skill)) {
        return prev.filter(p => p != skill)
      } else {
        return [...prev, skill]
      }
    })
  }
  
  const generateSummary = async (e) => {
    e.preventDefault()
    setGeneratedSkills([])
    setSelectedSkills([])
    setLoading(true)
    const promp = `Job Title ${value}. Depends on job title give me bullets of key skill about 20-25 points for my Curriculum Vitae without any description. Highlight requirement and relevant skill for current technology and industry. Please give me the results in format ** keyskill **.`
    const result = await AIChatSession.sendMessage(promp)
    const resultText = result.response.text()
    const matches = resultText.match(/\*\*(.*?)\*\*/g).map(item => item.replace(/\*\*/g, ''));
    
    setGeneratedSkills(matches)
    setLoading(false)
  }

  const getRandomId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 6)
  }

  const addSelectedSkills = (e) => {
    const payload = selectedSkills.map(title => ({id: getRandomId(), title}))
    dispatch(addMultiSkills(payload))
  }
  
  return (
    <>
      <input type="checkbox" id="skills_modal" className="modal-toggle" />
      
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
            <label htmlFor="skills_modal" className="btn btn-xs btn-ghost">X</label>
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
                  generatedSkills?.map(item => (
                    <div className="w-full" key={item}>
                      <span 
                        onClick={()=>onAddSelectedSkills(item)} 
                        className={`text-xs btn btn-sm opacity-60 tracking-wide text-left ${selectedSkills.includes(item) && "bg-green-200"}`}
                      >{item}</span>
                    </div>
                  ))
                }
              </div>

            <button 
              className="btn w-full mt-2 btn-primary" 
              type="button" 
              onClick={generateSummary} 
              disabled={!value.length}
            ><BsStars />{t("generate")}</button>

            {
              selectedSkills.length > 0 &&
                <label 
                  htmlFor="skills_modal"
                  className="btn w-full mt-2 btn-primary btn-outline" 
                  onClick={addSelectedSkills}
                >
                    <FaRegCheckCircle />{t("useSkills")}
                    <div className="rounded-full text-center size-5 bg-primary text-white">{selectedSkills.length}</div>
                </label>
            }
          </form>

        </div>
        <label className="modal-backdrop" htmlFor="skills_modal"></label>
      </div>
    </>
  )
}

export default withChatSession(ModalSkills) 