'use client'
import AboutMe from "../content/aboutme";
import Experience from "../content/experience";
import Education from "../content/education";
import Skills from "../content/skills";
import PersonalDetails from "../content/personalDetails";
import Header from "../content/header";
import { GoDotFill } from "react-icons/go";

function SplitLayout(props) {
    const reorderComponent = (comp1, comp2, comp3, comp4) => (
        <>
            <GoDotFill />   
            { comp1 }
            <div className="col-start-2 col-span-2 flex">
                { comp2 }
                { comp3 }
            </div>
            <div className="col-start-2 col-span-2">
                { comp4 }
            </div>
        </>
    )

    return (
        <div className="grid grid-cols-2">
            <Header pictureClassName="justify-start" />

            <div className="">
                <AboutMe />
                <PersonalDetails detailClassname="flex-col justify-center gap-2"/>
            </div>

            <div>
                <Experience reorderComponent={reorderComponent} />
                <Education reorderComponent={reorderComponent} />
                <Skills />
            </div>
        </div>
    )
}

export default SplitLayout;    