import React from "react";

export default function NumberButton({ number }) {
  return <button className={`number-button-${number}`}>{number}</button>;
}
