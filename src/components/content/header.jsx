import { setName, setPicture, setRole } from "@/lib/features/personalIdentity";
import { BsUpload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function Header({pictureClassName, identityClassName, section}) {
    const { name, role, picture } = useSelector((state) => state.PersonalIdentity);
    const dispatch = useDispatch();

    const handleUploadImage = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                dispatch(setPicture(reader.result))
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            {
                section['Picture'] &&
                <div className={`flex ${pictureClassName}`}>
                    <label 
                        htmlFor="profile-upload" 
                        className="size-50 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer text-neutral-200 hover:text-white"
                    >
                        {
                            picture 
                            ?   <img src={picture} alt="profile" className="size-50 rounded-full bg-gray-100" />
                            :   <div>
                                    <BsUpload className="justify-self-center text-sm"/>
                                    <span className="text-xs">Select your picture</span>
                                </div>
                        }
                    </label>
                    <input type="file" id="profile-upload" className="hidden" onChange={handleUploadImage}></input>
                </div>
            }

            <div className={`flex-col flex justify-center ${identityClassName}`}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e)=> dispatch(setName(e.target.value))} 
                    className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 text-4xl font-bold" 
                    autoComplete="off"
                />
                {
                    section["Role"] &&
                    <input 
                        type="text" 
                        placeholder="YOUR ROLE" 
                        value={role} 
                        onChange={(e)=> dispatch(setRole(e.target.value))} 
                        className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-bold" 
                        autoComplete="off"
                    />
                }
            </div>
        </>
    )
}