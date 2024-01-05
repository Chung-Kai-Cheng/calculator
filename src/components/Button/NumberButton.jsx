import React from "react";

export default function NumberButton({ number, onClick }) {
  return (
    <button className={`number-button-${number}`} onClick={onClick}>
      {number}
    </button>
  );
}
