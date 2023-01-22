import React, { useState } from "react"
import './TextForm.css'
// import React,from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Your Text Here!');
    //setText ('i get your text')
    // function handleclick(){
    //     console.log("ram is my name");
    // }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        console.log("newText")
        setText(newText);
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light'}} rows="8" placeholder={text} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-secondary mx-2" onClick={() => setText('')}>Reset Text</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p> If you are a slow reader it will take {(text.split(" ").length * 0.008 * 60).toFixed(2)} seconds and for fast reader {(text.split(" ").length * 0.008 * 24).toFixed(2)} </p>
                <p> If you are a slow reader it will take {(text.split(" ").length * 0.008).toFixed(2)} minutes and for fast reader {(text.split(" ").length * 0.0032).toFixed(2)}</p>
            </div>
        </div>

    )
}

TextForm.defaultProps = {
    heading: 'Your Text',
}