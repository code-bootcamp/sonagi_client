import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PointChargeContainer from "../../../src/components/units/myPage/pointCharge/PointCharge.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function PointCharge() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <PointChargeContainer />
    </Wrapper>
  );
}
