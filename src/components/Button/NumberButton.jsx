import React from "react";

export default function NumberButton({ number, onClick }) {
  return (
    <button
      className={`number-button-${number} cursor-pointer`}
      onClick={onClick}
    >
      {number}
    </button>
  );
}
