import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import ProfileCertifyContainer from "../../../src/components/units/myPage/profileChange/ProfileCertify/ProfileCertify.container";

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

export default function ProfileCertifyPage() {
  return (
    <Wrapper>
      <DIV>
        <MyPageSideBarContainer />
      </DIV>
      <ProfileCertifyContainer />
    </Wrapper>
  );
}
