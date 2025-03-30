import React from "react";

export const BlastingSpecs = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1601232193692-28a2a69a2d3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tzfGVufDB8fDB8fHwy";
  const sideImg =
    "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover"
    >
      <div className="relative bg-[rgba(0,0,0,0.7)] w-full flex justify-between">
        <div className="flex flex-col gap-2 w-full text-center z-20 border tablet:w-1/2 items-center rounded-lg m-10 p-10">
          <h2>Vad vi kan göra</h2>
          <ul className="list-disc flex flex-col gap-2 text-left">
            <li>Ovanjordssprängning</li>
            <li>Borrning</li>
            <li>Schaktning</li>
            <li>Slaktning</li>
            <li>Namngivning av höns och kreatur</li>
          </ul>
        </div>

        <img
          src={sideImg}
          className="hidden tablet:block w-2/5 object-cover z-0"
        />
      </div>
    </div>
  );
};
