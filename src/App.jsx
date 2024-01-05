import React, { useState } from "react";
import Display from "./components/Display";
import ButtonArea from "./components/Button/ButtonArea";
import "./styles/app.scss";

export default function App() {
  const [displayInput, setDisplayInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplayInput("");
    } else if (value === "=") {
      try {
        const result = eval(displayInput);
        setDisplayInput(result.toString());
      } catch (error) {
        setDisplayInput("Error");
      }
    } else if (value === ".") {
      if (!displayInput.includes(".")) {
        setDisplayInput((prevInput) => prevInput + value);
      }
    } else {
      setDisplayInput((prevInput) => prevInput + value);
    }
  };
  return (
    <div className="main-container">
      <Display input={displayInput} />
      <ButtonArea onButtonClick={handleButtonClick} />
    </div>
  );
}
