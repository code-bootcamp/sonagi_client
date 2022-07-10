import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import InquireListContainer from "../../../src/components/units/myPage/inquire/inquireList/InquireList.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function InquireListPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <InquireListContainer />
    </Wrapper>
  );
}
