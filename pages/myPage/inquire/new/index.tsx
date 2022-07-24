import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import InquireWriteContainer from "../../../../src/components/units/myPage/inquire/inquireWrite/InquireWrite.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function InquireWritePage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <InquireWriteContainer />
    </Wrapper>
  );
}
