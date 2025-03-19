import SplitLayout from "@components/Layout/splitlayout";
import ClassicLayout from "@components/Layout/classiclayout";
import HybridLayout from "@components/Layout/hybridlayout";
import { useSelector } from "react-redux";
import { act, useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

export function Content (params) {
    const { activeLayout } = useSelector((state) => state.SwitchLayout);

    const printRef = useRef(null);

    const handleDownloadPDF = async () => {
        const element = printRef.current
        if(!element) return;

        const image = await toPng(element,{ quality:0.95 });
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: "px",
            format: "a4"
        });
        
        const imgProperties = pdf.getImageProperties(image)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

        pdf.addImage(image,'PNG',0,0,pdfWidth,pdfHeight);
        pdf.save();
    }

    const getActiveLayout = () => {
        switch (activeLayout) {
            case "split":
                return <SplitLayout />
            case "classic":
                return <ClassicLayout />
            case "hybrid":
                return <HybridLayout />
            default:
                return <SplitLayout />
        }
    }

    return (
        <section className="flex h-full min-h-screen bg-title w-4xl mt-5">
            <input type="checkbox" id="download_content" className="invisible" onChange={()=>handleDownloadPDF()} />
            <div ref={printRef} className="text-black w-full p-20 bg-white">
                { getActiveLayout() }
            </div>
        </section>
    )
}

export default Content;