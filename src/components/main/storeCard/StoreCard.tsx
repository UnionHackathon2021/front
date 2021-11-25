import React, { FC } from "react";
import { NegativeIcon, PositiveIcon, StoreImg } from "../../../asset";
import * as S from "../style";

type Props = {
  id: number;
};

const StoreCard: FC<Props> = (props) => {
  return (
    <S.StoreCard>
      <img
        src={props.id % 2 ? NegativeIcon : PositiveIcon}
        alt="표정 아이콘"
        className="lookIcon"
      />
      <S.CardContent>
        <img src={StoreImg} alt="가게 사진" className="storeImg" />
        <div>
          <strong className="storeName">서울 어딘가 카페</strong>
          <span>리뷰 수: 999개</span>
        </div>
      </S.CardContent>
    </S.StoreCard>
  );
};

export default StoreCard;
