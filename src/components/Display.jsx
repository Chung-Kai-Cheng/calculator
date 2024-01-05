import React from "react";
import "../styles/display.scss";

export default function Display({ input }) {
  return (
    <div className="display-container">
      <p>{input}</p>
    </div>
  );
}
