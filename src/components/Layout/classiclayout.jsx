'use client'

import { GoDotFill } from "react-icons/go";
import AboutMe from "../content/aboutme";
import Education from "../content/education";
import Experience from "../content/experience";
import Header from "../content/header";
import PersonalDetails from "../content/personalDetails";
import Skills from "../content/skills";
import { useSelector } from "react-redux";
import Languages from "../content/languages";
import Hobbies from "../content/hobbies";

export function ClassicLayout() {
    const section = useSelector((state) => state.SwitchSection);

    const reorderComponent = (comp1, comp2, comp3, comp4) => {
        return <>
            <GoDotFill className="place-self-center text-primary" />   
            { comp1 }
            <div className="col-start-2 col-span-2 flex">
                { comp2 }
                , &nbsp;
                { comp3 }
            </div>
            <div className="col-start-2 col-span-3">
                { comp4 }
            </div>
        </>
    }

    return (
        <>
            <div className="grid grid-cols-2 mb-3">
                <Header pictureClassName="justify-end order-2" identityClassName="order-1" section={section} />
            </div>
            
            <div className="flex flex-col gap-y-2">
                {section.aboutMe && <AboutMe viewTitle={false} />}
                <PersonalDetails viewTitle={false} />
                {section.exp && <Experience reorderComponent={reorderComponent} fitPosition={true} />}
                {section.education && <Education reorderComponent={reorderComponent} fitDegree={true}/>}
                {section.skills && <Skills />}
                {section.language && <Languages />}
                {section.hobbies && <Hobbies />}
            </div>
        </>
    )
}

export default ClassicLayout;    