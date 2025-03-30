import React from "react";
import { Hero } from "./Hero";
import { Testimonial } from "./Testimonial";
import { Location } from "./Location";
import { ImageContainer } from "./ImageContainer";

export const Body = () => {
  return (
    <div className="w-full">
      <Hero />
      <ImageContainer
        //text="Textilitext"
        // heading="rubrik"
        image="https://images.unsplash.com/photo-1586017198015-5cefee201cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Testimonial />
      <Location />
    </div>
  );
};
