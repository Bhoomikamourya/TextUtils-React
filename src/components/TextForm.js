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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor: props.mode==='dark' ? '#13466e':'white',color:props.mode==='dark'? 'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentenceClick}>
          Convert to Sentencecase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
        </button>
         <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
Remove Extra Spaces
        </button>
        
      </div>
      <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
         <b> {text.split(" ").filter((element)=>( element.length!==0)).length} 
          </b>words and <b>{text.length}</b> charcter
        </p>
        <p><b>{0.008 * text.split(" ").filter((element)=>( element.length!==0)).length}</b>Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
