import React, { useState } from "react";


export default function TextForm(props) {


  const [text,setText]=useState("");

  function handleUpclick() {
    let a=text.toUpperCase();
    setText(a);
  }

  function handlelowclick() {
    setText(text.toLowerCase());
  }

  function handleCopyclick() {
    var copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);

  }

  function handleClearclick() {
    let newText="";
    setText(newText);
  }

  function handleSpaceclick() {
    let newText=text.replace(/\s+/g,' ').trim();
    setText(newText);
  }
  const handleOnchange=(event)=>{
    setText(event.target.value);
  }
  
  function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num !== ''
    }).length;
   }

  return (
   <>
    <div style={{color: props.btnText==="Enable Dark Mode"? "black": "white"}} >
     <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          style={{ backgroundColor: props.btnText==="Enable Dark Mode"? "white": "#7e91a4"}}
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handlelowclick} >Convert to LowerCase</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyclick} >Copy Text to Clibboard</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearclick} >Clear Text</button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleSpaceclick} >Remove Extra Spaces</button>

    </div>
    <div className="container my-2" style={{color: props.btnText==="Enable Dark Mode"? "black": "white"}}>
       <h2>Your text summary</h2>
       <p>Word count {getCount(text)} and Character count {text.length}</p>
       <p>{0.008 * getCount(text)} Minutes required</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  );
}
