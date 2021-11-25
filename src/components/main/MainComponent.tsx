import React, { FC } from "react";
import { Link } from "react-router-dom";
import StoreCard from "./storeCard/StoreCard";
import * as S from "./style";

const MainComponent: FC = () => {
  return (
    <>
      <S.MainWrapper>
        <S.StoreList>
          {[...Array(8)].map((v, i) => {
            return (
              <Link key={i} to="store/1">
                <StoreCard id={i} />
              </Link>
            );
          })}
        </S.StoreList>
      </S.MainWrapper>
    </>
  );
};

export default MainComponent;
