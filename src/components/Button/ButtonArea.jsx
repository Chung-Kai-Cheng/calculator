import React from "react";
import OperatorButton from "./OperatorButton";
import NumberButton from "./NumberButton";
import "../../styles/button-area.scss";

export default function ButtonArea({ onButtonClick }) {
  const handleButtonClick = (value) => {
    onButtonClick(value);
  };

  return (
    <div className="button-container">
      <OperatorButton
        operator="AC"
        className="all-clean"
        onClick={() => handleButtonClick("AC")}
      />
      <OperatorButton
        operator="/"
        className="devided-by"
        onClick={() => handleButtonClick("/")}
      />
      <OperatorButton
        operator="x"
        className="times"
        onClick={() => handleButtonClick("*")}
      />
      <NumberButton number="7" onClick={() => handleButtonClick("7")} />
      <NumberButton number="8" onClick={() => handleButtonClick("8")} />
      <NumberButton number="9" onClick={() => handleButtonClick("9")} />
      <OperatorButton
        operator="-"
        className="minus"
        onClick={() => handleButtonClick("-")}
      />
      <NumberButton number="4" onClick={() => handleButtonClick("4")} />
      <NumberButton number="5" onClick={() => handleButtonClick("5")} />
      <NumberButton number="6" onClick={() => handleButtonClick("6")} />
      <OperatorButton
        operator="+"
        className="plus"
        onClick={() => handleButtonClick("+")}
      />
      <NumberButton number="1" onClick={() => handleButtonClick("1")} />
      <NumberButton number="2" onClick={() => handleButtonClick("2")} />
      <NumberButton number="3" onClick={() => handleButtonClick("3")} />
      <OperatorButton
        operator="="
        className="equals"
        onClick={() => handleButtonClick("=")}
      />
      <NumberButton number="0" onClick={() => handleButtonClick("0")} />
      <NumberButton number="." onClick={() => handleButtonClick(".")} />
    </div>
  );
}
