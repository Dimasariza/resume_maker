"use client"

import { useState } from "react";
import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const ModalSummary = () => {
  const initialState = {
    role: '',
    experienceLevel: 'Litle/No experience',
    instruction: ''
  }
  const experienceLevel = [
    { name: "Litle/No experience" },
    { name: "Some experience" },
    { name: "A lot of experience" },
  ]

  const [value, setValue] = useState(initialState)
  const [loading, setLoading] = useState(false);
 
  const handleClickLevel = (item) => {
    const elem = document.activeElement;
    if (elem) elem?.blur();
    setValue(prev=>({...prev, experienceLevel: item.name}))
  }
  
  const generateSummary = (e) => {
    e.preventDefault()
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
              <h3 className="text-lg font-bold">AI-Powered Writing Assistant</h3>
              <span>Summary</span>
            </div>
            <label htmlFor="about_me_modal" className="btn btn-xs btn-ghost">X</label>
          </div>
          <form onSubmit={generateSummary}>
            <div className="flex justify-between gap-2">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Role</legend>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="Enter your role" 
                  value={value.role}
                  onChange={(e)=>setValue(prev => ({...prev, role: e.target.value}))} 
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Experience Level</legend>
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
              <legend className="fieldset-legend">Instructions (optional)</legend>
              <textarea 
                className="textarea w-full" 
                placeholder="Enter any spesific details you want to include (e.g. key skills, personal traits, industry focus)"
                onChange={(e)=>setValue(prev => ({...prev, instruction: e.target.value}))}
                value={value.instruction}
              ></textarea>
            </fieldset>

            <button className={`btn w-full mt-2 bg-info`} disabled={!value.role.length} type="submit"><BsStars />Generate Summary</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="about_me_modal">Close</label>
      </div>
    </>
  )
}

export default withChatSession(ModalSummary) 