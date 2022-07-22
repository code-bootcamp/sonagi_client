import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import InquireDetailContainer from "../../../../src/components/units/myPage/inquire/inquireDetail/InquireDetail.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function InquireDetailPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <InquireDetailContainer />
    </Wrapper>
  );
}
