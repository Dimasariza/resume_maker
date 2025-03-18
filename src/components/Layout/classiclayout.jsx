'use client'

import { GoDotFill } from "react-icons/go";
import AboutMe from "../content/aboutme";
import Education from "../content/education";
import Experience from "../content/experience";
import Header from "../content/header";
import PersonalDetails from "../content/personalDetails";
import Skills from "../content/skills";

export function ClassicLayout() {
    const reorderComponent = (comp1, comp2, comp3, comp4) => {
        return <>
            <GoDotFill />   
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
                <Header pictureClassName="justify-end order-2" identityClassName="order-1"/>
            </div>

            <AboutMe viewTitle={false} />
            <PersonalDetails viewTitle={false} detailClassname="gap-5" />
            <Experience reorderComponent={reorderComponent} fitPosition={true} />
            <Education reorderComponent={reorderComponent} fitDegree={true}/>
            <Skills />
        </>
    )
}

export default ClassicLayout;    