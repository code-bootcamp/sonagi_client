import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import InquireWriteContainer from "../../../src/components/units/myPage/inquire/inquireWrite/InquireWrite.container";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DIV = styled.div`
  width: 20%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
const Break = styled.div`
  width: 80%;
  @media ${breakPoints.mobile} {
    margin-left: 10%;
  }
`;

export default function InquireWritePage() {
  return (
    <Wrapper>
      <DIV>
        <MyPageSideBarContainer />
      </DIV>
      <Break>
        <InquireWriteContainer />
      </Break>
    </Wrapper>
  );
}
