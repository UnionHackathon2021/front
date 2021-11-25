import React, { FC } from "react";
import { ChatBot, ReviewNegativeIcon, StoreImg } from "../../asset";
import Review from "./review/Review";
import * as S from "./style";

const StoreDetail: FC = () => {
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
                <span># 카페</span>
                <span># 예쁜 곳</span>
                <span># 맛집</span>
              </div>
              <div className="reviewBtnWrapper">
                <button className="writeReview">리뷰 작성</button>
                <button className="reviewCnt">12개의 리뷰</button>
              </div>
            </S.ClubInfo>
          </S.StoreContent>
          <S.ReviewWrapper>
            <S.ReviewContainer>
              <div className="reviewList">
                {[...Array(7)].map((v, i) => {
                  return <Review key={i} />;
                })}
              </div>
            </S.ReviewContainer>
          </S.ReviewWrapper>
          <S.ChatBotWrapper>
            <span>상품 후기를 도현이에게 남겨주세요!</span>
            <img src={ChatBot} alt="챗봇 프로필" />
          </S.ChatBotWrapper>
        </S.StoreDetailWrapper>
      </S.MainWrapper>
    </>
  );
};

export default StoreDetail;
