export function NavBarColor() {
    
    const color = [
        { name : "blue" },
        { name : "pink" },
        { name : "orange" },
        { name : "green" },
        { name : "black" },
    ]

    return (
        <div className="flex flex-col items-center justify-center">
            {
                color.map((item, index) => (
                    <button key={index} className="btn btn-circle bg-red-500 size-15">{item.name}</button>
                ))
            }   
        </div>
    )
}