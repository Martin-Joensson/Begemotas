import React from "react";

export const TransportSpecs = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1609683190877-065a199e731f?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const sideImg =
    "https://msboat.com/media/upload/gallery/0/176/file/7ac2ccc0820bc0bd032f40db4ec2594b_25.jpg";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover"
    >
      <div className="relative bg-[rgba(0,0,0,0.7)] w-full flex justify-between">
        <div className="flex flex-col gap-2 w-full text-center z-20 border tablet:w-1/2 items-center rounded-lg m-10 p-10">
          <h2>Få det sjövägen</h2>
          <ul className="list-disc flex flex-col gap-2 text-left">
            <li>Materialtransport </li>
            <li>Maskintransport</li>
            <li>Bogsering</li>
            <li>Hjälp vid motorhaveri</li>
            <li>Namngivning av skutor medels champagne</li>
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
