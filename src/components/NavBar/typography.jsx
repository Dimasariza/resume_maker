import { setFont, setSize } from "@/lib/features/switchTypography";
import { useDispatch, useSelector } from "react-redux";

export function NavBarTypography() {
    const { font, size } = useSelector((state) => state.SwitchTypography);
    const dispatch = useDispatch();

    const typography = [
        { name: "Nunito" },
        { name: "Archivo Narrow" },
        { name: "Syne" },
        { name: "DM Serif Display + DM Sans" },
        { name: "Poppins" },
        { name: "Rubik" },
        { name: "Fira Sans" },
        { name: "Josefin Sans" },
        { name: "Roboto mono" },
        { name: "Fjalla One + Inter" },
    ]

    const typographySize = [
        { name: "Small" },
        { name: "Medium" },
        { name: "Big" },
    ]

    const handleClickFont = (font) => {
        const elem = document.activeElement;
        if (elem) elem?.blur();

        dispatch(setFont(font))
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="dropdown dropdown-center w-full">
                <div tabIndex={1} role="button" className="btn w-full capitalize">{font}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        typography.map((item, index) => (
                            <li key={index} onClick={()=>handleClickFont(item.name)} ><a>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex join justify-center">
                {
                    typographySize.map((item, index) => (
                        <input 
                            onClick={() => dispatch(setSize(item.name))} 
                            key={index} 
                            className="join-item btn" 
                            type="radio" 
                            name="options" 
                            aria-label={item.name} 
                        />
                    ))
                }
            </div>
        </div>
    )
}