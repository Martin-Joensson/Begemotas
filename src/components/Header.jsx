import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headerLogo from "../assets/BegemotasLOGOBlackNoText.png";

export const Header = () => {
  const [burgerMenu, SetBurgerMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  const hamburgerToggle = () => {
    let x = document.getElementById("burgerLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      // Toggle visibility of the mobile menu
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  const handleClick = () => {};

  return (
    <nav className="bg-begemotas-blue text-white w-screen">
      <div className="flex tablet:flex-col justify-between  items-center">
        <NavLink to="/">
          <div className="flex content-center mx-4 p-2">
            <img
              src={headerLogo}
              alt="Peter & Rusty AB"
              className="w-20 min-w-20 object-contain"
            />

            <h1 className="text-xl font-black p-2 w-full  desktop:text-center">
              Peter & Rusty
            </h1>
          </div>
        </NavLink>

        <div
          className="tablet:hidden cursor-pointer m-4 flex"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f3a220"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16http://localhost:5173/"
            />
          </svg>
        </div>
        <div className="hidden tablet:flex w-full">
          <div className=" hidden tablet:flex w-full font-headerFont justify-evenly">
            <NavLink
              to="/sprangarbeten"
              className="hover:bg-[rgba(255,255,255,0.2)]"
            >
              <p className="p-4">Sprängarbeten</p>
            </NavLink>
            <NavLink
              to="/sjotransport"
              className="hover:bg-[rgba(255,255,255,0.2)]"
            >
              <p className="p-4">Sjötransport</p>
            </NavLink>
            {/* <NavLink to="/batvarv" className="hover:bg-[rgba(255,255,255,0.2)]">
              <p className="p-4 ">Båtvarv</p>
            </NavLink> */}
            <NavLink to="/om" className="hover:bg-[rgba(255,255,255,0.2)]">
              <p className="p-4">Om oss</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div
        id="mobilemenu"
        ref={mobileMenuRef}
        className="flex bg-slate-800 flex-col py-4 gap-4 items-center tablet:flex-row justify-evenly font-headerFont hidden tablet:hidden"
      >
        <NavLink to="/sprangarbeten">
          <p>Sprängarbeten</p>
        </NavLink>
        <NavLink to="/sjotransport">
          <p>Sjötransport</p>
        </NavLink>
        {/* <NavLink to="/batvarv">
          <p>Båtvarv</p>
        </NavLink> */}
        <NavLink to="/om" className="pt-6">
          <p>Om oss</p>
        </NavLink>
      </div>
    </nav>
  );
};
