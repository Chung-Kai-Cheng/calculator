import React, { useState } from "react";
import Display from "./components/Display";
import ButtonArea from "./components/Button/ButtonArea";
import "./styles/app.scss";

export default function App() {
  const [displayInput, setDisplayInput] = useState("");

  const handleButtonClick = (value) => {
    switch (value) {
      case ".":
        if (!displayInput.includes(".")) {
          setDisplayInput((prevInput) => prevInput + value);
        }
        break;
      case "=":
        try {
          const result = eval(displayInput);
          setDisplayInput(result.toString());
        } catch (error) {
          setDisplayInput("Error");
        }
        break;
      case "AC":
        setDisplayInput("");
        break;
      default:
        setDisplayInput((prevInput) => prevInput + value);
        break;
    }
  };
  return (
    <div className="main-container">
      <Display input={displayInput} />
      <ButtonArea onButtonClick={handleButtonClick} />
    </div>
  );
}
