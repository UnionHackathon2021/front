import React, { FC, Suspense } from "react";
import StoreCard from "./storeCard/StoreCard";
import * as S from "./style";

const MainComponent: FC = () => {
  return (
    <>
      <S.MainWrapper>
        <S.StoreList>
          {[...Array(8)].map((v, i) => {
            return <StoreCard key={i} id={i} />;
          })}
        </S.StoreList>
      </S.MainWrapper>
    </>
  );
};

export default MainComponent;
