import React from "react";
import { TransportSpecs } from "./TransportSpecs";
import { TransportImages } from "./TransportImages";
import { ImageContainer } from "../ImageContainer";
import { CallUs } from "../CallUs";

export const Transport = () => {
  return (
    <div>
      <TransportSpecs />
      <CallUs />
      <TransportImages />
      <ImageContainer
        content={true}
        heading="Få det dit du vill"
        text="Behöver du leverans till yttre skärgården? Inga problem.."
        image="https://images.unsplash.com/photo-1586017198015-5cefee201cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
