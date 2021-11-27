import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChatBot, StoreImg } from "../../asset";
import { reviewResponseType } from "../../constance";
import { getReview } from "../../util/api/review";
import Review from "./review/Review";
import * as S from "./style";

const StoreDetail: FC = () => {
  const [reviewList, setReviewList] = useState<reviewResponseType>({
    reviewList: [],
    totalNegative: 0,
    totalNeutral: 0,
    totalPositive: 0,
  });

  useEffect(() => {
    getReview()
      .then((res) => {
        setReviewList(res.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <S.MainWrapper>
        <S.StoreDetailWrapper>
          <S.StoreContent>
            <img src={StoreImg} alt="가게 사진" />
            <S.ClubInfo>
              <span className="clubTitle">서울 어딘가 카페</span>
              <span className="clubAdress">
                전라북도 구미시 자이아파트 101동 103호
              </span>
              <div className="tagList">
                <span>부정 : {reviewList.totalNegative}</span>
                <span>긍정 : {reviewList.totalNeutral}</span>
                <span>중립 : {reviewList.totalNeutral}</span>
              </div>
              <div className="reviewBtnWrapper">
                <Link to="/chatBot">
                  <button className="writeReview">리뷰 작성</button>
                </Link>
                <button className="reviewCnt">12개의 리뷰</button>
              </div>
            </S.ClubInfo>
          </S.StoreContent>
          <S.ReviewWrapper>
            <S.ReviewContainer>
              <div className="reviewList">
                {reviewList?.reviewList.length === 0 ? (
                  <span>리뷰가 없습니다.</span>
                ) : (
                  reviewList.reviewList.map((v, i) => {
                    return <Review key={i} {...v} />;
                  })
                )}
              </div>
            </S.ReviewContainer>
          </S.ReviewWrapper>
          <Link to="/chatBot">
            <S.ChatBotWrapper>
              <span>상품 후기를 도현이에게 남겨주세요!</span>
              <img src={ChatBot} alt="챗봇 프로필" />
            </S.ChatBotWrapper>
          </Link>
        </S.StoreDetailWrapper>
      </S.MainWrapper>
    </>
  );
};

export default StoreDetail;
