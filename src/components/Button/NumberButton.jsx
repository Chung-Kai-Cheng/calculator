import React from "react";

export default function NumberButton({ number, className, onClick }) {
  return (
    <button
      className={`number-button-${number} ${className} cursor-pointer border-none rounded-md p-2.5 text-4xl font-medium text-white bg-main-color transition duration-200 hover:duration-500 hover:bg-hover-color`}
      onClick={onClick}
    >
      {number}
    </button>
  );
}
