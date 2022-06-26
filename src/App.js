import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const [mode, setMode] = useState("light");

  const togglemode = () => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      setbtntext("Enable Light Mode");
      showalert("Dark Mode Enabled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbtntext("Enable Dark Mode");
      showalert("Light Mode Enabled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  };
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
  };
  return (
    <>
    <Router>
    
      <div>
      
        <Navbar title="Text Analyzer"  mode={mode} togglemode={togglemode}   btntext={btntext}
        />
        <Alert alert={alert} />
        <div className="container  my-3">
        <Routes>
          <Route path="/about" element={<About />} />
           
          
          <Route path="/" element={     <TextForm
            heading="Enter Text to Analyze"
            mode={mode}
            showalert={showalert}
            setalert={setalert}
          />}>    
     
          </Route>
        </Routes>
         
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
