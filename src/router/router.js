import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { News1 } from "../news/News1";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news1" element={<News1 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
