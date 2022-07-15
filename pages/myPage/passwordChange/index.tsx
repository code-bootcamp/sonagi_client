import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PasswordChangeContainer from "../../../src/components/units/myPage/passwordChange/PasswordChange.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function PasswordChangePage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <PasswordChangeContainer />
    </Wrapper>
  );
}
