import React from "react";

export const Story = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604065781162-602728f326a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGlwZWxhZ298ZW58MHx8MHx8fDI%3D";

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover"
    >
      <div className="relative bg-[rgba(0,0,0,0.7)] w-screen flex justify-center">
        <div className="flex flex-col gap-2 w-full  z-20 border tablet:w-1/2 text-center items-center rounded-lg m-10 p-10">
          <h2>Ett litet familjeföretag</h2>
          <p className="">Vi är en far och son duo som har gjort det mest.</p>
        </div>
      </div>
    </div>
  );
};
