import React, { useState } from "react";
import Display from "./components/Display";
import ButtonArea from "./components/Button/ButtonArea";
import "./styles/app.scss";

export default function App() {
  const [displayInput, setDisplayInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplayInput("");
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
