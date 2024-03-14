import React from "react";
import OperatorButton from "./OperatorButton";
import NumberButton from "./NumberButton";

export default function ButtonArea({ onButtonClick }) {
  const handleButtonClick = (value) => {
    onButtonClick(value);
  };
  return (
    <div className="button-container grid w-full h-4/5 grid-cols-4 grid-rows-5 gap-1">
      <OperatorButton
        operator="AC"
        className="all-clean col-span-2 bg-alert-color"
        onClick={() => handleButtonClick("AC")}
      />
      <OperatorButton
        operator="/"
        className="devided-by  bg-second-color"
        onClick={() => handleButtonClick("/")}
      />
      <OperatorButton
        operator="x"
        className="times  bg-second-color"
        onClick={() => handleButtonClick("*")}
      />
      <NumberButton number="7" onClick={() => handleButtonClick("7")} />
      <NumberButton number="8" onClick={() => handleButtonClick("8")} />
      <NumberButton number="9" onClick={() => handleButtonClick("9")} />
      <OperatorButton
        operator="-"
        className="minus  bg-second-color"
        onClick={() => handleButtonClick("-")}
      />
      <NumberButton number="4" onClick={() => handleButtonClick("4")} />
      <NumberButton number="5" onClick={() => handleButtonClick("5")} />
      <NumberButton number="6" onClick={() => handleButtonClick("6")} />
      <OperatorButton
        operator="+"
        className="plus  bg-second-color"
        onClick={() => handleButtonClick("+")}
      />
      <NumberButton number="1" onClick={() => handleButtonClick("1")} />
      <NumberButton number="2" onClick={() => handleButtonClick("2")} />
      <NumberButton number="3" onClick={() => handleButtonClick("3")} />
      <OperatorButton
        operator="="
        className="equals row-span-2 bg-alert-color"
        onClick={() => handleButtonClick("=")}
      />
      <NumberButton
        number="0"
        className="col-span-2"
        onClick={() => handleButtonClick("0")}
      />
      <NumberButton number="." onClick={() => handleButtonClick(".")} />
    </div>
  );
}
