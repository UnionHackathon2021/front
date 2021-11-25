import React, { FC, Suspense } from "react";
import { Header, StoreDetail } from "../../components";

const StoreDetailContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <StoreDetail />
    </Suspense>
  );
};

export default StoreDetailContainer;
