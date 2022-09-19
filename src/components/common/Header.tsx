import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <div className="wrap">
        <a href="#">GO Together </a>
        <input placeholder="여행 그룹이나 상품을 검색해보세요" />
        <a href="#"> 마이페이지 </a>
        <a href="#"> 로그인 </a>
        <a href="#"> 회원가입 </a>
      </div>
      <div className="menu">
        <nav>
          <a href="#">전체메뉴 </a>
          <a href="#">그룹별 여행 </a>
          <a href="#">지역별 여행 </a>
          <a href="#">테마별 여행 </a>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  * {
    text-decoration: none;
  }
  width: 100%;
  background-color: #d1dfff;
  .wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
  }
`;
