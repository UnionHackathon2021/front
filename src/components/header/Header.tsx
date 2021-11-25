import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Logo, ProjectName } from "../../asset";
import * as S from "./style";

const Header: FC = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Link to="/">
          <img src={Logo} alt="로고" className="logo" />
        </Link>
        <Link to="/">
          <img src={ProjectName} alt="프로젝트 이름" />
        </Link>
      </S.HeaderWrapper>
    </>
  );
};
export default Header;
