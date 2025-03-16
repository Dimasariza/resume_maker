import { useEffect, useRef, useState } from "react";

const withPersonalize = (WrappedComponent) => {
    function NewComponent (props) {
        const initialValue = {
            name: "",
            role: "",
            aboutMe: "",
            experience: "",
            personalDetails: "",
            location: "",
            email: "",
            phoneNumber: "",
            url: "",
            
        }
        const [selectedFile, setSelectedFile] = useState(null)
        const [value, setValue] = useState(initialValue)
        const [editable, setEditable] = useState({
            name: false,
            role: false,
            aboutMe: false
        })

        const inputRef = useRef(null);
    
        useEffect(() => {
            const handleOutSideClick = (event) => {
            if (!inputRef.current?.contains(event.target)) {
                setEditable((prevState) => 
                    Object.keys(prevState).reduce((acc, key) => {
                        acc[key] = false;
                        return acc;
                    }, {})
                );
            }
            };
        
            window.addEventListener("mousedown", handleOutSideClick);
        
            return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
            };
        }, [inputRef]);

        const handleUploadImage = (e) => {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onloadend = () => {
                    setSelectedFile(reader.result)
                }
                reader.readAsDataURL(file)
            }
        }

        return <WrappedComponent 
            handleUploadImage={handleUploadImage} 
            selectedFile={selectedFile}
            editable={editable}
            setEditable={setEditable}
            value={value}
            setValue={setValue}
            inputRef={inputRef}
            {...props} 
        />
    } 

    return NewComponent
};

export default withPersonalize;