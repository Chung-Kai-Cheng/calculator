import React, { useState } from "react";
import Display from "./components/Display";
import ButtonArea from "./components/Button/ButtonArea";
import "./styles/app.scss";

// 聲明component類型
const App: React.FC = () => {
  // 確保displayInput為字串
  const [displayInput, setDisplayInput] = useState<string>("");

  // 確保接收的值為字串
  const handleButtonClick = (value: string): void => {
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
};

export default App;
