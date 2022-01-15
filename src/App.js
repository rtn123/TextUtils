import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
// import { useState } from 'react/cjs/react.development';
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter as Router,Switch,  Route, Link } from "react-router-dom";

// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#141432";
      showAlert("Dark mode has been enabled", "Success");
    }
  };

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
          </Route>
        </Switch>

        </Router>
      
      </>
    
  );
}

export default App;
