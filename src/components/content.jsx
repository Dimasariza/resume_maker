import SplitLayout from "@components/Layout/splitlayout";
import ClassicLayout from "@components/Layout/classiclayout";
import HybridLayout from "@components/Layout/hybridlayout";
import { useSelector } from "react-redux";
import { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export function Content (params) {
    const acativeLayout = useSelector((state) => state.SwitchLayout.layout);

    const printRef = useRef(null);

    const handleDownloadPDF = async () => {
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
        <section ref={printRef} className="flex h-full min-h-screen bg-title  w-4/5 mt-3">
            <div className="text-black w-full p-10 bg-app-color-blue">
                {/* <button onClick={handleDownloadPDF}>Print PDF</button> */}
                { getActiveLayout() }
            </div>
        </section>
    )
}

export default Content;