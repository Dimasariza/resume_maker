import { setLocale } from "@/lib/features/switchLanguage";
import { setUserLocale } from "@service/locale";
import { PiGlobe } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

export default function AppLocale() {
    const { locale } = useSelector((state) => state.SwitchLanguage)
    const dispatch = useDispatch()

    const languages = [
        { lang: "English", id: 'en' }, 
        { lang: "Español", id: 'es' }, 
        { lang: "Français", id: 'fr' }, 
        { lang: "Deutsch", id: 'de' }, 
        { lang: "Italiano", id: 'it' }, 
        { lang: "Nederlands", id: 'nl' }, 
        { lang: "Svenska", id: 'sv' }, 
        { lang: "Dansk", id: 'da' }, 
        { lang: "Norsk", id: 'no' }, 
        { lang: "Português", id: 'pt' }, 
        { lang: "Polski", id: 'pl' }
    ]

    const changeLocale = (locale) => {
        setUserLocale(locale);
        dispatch(setLocale(locale))
    }

    return (
        <div className="dropdown dropdown-center">     
            <div tabIndex={4} role="button" className="btn btn-ghost">
                <PiGlobe /> { languages.find(({id}) => id == locale)?.lang }
            </div>
            <div tabIndex={4}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                { 
                    languages.map(({lang,id}, index) => (
                        <li onClick={()=>changeLocale(id)} key={id + index} ><a>{lang}</a></li>
                    ))
                }
            </div>
        </div>
    )
}