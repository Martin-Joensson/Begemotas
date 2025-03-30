import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Main/Body";
import { Blasting } from "../components/Sprängarbeten/Blasting";
import { Transport } from "../components/Sjötransport/Transport";
import { About } from "../components/About/About";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/sprangarbeten" element={<Blasting />} />
      <Route path="/sjotransport" element={<Transport />} />
      <Route path="/batvarv" element={<NotFound />} />
      <Route path="/om" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
