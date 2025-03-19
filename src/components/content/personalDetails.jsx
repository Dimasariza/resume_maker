import { setEmail, setLocation, setPhone, setURL, setPersonalTitle, setLinkedIn, setCustom1, setCustom2, setPersonalDetials } from "@/lib/features/personalDetails";
import { useTranslations } from "next-intl";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalDetails({viewTitle = true, detailClassname}) {
    const t = useTranslations('PersonalDetails');
    
    const details = useSelector((state) => state.PersonalDetails);
    const section = useSelector((state) => state.SwitchSection);

    const dispatch = useDispatch();
    
    const personalDetails = [
        { name: "location", icon: <FaLocationDot /> },
        { name: "email", icon: <MdEmail /> },
        { name: "phone", icon: <FaPhone /> },
        { name: "web", icon: <AiOutlineLink /> },
        { name: "linkedIn", icon: <FaLinkedinIn /> },
        { name: "custom1", icon: <GoDotFill /> },
        { name: "custom2", icon: <GoDotFill /> },
    ]

    return (
        <div className={`flex mt-5 flex-wrap gap-3 ${detailClassname}`}>
            {
                viewTitle &&
                <input 
                    type="text" 
                    placeholder={t("title")} 
                    value={details.personalTitle} 
                    onChange={(e)=>dispatch(setPersonalTitle(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 font-extrabold" 
                    autoComplete="off"
                />
            }

            {
                personalDetails.map(({icon, name}, index) => (
                    section[name] &&
                    <div className="flex items-center gap-2" key={index}>
                        <span className="text-primary">
                            {icon}
                        </span>
                        <input 
                            type="text" 
                            placeholder={t(name)} 
                            value={details[name]} 
                            onChange={(e)=>dispatch(setPersonalDetials({key: name, value: e.target.value}))} 
                            className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-0 field-sizing-content" 
                            autoComplete="off"
                        />
                    </div>
                ))
            }
        </div>
    )
} 