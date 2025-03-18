import { setEmail, setLocation, setPhone, setURL, setPersonalTitle, setLinkedIn, setCustom1, setCustom2 } from "@/lib/features/personalDetails";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalDetails({viewTitle = true, detailClassname}) {
    const { location, email, phone, url, personalTitle, linkedIn, custom1, custom2 } = useSelector((state) => state.PersonalDetails);
    const section = useSelector((state) => state.SwitchSection);

    const dispatch = useDispatch();
    
    const handleOnChangeValue = (name, value) => {
        switch(name) {
            case 'location':
                dispatch(setLocation(value))
            break;
            case 'email':
                dispatch(setEmail(value))
            break;
            case 'phone':
                dispatch(setPhone(value))
            break
            case 'url':
                dispatch(setURL(value))
            break;
            case 'linkedIn':
                dispatch(setLinkedIn(value))
            break;
            case 'custom1':
                dispatch(setCustom1(value))
            break;
            case 'custom2':
                dispatch(setCustom2(value))
        }
    }

    const personalDetails = [
        { placeholder: "Enter Location", name: "location", toggle: "Location", icon: <FaLocationDot /> },
        { placeholder: "Enter your email", name: "email", toggle: "Email", icon: <MdEmail /> },
        { placeholder: "Enter your phone", name: "phone", toggle: "Phone Number", icon: <FaPhone /> },
        { placeholder: "Enter URL", name: "url", toggle: "Website", icon: <AiOutlineLink /> },
        { placeholder: "Enter URL", name: "linkedIn", toggle: "LinkedIn", icon: <FaLinkedinIn /> },
        { placeholder: "Custom", name: "custom1", toggle: "Custom 1", icon: <GoDotFill /> },
        { placeholder: "Custom", name: "custom2", toggle: "Custom 2", icon: <GoDotFill /> },
    ]

    return (
        <div className={`flex mt-5 ${detailClassname}`}>
            {
                viewTitle &&
                <input 
                    type="text" 
                    placeholder="PERSONAL DETAILS" 
                    value={personalTitle} 
                    onChange={(e)=>dispatch(setPersonalTitle(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                    autoComplete="off"
                />
            }

            {
                personalDetails.map(({placeholder, icon, name, toggle}, index) => (
                    section[toggle] &&
                    <div className="flex items-center gap-2" key={index}>
                        {icon}
                        <input 
                            type="text" 
                            placeholder={placeholder} 
                            value={eval(name)} 
                            onChange={(e)=>handleOnChangeValue(name, e.target.value)} 
                            className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold field-sizing-content" 
                            autoComplete="off"
                        />
                    </div>
                ))
            }
        </div>
    )
} 