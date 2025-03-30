import React from "react";
import { BlastingSpecs } from "./BlastingSpecs";
import { BlastingImages } from "./BlastingImages";
import { ImageContainer } from "../ImageContainer";
import { CallUs } from "../CallUs";

export const Blasting = () => {
  return (
    <div>
      <BlastingSpecs />
      <ImageContainer
        content={true}
        heading="Mer än att bara spränga"
        text="Vi kan hjälpa dig i planering av ditt arbete. Då vet du att resultatet kommer bli som du tänkt dig. Med erfarenheter från byggbranschen vet vi vad som kommer hända efter att berget är borta."
        image="https://images.unsplash.com/photo-1586017198015-5cefee201cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BlastingImages />
      <CallUs />
    </div>
  );
};
