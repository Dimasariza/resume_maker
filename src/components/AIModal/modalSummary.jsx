"use client"

import withChatSession from "./withChatSession"
import { BsStars } from "react-icons/bs";

const ModalSummary = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <input type="checkbox" id="about_me_modal" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <span className="loading loading-bars loading-xs"></span>
              <h3 className="text-lg font-bold">AI-Powered Writing Assistant</h3>
              <span>Summary</span>
            </div>
            <label htmlFor="about_me_modal" className="btn btn-xs btn-ghost">X</label>
          </div>
          <form>
            <div className="flex justify-between gap-2">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Role</legend>
                <input type="text" className="input" placeholder="Enter your role" />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Enter your role</legend>
                <input type="text" className="input" placeholder="Type here" />
              </fieldset>
            </div>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Instructions (optional)</legend>
              <textarea className="textarea w-full" placeholder="Enter any spesific details you want to include (e.g. key skills, personal traits, industry focus)"></textarea>
            </fieldset>

            <button className="btn w-full mt-2" onClick={handleClick}><BsStars />Generate Summary</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="about_me_modal">Close</label>
      </div>
    </>
  )
}

export default withChatSession(ModalSummary) 