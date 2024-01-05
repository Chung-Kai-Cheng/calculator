import React from "react";

export default function OperatorButton({ operator, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {operator}
    </button>
  );
}
