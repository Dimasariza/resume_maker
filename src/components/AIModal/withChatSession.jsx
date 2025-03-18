import { AIChatSession } from "@service/AIModel";
import { useState } from "react";

function withChatSession(WrappedComponent) {
    function NewComponent (props) {
        const [promp, setPromp] = useState("");
        const generateSummaryFromAI = async () => {
            // const result = await AIChatSession.sendMessage()
        }

        return <WrappedComponent 
            generateSummaryFromAI={generateSummaryFromAI}
            promp={promp}
            setPromp={setPromp}
            {...props}
        />
    }
    return NewComponent;
}

export default withChatSession