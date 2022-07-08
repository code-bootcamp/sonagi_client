import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import InquireListContainer from "../../../src/components/units/myPage/inquire/inquireList/InquireList.container";

const Wrapper = styled.div`
  display: flex;
`;

const Break = styled.div`
  width: 20%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function InquireListPage() {
  return (
    <Wrapper>
      <Break>
        <MyPageSideBarContainer />
      </Break>
      <InquireListContainer />
    </Wrapper>
  );
}
