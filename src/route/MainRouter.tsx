import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChatBotContainer, MainContainer } from "../containers";
import StoreDetailContainer from "../containers/storeDetail";

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/store/:id" element={<StoreDetailContainer />} />
          <Route path="/chatBot" element={<ChatBotContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
