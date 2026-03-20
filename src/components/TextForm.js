import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked: "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    // console.log("Lower case was clicked: "+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleSentenceClick = () => {
    // console.log("Sentence case was clicked: "+text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Sentencecase","success");
  };

   const handleClearClick = () => {
     let newText = "";
    setText(newText);
    props.showAlert("Clear Text","success");
  };

  const handleCopy=()=>{
    // console.log("I am copy");
    let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to Clipboard","success");
}

const handleExtraSpaces =() =>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("extra spaces remove","success");
}


  const [text, setText] = useState("");
  // setText ("new text");

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor: props.mode==='dark' ? 'grey':'white',color:props.mode==='dark'? 'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>
          Convert to Sentencecase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
        </button>
         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
Remove Extra Spaces
        </button>
        
      </div>
      <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
         <b> {text.split(" ").length} </b>words and <b>{text.length}</b> charcter
        </p>
        <p><b>{0.008 * text.split(" ").length}</b>Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
      </div>
    </>
  );
}
