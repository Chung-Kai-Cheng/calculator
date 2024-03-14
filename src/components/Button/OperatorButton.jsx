import React from "react";

export default function OperatorButton({ operator, className, onClick }) {
  return (
    <button
      className={`${className} cursor-pointer border-none rounded-md p-2.5 text-4xl font-medium text-white transition duration-200 hover:duration-500 hover:bg-hover-color`}
      onClick={onClick}
    >
      {operator}
    </button>
  );
}
