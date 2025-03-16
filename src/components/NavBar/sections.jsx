import { FiPlus } from "react-icons/fi";

export function NavBarSections() {    
    const toggle = [
        { name : "Picture" },
        { name : "Location" },
        { name : "About Me" },
        { name : "Phone Number" },
        { name : "Role" },
        { name : "Email" },
        { name : "Work Experience" },
        { name : "Website" },
        { name : "Education" },
        { name : "LinkedIn" },
        { name : "Skills" },
        { name : "Custom 1" },
        { name : "Languages" },
        { name : "Custom 2" },
        { name : "Hobbies" },
    ]

    return (
        <div>
            <div className="grid grid grid-cols-2 gap-4">
                <span>Personal Details</span>
                {
                    toggle.map((item, index) => (
                        <label className="fieldset-label" key={index}>
                            <input type="checkbox" defaultChecked className="toggle" />
                            { item.name }
                        </label>
                    ))
                }
            </div>

            <div className="divider"></div>

            <span>Add Custom Section</span>

            <div className="flex w-full justify-between">
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>Select Type</li>
                        {   
                            ["Text Section", "List Section"].map((item, index) => (
                                <li key={index}><a>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>Select Placement</li>
                        {   
                            ["Left Column", "Right Column"].map((item, index) => (
                                <li key={index}><a>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <button className="btn btn-square btn-soft btn-info">
                    <FiPlus />
                </button>
            </div>
        </div>
    )
}