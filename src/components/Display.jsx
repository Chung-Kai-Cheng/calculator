import React from "react";

export default function Display({ input }) {
  return (
    <div className="display-container flex justify-end items-end overflow-hidden flex-wrap text-2xl w-full h-1/5 rounded-md bg-display-color text-white p-4 mb-1.5">
      <p>{input}</p>
    </div>
  );
}
