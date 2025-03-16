'use client'
import { BsUpload } from "react-icons/bs";
import withPersonalize from "./withPersonalize";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

function SplitLayout(props) {
    const { handleUploadImage, selectedFile, inputRef, editable, setEditable, value, setValue } = props;

    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center">
                <label htmlFor="profile-upload" className="size-50 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                    {
                        selectedFile 
                        ?   <img src={selectedFile} alt="profile" className="size-50 rounded-full bg-gray-100" />
                        :   <div>
                                <BsUpload className="justify-self-center"/>
                                <span className="text-black">Select your picture</span>
                            </div>
                    }
                </label>
                <input type="file" id="profile-upload" className="hidden" onChange={handleUploadImage}></input>
            </div>

            <div className="flex-col flex justify-center">
                <label htmlFor="name" className="text-4xl cursor-text">
                    {
                        editable.name
                        ? <input type="text" onChange={(e)=>setValue(prev => ({...prev, name: e.target.value}))} ref={inputRef} placeholder="Your Name" value={value.name} className="bg-gray-200"/>
                        : <h1 onClick={()=>setEditable(prev => ({...prev, name: true}))}>{ value.name || "Your Name" }</h1>
                    }
                </label>

                <label htmlFor="role" className="cursor-text">
                    {
                        editable.role
                        ? <input type="text" onChange={(e)=>setValue(prev => ({...prev, role: e.target.value}))} ref={inputRef} placeholder="Your Role" value={value.role} className="bg-gray-200"/>
                        : <h1 onClick={()=>setEditable(prev => ({...prev, role: true}))}>{ value.role || "YOUR ROLE" }</h1>
                    }
                </label>  
            </div>

            <div>
                <div className="flex-col flex justify-center">
                    <label htmlFor="aboutMe" className="text-4xl cursor-pointer">
                        {
                            editable.aboutMe
                            ? <input id="aboutMe" type="text" onChange={(e)=>setValue(prev => ({...prev, aboutMe: e.target.value}))} ref={inputRef} placeholder="About Me" value={value.aboutMe} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, aboutMe: true}))}>{ value.aboutMe || "About Me" }</h1>
                        }
                    </label>

                    <label htmlFor="summary" className="cursor-text">
                        {
                            editable.summary
                            ? <input id="summary" type="text" onChange={(e)=>setValue(prev => ({...prev, summary: e.target.value}))} ref={inputRef} placeholder="Enter your professional summary" value={value.summary} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, summary: true}))}>{ value.summary || "Enter your professional summary" }</h1>
                        }
                    </label>  
                </div>

                <div className="flex-col flex justify-center">
                    <label htmlFor="personalDetails" className="text-4xl cursor-text">
                        {
                            editable.personalDetails
                            ? <input id="personalDetails" type="text" onChange={(e)=>setValue(prev => ({...prev, personalDetails: e.target.value}))} ref={inputRef} placeholder="Personal Details" value={value.personalDetails} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, personalDetails: true}))}>{ value.personalDetails || "Personal Details" }</h1>
                        }
                    </label>

                    <label htmlFor="location" className="cursor-text flex items-center">
                        <FaLocationDot />
                        {
                            editable.location
                            ? <input id="location" type="text" onChange={(e)=>setValue(prev => ({...prev, location: e.target.value}))} ref={inputRef} placeholder="Enter Location" value={value.location} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, location: true}))}>{ value.location || "Enter Location" }</h1>
                        }
                    </label>  

                    <label htmlFor="email" className="cursor-text flex items-center">
                        <MdEmail />
                        {
                            editable.email
                            ? <input id="email" type="text" onChange={(e)=>setValue(prev => ({...prev, email: e.target.value}))} ref={inputRef} placeholder="Enter your email" value={value.email} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, email: true}))}>{ value.email || "Enter your email" }</h1>
                        }
                    </label>  

                    <label htmlFor="phone" className="cursor-text flex items-center">
                        <FaPhone />
                        {
                            editable.phone
                            ? <input id="phone" type="text" onChange={(e)=>setValue(prev => ({...prev, phone: e.target.value}))} ref={inputRef} placeholder="Enter your phone" value={value.phone} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, phone: true}))}>{ value.phone || "Enter your phone" }</h1>
                        }
                    </label>  

                    <label htmlFor="url" className="cursor-text flex items-center">
                        <AiOutlineLink />
                        {
                            editable.url
                            ? <input id="url" type="text" onChange={(e)=>setValue(prev => ({...prev, url: e.target.value}))} ref={inputRef} placeholder="Enter URL" value={value.url} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, url: true}))}>{ value.url || "Enter URL" }</h1>
                        }
                    </label>  
                </div>
            </div>

            <div>
                <label htmlFor="experience" className="cursor-text flex items-center">
                    {
                        editable.experience
                        ? <input id="experience" type="text" onChange={(e)=>setValue(prev => ({...prev, experience: e.target.value}))} ref={inputRef} placeholder="Experience" value={value.experience} className="bg-gray-200"/>
                        : <h1 onClick={()=>setEditable(prev => ({...prev, experience: true}))}>{ value.experience || "Experience" }</h1>
                    }
                </label> 
                
                <div className="grid grid-cols-12">
                    <GoDotFill />   
                    <label htmlFor="employer" className="cursor-text flex items-center col-span-12">
                        {
                            editable.employer
                            ? <input id="employer" type="text" onChange={(e)=>setValue(prev => ({...prev, employer: e.target.value}))} ref={inputRef} placeholder="Employer" value={value.employer} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, employer: true}))}>{ value.employer || "Employer" }</h1>
                        }
                    </label> 

                    <label htmlFor="position" className="cursor-text flex items-center col-start-2 col-span-7">
                        {
                            editable.position
                            ? <input id="position" type="text" onChange={(e)=>setValue(prev => ({...prev, position: e.target.value}))} ref={inputRef} placeholder="POSITION" value={value.position} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, position: true}))}>{ value.position || "POSITION" }</h1>
                        }
                    </label> 

                    <label htmlFor="expFromUntil" className="cursor-text flex items-center col-start-9 col-span-12">
                        {
                            editable.expFromUntil
                            ? <input id="expFromUntil" type="text" onChange={(e)=>setValue(prev => ({...prev, expFromUntil: e.target.value}))} ref={inputRef} placeholder="From-Until" value={value.expFromUntil} className="bg-gray-200 w-25"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, expFromUntil: true}))}>{ value.expFromUntil || "From-Until" }</h1>
                        }
                    </label> 

                    <label htmlFor="workExperience" className="cursor-text flex items-center col-start-2 col-span-12">
                        {
                            editable.workExperience
                            ? <input id="workExperience" type="text" onChange={(e)=>setValue(prev => ({...prev, workExperience: e.target.value}))} ref={inputRef} placeholder="Enter your work experience description" value={value.workExperience} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, workExperience: true}))}>{ value.workExperience || "Enter your work experience description" }</h1>
                        }
                    </label> 
                </div>

                <label htmlFor="education" className="cursor-text flex items-center">
                    {
                        editable.education
                        ? <input id="education" type="text" onChange={(e)=>setValue(prev => ({...prev, education: e.target.value}))} ref={inputRef} placeholder="Education" value={value.education} className="bg-gray-200"/>
                        : <h1 onClick={()=>setEditable(prev => ({...prev, education: true}))}>{ value.education || "Education" }</h1>
                    }
                </label> 

                <div className="grid grid-cols-12">
                    <GoDotFill />   
                    <label htmlFor="school" className="cursor-text flex items-center col-span-12">
                        {
                            editable.school
                            ? <input id="school" type="text" onChange={(e)=>setValue(prev => ({...prev, school: e.target.value}))} ref={inputRef} placeholder="School" value={value.school} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, school: true}))}>{ value.school || "School" }</h1>
                        }
                    </label> 

                    <label htmlFor="degree" className="cursor-text flex items-center col-start-2 col-span-7">
                        {
                            editable.degree
                            ? <input id="degree" type="text" onChange={(e)=>setValue(prev => ({...prev, degree: e.target.value}))} ref={inputRef} placeholder="DEGREE" value={value.degree} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, degree: true}))}>{ value.degree || "DEGREE" }</h1>
                        }
                    </label> 

                    <label htmlFor="eduFromUntil" className="cursor-text flex items-center col-start-9 col-span-12">
                        {
                            editable.eduFromUntil
                            ? <input id="eduFromUntil" type="text" onChange={(e)=>setValue(prev => ({...prev, eduFromUntil: e.target.value}))} ref={inputRef} placeholder="From-Until" value={value.eduFromUntil} className="bg-gray-200 w-25"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, eduFromUntil: true}))}>{ value.eduFromUntil || "From-Until" }</h1>
                        }
                    </label> 
                </div>

                <label htmlFor="skills" className="cursor-text flex items-center">
                    {
                        editable.skills
                        ? <input id="skills" type="text" onChange={(e)=>setValue(prev => ({...prev, skills: e.target.value}))} ref={inputRef} placeholder="SKILLS" value={value.skills} className="bg-gray-200"/>
                        : <h1 onClick={()=>setEditable(prev => ({...prev, skills: true}))}>{ value.skills || "SKILLS" }</h1>
                    }
                </label> 

                <div>
                    <label htmlFor="fillSkill" className="cursor-text flex items-center">
                        {
                            editable.fillSkill
                            ? <input id="fillSkill" type="text" onChange={(e)=>setValue(prev => ({...prev, fillSkill: e.target.value}))} ref={inputRef} placeholder="Enter skill" value={value.fillSkill} className="bg-gray-200"/>
                            : <h1 onClick={()=>setEditable(prev => ({...prev, fillSkill: true}))}>{ value.fillSkill || "Enter skill" }</h1>
                        }
                    </label> 
                </div>
            </div>
        </div>
    )
}

export default withPersonalize(SplitLayout);    