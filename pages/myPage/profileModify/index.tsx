import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";

import ProfileModifyContainer from "../../../src/components/units/myPage/profileChange/ProfileModify/ProfileModify.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function ProfileModifyPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <ProfileModifyContainer />
    </Wrapper>
  );
}
