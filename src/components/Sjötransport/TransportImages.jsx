import React from "react";

export const TransportImages = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604065781162-602728f326a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGlwZWxhZ298ZW58MHx8MHx8fDI%3D";
  const sideImg =
    "https://scontent.fgse1-1.fna.fbcdn.net/v/t1.6435-9/41961302_1231059333701718_5260878867907739648_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=F6-EKLCHe0kQ7kNvgF_3cRM&_nc_oc=Admqpqg1b3Yze_yZAhXUbggUkHKO_4KCuuOuFsuTWE5ka7bG58qldXBDzYaXfUv5KTc&_nc_zt=23&_nc_ht=scontent.fgse1-1.fna&_nc_gid=xTIXZX5f2hzB2DUP3sqrPA&oh=00_AYHWxcgUnC2gA2YufM9v27kGsBvbcX7QdyexB6IS1080TA&oe=6810F9E1";
  const sideImg2 =
    "https://images.unsplash.com/photo-1579580033453-2327e067baa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhhcmRoYXR8ZW58MHx8MHx8fDI%3D";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-center bg-cover flex flex-col tablet:flex-row"
      >
        <img src={sideImg} className=" tablet:w-1/2 object-cover z-0" />
        {/* <img src={sideImg2} className="tablet:w-1/4 object-cover z-0" /> */}
      </div>
    </div>
  );
};
