import React from "react";

export const ImageContainer = ({ image, text, heading }) => {
  const bgImg = image;
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover h-60"
    >
      {/* <div className="bg-[rgba(0,0,0,0.7)] w-full flex flex-col text-center p-6 gap-2">
        {heading ? <h2>{heading}</h2> : null}
        {text ? <p>{text}</p> : null}
      </div> */}
    </div>
  );
};
