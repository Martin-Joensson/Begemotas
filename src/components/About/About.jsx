import React from "react";
import { Location } from "../Location";
import { CallUs } from "../CallUs";
import { Story } from "./Story";

export const About = () => {
  return (
    <div>
      <Story />
      <CallUs />
      <Location />
    </div>
  );
};
