import styled from "@emotion/styled";
import React from "react";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import ProfileCertifyContainer from "../../../src/components/units/myPage/profileChange/ProfileCertify/ProfileCertify.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function ProfileCertifyPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <ProfileCertifyContainer />
    </Wrapper>
  );
}
