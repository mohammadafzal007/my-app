import React, { useState } from "react";

export default function Textform(props) {
  const UpperCase = () => {
    if (text === "") {
      props.showalert("No Text to Coverted In UpperCase", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      console.log("UpperCase Clicked");
      let UpperCase = text.toUpperCase();
      setText(UpperCase);
      props.showalert("Text Converted To UpperCase", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const LowerCase = () => {
    if (text === "") {
      props.showalert("No Text to Converted To Lowercase", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      console.log("LowerCase Clicked");
      let LowerCase = text.toLowerCase();
      setText(LowerCase);
      props.showalert("Text Converted in LowerCase", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const capitalizedText = () => {
    if (text === "") {
      props.showalert("No Text to be Capitalized", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      console.log("Text Capitalized");
      let capitalizedtext = text.split(" ");
      let text1 = "";
      for (let item = 0; item < capitalizedtext.length; item++) {
        if (item === capitalizedtext.length - 1) {
          text1 +=
            capitalizedtext[item].charAt(0).toUpperCase() +
            capitalizedtext[item].substring(1);
        } else {
          text1 +=
            capitalizedtext[item].charAt(0).toUpperCase() +
            capitalizedtext[item].substring(1) +
            " ";
        }
      }
      setText(text1);
      props.showalert("Text Capitalized", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const clearText = () => {
    console.log("Text Cleared");
    if (text === "") {
      props.showalert("No Text to Clear", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      let newtext = "";
      setText(newtext);
      props.showalert("Text is Cleared", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const copyText = () => {
    if (text === "") {
      props.showalert("No Text To Copy", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      console.log("Text Copied");
      const text = document.getElementById("text");
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showalert("Text Copied to ClipBoard", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const downloadTxtFile = () => {
    if (text === "") {
      props.showalert("No Text to Download ", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain;charset=utf-8" });
      element.href = URL.createObjectURL(file);
      element.download = "yourFile.txt";
      document.body.appendChild(element);
      element.click();
      props.showalert("Text  Downloaded", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 500);
    }
  };
  const removeextraSpaces = () => {
    if (text === "") {
      props.showalert("No Text to Removed Extra Spaces", "warning");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    } else {
      let extraspaces = text.split(/[ ]+/);
      setText(extraspaces.join(" "));
      props.showalert("Extra Space Removed From Text", "success");
      setTimeout(() => {
        props.setalert(null);
      }, 1500);
    }
  };
  const handleonchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //useState Hook too change the state of component,text is state variable and setText is a function.
  // const[mystyle,settextareastyle]=useState(color:'white',
  //   backgroundColor:'black'

  // );
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const toogledarkmode = () => {
  //   if (mystyle.color === "black") {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtntext("Enable Light Mode");
  //   } else {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   }
  // };
  return (
    <>
      <div
        className={`container border border-${
          props.mode === "dark" ? "white" : "dark"
        } bg-${props.mode} w-100 rounded`}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }} className="display-4">
          {props.heading}
        </h1>

        <textarea
          className="form-control"
          id="text"
          rows="5"
          placeholder="Paste or Type Text Here"
          value={text}
          onChange={handleonchange}
          name="maintextarea"
        ></textarea>

        <button
          className={`btn btn-primary mx-2 btn-success my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={UpperCase}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
        >
          UPPERCASE
        </button>
        <button
          className={`btn btn-primary mx-2 btn-blue my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={LowerCase}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
        >
          lowercase
        </button>
        <button
          className={`btn btn-primary mx-2 btn-warning my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={capitalizedText}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
        >
          Text Capitalized
        </button>
        <button
          className={`btn btn-primary mx-2 btn-info my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={removeextraSpaces}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
        >
          Remove Extra Space
        </button>
        <button
          className={`btn btn-primary mx-2 btn-secondary my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={clearText}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-primary mx-2 btn-link my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={copyText}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
          title="Copy Text"
        >
          <i className="fa-solid fa-copy"></i>Copy Text
        </button>
        <button
          className={`btn btn-primary mx-2 btn-primary my-2 border border-${
            props.mode === "dark" ? "white" : "dark"
          } `}
          onClick={downloadTxtFile}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundolor: props.mode === "dark" ? "black" : "white",
          }}
          title="Download Text"
          id="input"
        >
          <i className="fa-solid fa-circle-down"></i>Download Text
        </button>

        <div
          className={`container my-4 border border-${
            props.mode === "dark" ? "white" : "dark"
          } bg-${props.mode} `}
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>Your Text Summary</h1>
          <hr className="bg-dark" />
          <p>
            No. of Words :{" "}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>No. of Characters : {text.length}</p>
          <p>
            No. of words read in per minute :{" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
          <hr className="bg-dark" />

          <h3>Preview Your Text</h3>

          <textarea
            className="form-control my-2"
            id="text"
            rows="5"
            name="textarea"
            onChange={handleonchange}
            value={text.length === 0 ? "Nothing to Preview" : text}
          ></textarea>
        </div>
      </div>
    </>
  );
}
