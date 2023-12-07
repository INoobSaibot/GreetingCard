// Filename - pages/contact.js

import React, {useState} from "react";

const GreetingGenerator = () => {
    const handleInputChange = (event) => {
        let inputText = event.target.value
        console.log(event.target.value)
        let encodedString = btoa(inputText)
        console.log(encodedString)
        let url = buildUrl(encodedString)
        // window.location.href = url;
        console.log(window.location.host)
        setCustomUrl(url)
    }

    const buildUrl = (string='') => {
        let param = `/?m=${string}`
        let customUrl = window.location.origin+param

        console.log(customUrl)
        return customUrl
    }

    const [customUrl, setCustomUrl] = useState(buildUrl())
    const inputStyle = {
        fontSize:'7rem'
}
    return (
        <div className='container'>
            <h1 className='_text1'>
                <input style={inputStyle} placeholder="Enter some text" onChange={handleInputChange}></input>
            </h1>
            <a className='text1' href={customUrl}>{customUrl}</a>
        </div>
    );
};

export default GreetingGenerator;