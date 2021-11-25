import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "../containers";
import StoreDetailContainer from "../containers/storeDetail";

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/store/:id" element={<StoreDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
