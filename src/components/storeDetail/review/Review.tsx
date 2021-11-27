import React, { FC } from "react";
import {
  ReviewNegativeIcon,
  ReviewNeutralIcon,
  ReviewPositiveIcon,
} from "../../../asset";
import { reviewType } from "../../../constance";
import * as S from "../style";

const Review: FC<reviewType> = (props) => {
  return (
    <S.ReviewRow>
      <S.Review>
        <img
          src={
            props.sentiment === "negative"
              ? ReviewNegativeIcon
              : props.sentiment === "positive"
              ? ReviewPositiveIcon
              : ReviewNeutralIcon
          }
          alt="표정아이콘"
        />
        <span>{props.content}</span>
      </S.Review>
      <div className="sentiment">
        <div>
          <span>긍정</span>
          <span>{props.positive}</span>
        </div>
        <div>
          <span>부정</span>
          <span>{props.negative}</span>
        </div>
        <div>
          <span>중립</span>
          <span>{props.neutral}</span>
        </div>
      </div>
    </S.ReviewRow>
  );
};

export default Review;
