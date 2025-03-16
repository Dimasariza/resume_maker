import { useDispatch } from "react-redux";
import { setLayout } from "@/lib/features/switchLayout";

export function NavBarLayout() {
    const dispatch = useDispatch();
    const handleLayout = (layout) => {
        dispatch(setLayout(layout.name));
    }

    const layout = [ 
        { name : "Split Layout" },
        { name : "Classic Layout" },
        { name : "Hybrid Layout" },
    ];

    return (
        <div className="flex join justify-center">
            {
                layout.map((item, index) => (
                    <input onClick={() => handleLayout(item)} key={index} className="join-item btn" type="radio" name="options" aria-label={item.name} />
                ))
            }
        </div>
    )
}
