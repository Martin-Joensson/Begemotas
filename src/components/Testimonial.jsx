import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1613674992078-f355cd52aba9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1YmJsZXxlbnwwfHwwfHx8Mg%3D%3D";

  const sideImg =
    "https://images.unsplash.com/photo-1582490772231-20eb7d216852?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center"
    >
      <div className="relative bg-[rgba(0,0,0,0.7)] w-full flex justify-between text-center">
        <img src={sideImg} className="object-cover w-2/5 hidden tablet:block" />
        <div className="flex flex-col m-10 gap-2 z-20 w-full tablet:w-1/2 tablet:justify-right border rounded-lg p-10 justify-center">
          <h2>Vad andra säger om oss</h2>
          <TestimonialCard text='"Fan va bra!"' face="1" rating={4} />
          <TestimonialCard
            text='"Det var superenkelt att arbete med Rusty!"'
            face="3"
            rating={4.5}
          />
          <TestimonialCard
            text='"Snabb kontakt och väl utfört, jag skulle anlita dom igen."'
            face="2"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};
