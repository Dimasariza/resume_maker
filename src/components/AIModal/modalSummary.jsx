"use client"

import { useState } from "react";
import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslations } from "next-intl";
import { FaRegCheckCircle } from "react-icons/fa";
import { AIChatSession } from "@service/AIModel";
import { useDispatch, useSelector } from "react-redux";
import { setSelfDescription } from "@/lib/features/personalSummary";

const ModalSummary = () => {
  const t = useTranslations('AboutMe.aiAssistant');
  const dispatch = useDispatch()

  const personal = useSelector(state => state.PersonalSummary)
  
  const initialValue = {
    role: '',
    experienceLevel: 'Litle/No experience',
    instruction: ''
  }

  const experienceLevel = [
    { name: t("level.little") },
    { name: t("level.some") },
    { name: t("level.lot") },
  ]

  const [value, setValue] = useState(initialValue)
  const [loading, setLoading] = useState(false);
 
  const [generatedSummary, setGeneratedSummary] = useState("");

  const handleClickLevel = (item) => {
    const elem = document.activeElement;
    if (elem) elem?.blur();
    setValue(prev=>({...prev, experienceLevel: item.name}))
  }
  
  const generateSummary = async (e) => {
    e.preventDefault()
    setGeneratedSummary("")
    setLoading(true)
    const promp = `I am a ${value.role} with ${value.experienceLevel} of experience in my job.
    ${value.instruction}. I want to add bio summary in my Curriculum Vitae, please make me a short summary in general bot specifically to tell all about my job within 1-3 line. Give me only one paragraph in general ${value.instruction.length && ", ignore all recommendation in specific details."}`
    const result = await AIChatSession.sendMessage(promp)
    const resultText = result.response.text()
    
    setGeneratedSummary(resultText)
    setLoading(false)
  }

  const handleUseSummary = (e) => {
    e.preventDefault()

    dispatch(setSelfDescription(generatedSummary))

    setValue(initialValue)
    setGeneratedSummary("")
    document.getElementById("about_me_modal").checked = false
  }

  return (
    <>
      <input type="checkbox" id="about_me_modal" className="modal-toggle" />
      
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
            <label htmlFor="about_me_modal" className="btn btn-xs btn-ghost">X</label>
          </div>
          <form>
            <div className="flex justify-between gap-2">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">{t("role.title")}</legend>
                <input 
                  type="text" 
                  className="input" 
                  placeholder={t("role.placeholder")} 
                  value={value.role}
                  onChange={(e)=>setValue(prev => ({...prev, role: e.target.value}))} 
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">{t("level.title")}</legend>
                <div className="dropdown dropdown-center w-full">
                  <div tabIndex={1} role="button" className="btn w-full capitalize">{value.experienceLevel}<MdKeyboardArrowDown /></div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                      {
                        experienceLevel.map((item, index) => (
                          <li key={index} onClick={(e)=>handleClickLevel(item)} ><a>{item.name}</a></li>
                        ))
                      }
                  </ul>
                </div>
              </fieldset>
            </div>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">{t("instructions.title")}</legend>
              <textarea 
                className="textarea w-full" 
                placeholder={t("instructions.placeholder")}
                onChange={(e)=>setValue(prev => ({...prev, instruction: e.target.value}))}
                value={value.instruction}
              ></textarea>
            </fieldset>

            <div className="flex-col flex max-h-[200px] overflow-auto p-2 gap-1">
              {generatedSummary}
            </div>

            <button 
              className={`btn w-full mt-2 bg-primary`} 
              disabled={!value.role.length} 
              type="button"
              onClick={generateSummary}
            ><BsStars />{t("generate")}</button>
            {
              generatedSummary.length > 0 &&
                <button 
                  className="btn w-full mt-2 btn-primary btn-outline" 
                  onClick={handleUseSummary}
                >
                    <FaRegCheckCircle />{t("useSummary")}
                </button>
            }
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="about_me_modal"></label>
      </div>
    </>
  )
}

export default withChatSession(ModalSummary) 