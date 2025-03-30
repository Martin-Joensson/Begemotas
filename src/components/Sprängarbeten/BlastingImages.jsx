import React from "react";

export const BlastingImages = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1601232193692-28a2a69a2d3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tzfGVufDB8fDB8fHwy";
  const sideImg =
    "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const sideImg2 =
  "https://images.unsplash.com/photo-1579580033453-2327e067baa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhhcmRoYXR8ZW58MHx8MHx8fDI%3D";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-center bg-cover flex flex-col tablet:flex-row"
      >
        <img
          src={sideImg}
          className=" tablet:w-1/2 object-cover z-0"
        />
        <img
          src={sideImg2}
          className="tablet:w-1/4 object-cover z-0"
        />
      </div>
    </div>
  );
};
