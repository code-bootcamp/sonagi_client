import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import DonateNovelContainer from "../../../src/components/units/myPage/donateNovel/DonateNovel.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function DonateNovelPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <DonateNovelContainer />
    </Wrapper>
  );
}
