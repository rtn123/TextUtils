import React,{useState} from "react";
export default function About() {
//   let myStyle = {
//     color: "white",
//     backgroundColor: "black",
//   };
const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'

});

const [buttonText,setButtonText]=useState("Enable Light Mode");
let toggleStyle=()=>{
    if(myStyle.color==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        });
        setButtonText("Enable Dark Mode");

    }
    else{

        setMyStyle({
            color:'white',
            backgroundColor:'black'
        });

        setButtonText("Enable Light Mode");

    }
    
}


  return (
    
      <div className="container my-3" >
        
        <div className="container text-center my-2 ">
          {/* <h2 > About </h2> */}
        </div>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <h2 className="text-center">About us</h2>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>About Item #1</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is TextUtils Application.</strong> 
                
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
               <strong> About Item #2 </strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This app is useful in text based manipulations.</strong> 
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
               <strong> About Item #3</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This app is developed with React.js</strong> 
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-2">
          <button onClick={toggleStyle} type="button" className="btn btn-primary ">
            {buttonText}
          </button>
        </div> */}
      </div>
    
  );
}
