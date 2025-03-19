'use client'
import AboutMe from "../content/aboutme";
import Experience from "../content/experience";
import Education from "../content/education";
import Skills from "../content/skills";
import PersonalDetails from "../content/personalDetails";
import Header from "../content/header";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import Languages from "../content/languages";
import Hobbies from "../content/hobbies";

function SplitLayout(props) {
    const section = useSelector((state) => state.SwitchSection);

    const reorderComponent = (comp1, comp2, comp3, comp4) => (
        <>
            <GoDotFill className="place-self-center text-primary"/>   
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
        <div className="grid grid-cols-[28%_72%] gap-5">
            <Header pictureClassName="justify-start" section={section} />

            <div className="">
                {section["About Me"] && <AboutMe />}
                <PersonalDetails detailClassname="flex-col justify-center gap-2"/>
            </div>

            <div>
                {section["Work Experience"] && <Experience reorderComponent={reorderComponent} />}
                {section["Education"] && <Education reorderComponent={reorderComponent} />}
                {section["Skills"] && <Skills />}
                {section["Languages"] && <Languages />}
                {section["Hobbies"] && <Hobbies />}
            </div>
        </div>
    )
}

export default SplitLayout;    