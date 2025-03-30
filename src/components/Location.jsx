import React from "react";

export const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.2534547870337!2d18.52267127688737!3d59.295324113742524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f57f178f961baf%3A0x480c3da85c26c3f3!2zS3Jva3Nqw7Z2w6RnZW4gMTAsIDEzOSA0MSBWw6RybWTDtg!5e0!3m2!1ssv!2sse!4v1743319954856!5m2!1ssv!2sse"
        className="w-full"
        height="450"
        style={{ border: "0" }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

