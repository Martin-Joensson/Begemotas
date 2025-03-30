import { faGithub, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../assets/explosivt.png";
export const Footer = () => {
  // Adress, Orgnr, Telefon nummer, Certifikat Mail.
  return (
    <div className="bg-begemotas-blue font-poppins z-50">
      <div className="flex justify-between m-4 text-sm">
        <div className="flex flex-col">
          <address>Kroksjövägen 10, 139 41 Värmdö</address>
          <telephone>073-967 48 44</telephone>
          <organization>Org.nr 559038-4623</organization>
          <a href="mailto:info@peterandrusty.se">info@peterandrusty.se</a>
        </div>
        <div className="flex flex-col text-right">
          <p>Certifikat</p>
          <img
            alt="Varningsskylt - Explosivt"
            className="w-16"
            src={footerImage}
          />
        </div>
      </div>

      <p className="text-center text-xs text-[rgba(255,255,255,0.87)]">
        &copy; 2025 - Peter & Rusty AB
      </p>
      <p className="text-center text-xs text-[rgba(255,255,255,0.3)]">
        Hemsida av Raglan Creation
      </p>
    </div>
  );
};
