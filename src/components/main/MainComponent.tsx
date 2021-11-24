import React, { Suspense } from "react";
import { NegativeIcon } from "../../asset";
import * as S from "./style";

const MainComponent = () => {
  return (
    <>
      <S.MainWrapper>
        <S.StoreList>
          <S.StoreCard>
            <img src={NegativeIcon} alt="표정 아이콘" />
          </S.StoreCard>
        </S.StoreList>
      </S.MainWrapper>
    </>
  );
};

export default MainComponent;
