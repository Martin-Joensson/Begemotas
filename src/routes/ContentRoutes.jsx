import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Main/Body";
import { Blasting } from "../components/Sprängarbeten/Blasting";
import { Transport } from "../components/Sjötransport/Transport";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/sprangarbeten" element={<Blasting />} />
      <Route path="/sjotransport" element={<Transport />} />
      <Route path="/batvarv" element={<NotFound />} />
      <Route path="/om" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
