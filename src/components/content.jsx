import SplitLayout from "@components/Layout/splitlayout";
import ClassicLayout from "@components/Layout/classiclayout";
import HybridLayout from "@components/Layout/hybridlayout";
import { useSelector } from "react-redux";
import { act, useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export function Content (params) {
    const { activeLayout } = useSelector((state) => state.SwitchLayout);

    const printRef = useRef(null);

    const handleDownloadPDF = async () => {
        console.log("Print PDF")
        const element = printRef.current

        if(!element) return;

        const canvas = await html2canvas(element)

        const data = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: "px",
            format: "a4"
        })

        const imgProperties = pdf.getImageProperties(data)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight)
        pdf.save("examplepdf.pdf")
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
        <section ref={printRef} className="flex h-full min-h-screen bg-title w-4xl mt-5">
            <div className="text-black w-full p-15 bg-white">
                <input type="checkbox" id="download_content" className="invisible" onChange={()=>handleDownloadPDF()} />
                { getActiveLayout() }
            </div>
        </section>
    )
}

export default Content;