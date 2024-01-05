import React from "react";
import OperatorButton from "./OperatorButton";
import NumberButton from "./NumberButton";
import "../../styles/button-area.scss";

export default function ButtonArea() {
  return (
    <div className="button-container">
      <OperatorButton operator="AC" className="all-clean" />
      <OperatorButton operator="/" className="devided-by" />
      <OperatorButton operator="x" className="times" />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <OperatorButton operator="-" className="minus" />
      <NumberButton number="4" />
      <NumberButton number="5" />
      <NumberButton number="6" />
      <OperatorButton operator="+" className="plus" />
      <NumberButton number="1" />
      <NumberButton number="2" />
      <NumberButton number="3" />
      <OperatorButton operator="=" className="equals" />
      <NumberButton number="0" />
      <NumberButton number="." />
    </div>
  );
}
