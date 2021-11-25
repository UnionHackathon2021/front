import React from "react";
import { ReviewNegativeIcon, ReviewPositiveIcon } from "../../../asset";
import * as S from "../style";

const Review = () => {
  return (
    <S.Review>
      <img src={ReviewNegativeIcon} alt="표정아이콘" />
      <span>너무 맛없어요! 진짜 x맛없네 강력 추천 안함~! 가나다라마바사</span>
    </S.Review>
  );
};

export default Review;
