import React from "react";
import { Logo, ProjectName } from "../../asset";
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <img src={Logo} alt="로고" className="logo" />
        <img src={ProjectName} alt="프로젝트 이름" />
      </S.HeaderWrapper>
    </>
  );
};
export default Header;
