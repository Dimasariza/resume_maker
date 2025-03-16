export function NavBarTypography() {
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

    return (
        <div >
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        typography.map((item, index) => (
                            <li key={index}><a>{item.name}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex join justify-center">
                {
                    typographySize.map((item, index) => (
                        <input onClick={() => handleLayout(item)} key={index} className="join-item btn" type="radio" name="options" aria-label={item.name} />
                    ))
                }
            </div>
        </div>
    )
}