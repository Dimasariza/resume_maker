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
            <div className="grid grid-cols-2">
                <Header pictureClassName="justify-end order-2" identityClassName="order-1" section={section} />
            </div>

            {section["About Me"] && <AboutMe viewTitle={false} />}
            <PersonalDetails viewTitle={false} detailClassname="gap-5" />
            {section["Work Experience"] && <Experience reorderComponent={reorderComponent} fitPosition={true} />}
            {section["Education"] && <Education reorderComponent={reorderComponent} fitDegree={true}/>}
            {section["Skills"] && <Skills />}
            {section["Languages"] && <Languages />}
            {section["Hobbies"] && <Hobbies />}
        </>
    )
}

export default ClassicLayout;    