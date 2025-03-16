import SplitLayout from "@components/Layout/splitlayout";
import ClassicLayout from "@components/Layout/classiclayout";
import HybridLayout from "@components/Layout/hybridlayout";
import { useSelector } from "react-redux";

export function Content (params) {
    const acativeLayout = useSelector((state) => state.SwitchLayout.layout);

    const getActiveLayout = () => {
        switch (acativeLayout) {
            case "Split Layout":
                return <SplitLayout />
            case "Classic Layout":
                return <ClassicLayout />
            case "Hybrid Layout":
                return <HybridLayout />
            default:
                return <SplitLayout />
        }
    }

    return (
        <section className="flex h-full min-h-screen bg-white w-4/5">
            <h1 className="text-black w-full">
                { getActiveLayout() }
            </h1>
        </section>
    )
}

export default Content;