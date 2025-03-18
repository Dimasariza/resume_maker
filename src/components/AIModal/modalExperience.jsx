"use client"

import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";

const ModalExperience = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <input type="checkbox" id="experience_modal" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <span className="loading loading-bars loading-xs"></span>
              <h3 className="text-lg font-bold">AI-Powered Writing Assistant</h3>
              <span>Work Experience</span>
            </div>
            <label htmlFor="experience_modal" className="btn btn-xs btn-ghost">X</label>
          </div>
          <form>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Role</legend>
                <input type="text" className="input w-full" placeholder="Enter your role for bullet points suggestions" />
              </fieldset>
            <button className="btn w-full mt-2" onClick={handleClick}><BsStars />Generate Summary</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="experience_modal">Close</label>
      </div>
    </>
  )
}

export default withChatSession(ModalExperience) 