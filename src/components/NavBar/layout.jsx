import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "@/lib/features/switchLayout";

export function NavBarLayout() {
    const { layout } = useSelector((state) => state.SwitchLayout);

    const dispatch = useDispatch();
    const handleLayout = (layout) => {
        dispatch(setLayout(layout.name));
    }

    const allLayout = [ 
        { name : "Split Layout" },
        { name : "Classic Layout" },
        { name : "Hybrid Layout" },
    ];

    return (
        <div className="flex join justify-center">
            {
                allLayout.map((item, index) => (
                    <input 
                        onChange={() => handleLayout(item)} 
                        key={index} 
                        className="join-item btn" 
                        type="radio" 
                        name="options" 
                        aria-label={item.name} 
                        checked={layout == item.name}
                    />
                ))
            }
        </div>
    )
}
