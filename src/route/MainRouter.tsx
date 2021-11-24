import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "../containers";

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
