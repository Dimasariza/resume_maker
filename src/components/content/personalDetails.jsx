import { setEmail, setLocation, setPhone, setURL, setPersonalTitle } from "@/lib/features/personalDetails";
import { AiOutlineLink } from "react-icons/ai";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalDetails({viewTitle = true, detailClassname}) {
    const { location, email, phone, url, personalTitle } = useSelector((state) => state.PersonalDetails);
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
            default:
                dispatch(setPersonalTitle(value))
        }
    }

    const personalDetails = [
        { placeholder: "Enter Location", name: "location", icon: <FaLocationDot /> },
        { placeholder: "Enter your email", name: "email", icon: <MdEmail /> },
        { placeholder: "Enter your phone", name: "phone", icon: <FaPhone /> },
        { placeholder: "Enter URL", name: "url", icon: <AiOutlineLink /> },
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
                personalDetails.map(({placeholder, icon, name}, index) => (
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