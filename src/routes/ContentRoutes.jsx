import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Body";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/sprangarbeten" element={<NotFound />} />
      <Route path="/sjotransport" element={<NotFound />} />
      <Route path="/batvarv" element={<NotFound />} />
      <Route path="/om" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
