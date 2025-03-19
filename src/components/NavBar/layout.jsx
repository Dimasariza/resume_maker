import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "@/lib/features/switchLayout";
import { useTranslations } from "next-intl";

export function NavBarLayout() {
    const t = useTranslations('Navbar.layout');
    const { activeLayout } = useSelector((state) => state.SwitchLayout);
    const dispatch = useDispatch();

    const allLayout = [ 
        { name : t("split"), layout: 'split' },
        { name : t("classic"), layout: 'classic' },
        { name : t("hybrid"), layout: 'hybrid' },
    ];

    return (
        <div className="flex join justify-center">
            {
                allLayout.map(({name, layout}) => (
                    <input 
                        onChange={() => dispatch(setLayout(layout))} 
                        key={layout} 
                        className="join-item btn" 
                        type="radio" 
                        name="layout" 
                        aria-label={name} 
                        checked={layout == activeLayout}
                    />
                ))
            }
        </div>
    )
}
