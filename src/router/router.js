import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { News1 } from "../news/News1";
import Home from "../pages/Home";
import { PhotoAlbum1 } from "../photos/PhotoAlbum1";
import { PhotoAlbum2 } from "../photos/PhotoAlbum2";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news1" element={<News1 />} />
        <Route path="/photo-album-1" element={<PhotoAlbum1 />} />
        <Route path="/photo-album-2" element={<PhotoAlbum2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
