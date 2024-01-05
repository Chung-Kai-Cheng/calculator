import React from "react";

export default function OperatorButton({ operator, className }) {
  return <button className={className}>{operator}</button>;
}
