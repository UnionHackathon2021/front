import React, { FC, Suspense } from "react";
import { Header, MainComponent } from "../../components";

const MainContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MainComponent />
    </Suspense>
  );
};

export default MainContainer;
