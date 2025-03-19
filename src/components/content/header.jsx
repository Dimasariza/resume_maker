import { setName, setPicture, setRole } from "@/lib/features/personalIdentity";
import { useTranslations } from "next-intl";
import { BsUpload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function Header({pictureClassName, identityClassName, section}) {
    const t = useTranslations('Header');
    
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

    const { font } = useSelector((state) => state.SwitchTypography);

    const getFont = () => {
      switch(font) {
        case 'dm_serif_display-dm_sans':
          return 'dm_serif_display'
        case 'fjalla_one-inter':
          return 'fjalla_one'
        default:
          return font
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
                                    <span className="text-xs  text-customColor">{t("picture")}</span>
                                </div>
                        }
                    </label>
                    <input type="file" id="profile-upload" className="hidden" onChange={handleUploadImage}></input>
                </div>
            }

            <div className={`flex-col flex justify-center ${identityClassName}`}>
                <input 
                    type="text" 
                    placeholder={t("name")} 
                    value={name} 
                    onChange={(e)=> dispatch(setName(e.target.value))} 
                    className={`hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 text-4xl font-bold text-primary ${getFont()}`} 
                    autoComplete="off"
                />
                {
                    section["Role"] &&
                    <input 
                        type="text" 
                        placeholder={t("role")} 
                        value={role} 
                        onChange={(e)=> dispatch(setRole(e.target.value))} 
                        className="hover:bg-gray-200 focus:bg-gray-500 focus:outline-0 font-extrabold" 
                        autoComplete="off"
                    />
                }
            </div>
        </>
    )
}