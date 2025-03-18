"use client"

import { RiRobot2Line } from "react-icons/ri";
import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";
import { useState } from "react";

const ModalExperience = () => {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false);

  const generateSummary = (e) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <>
      <input type="checkbox" id="experience_modal" className="modal-toggle" />

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
              <span>Work Experience</span>
            </div>
            <label htmlFor="experience_modal" className="btn btn-xs btn-ghost">X</label>
          </div>
          <form onSubmit={generateSummary}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Role</legend>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="input w-full" placeholder="Enter your role for bullet points suggestions" />
              </fieldset>
            <button className="btn w-full mt-2" type="submit" disabled={!value.length}><BsStars />Generate Summary</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="experience_modal">Close</label>
      </div>
    </>
  )
}

export default withChatSession(ModalExperience) 