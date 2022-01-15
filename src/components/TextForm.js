import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Upper case converter was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    // setText("You have clicked on Upper case button.");

    props.showAlert("Text has been converted to uppercase","Success");

  }

  const handleOnChange=(event)=>{
   // console.log("On change");
    setText(event.target.value);
    
  }

  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);

    props.showAlert("Text has been converted to Lowercase","Success");

  }
  
  const handleClearClick=()=>{
    let clear="";
    setText(clear);

    props.showAlert("Text has been cleared","Success");
  }

  const removeExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra spaces have been removed from text","Success");
  }

  const [text,setText]=useState("Enter text here"); // useState is a hook
  //text="new text";

  let handleCopyClick=()=>{
    let text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to clipboard","Success");


    
  }
  const countChar=(array)=>{
    let sum=0;
    for(let e of array)
       sum+=e.length;
    return sum;
  }

  return (
    <>
    <div className="container"   style={{
            color:(props.mode==='dark'?'white':'black')
          }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="6" 
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor:(props.mode==='dark'?'#141432':'white'),
            color:(props.mode==='dark'?'white':'black')
          }}
        ></textarea>     
      </div>
      

      <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick ={handleUpClick}>Convert to uppercase</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleLowClick}>Convert to lowercase</button>


      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleClearClick}>Clear text</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleCopyClick}>Copy text</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick ={removeExtraSpace}>Remove extra spaces</button>
    </div>

    <div className="container  my-3" style={{color:(props.mode==='dark'?'white':'black')}}>
      <h2> Your text summary </h2>
      <p> {text.split(/\s+/).filter(e=>e.length>0).length} words and {countChar(text.split(/\s+/))} characters</p>
      <p> {0.008*text.split(/\s+/).filter(e=>e.length>0).length} minutes read</p>
      <h2> Preview</h2>
      <p> {text.length>0?`${text}`:"Enter some text in textbox above to preview"}</p>

    

    </div>


    </>
  );
}
