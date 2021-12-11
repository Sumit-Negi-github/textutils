import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

    const [text,setText] = useState("");

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        props.showAlert("Converted to Uppercase!","success");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("Lowercase was clicked");
        props.showAlert("Converted to Lowercase!","success");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const no_words = () =>{
        const arr = text.split(' ');
        let count = 0;
        arr.forEach(element => {
            if(element.length >0)
                count += 1;
        });
        return count;
    }

    return (
        <>
        <div className= "container" style = {{color: props.mode==='light'?'#1a2541':'white'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode ==='dark'?'gray':'white', color: props.mode==='light'?'#1a2541':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-2" style = {{color: props.mode==='light'?'#1a2541':'white'}}>
            <h2>Text Summary</h2>
            <p>
                {no_words()} words and {text.length} characters
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the text box to preview here'}</p>
        </div>
        </>

    )
}


Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading : "Enter the text to analyze"
}