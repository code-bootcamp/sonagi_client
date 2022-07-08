import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const RecentWatch = styled.div`
  font-size: 1.563rem;
  margin: 50px 0px 40px 0px;
  @media (max-width: 767px) {
    box-shadow: inset 0 -11px #bee3ff;
    line-height: 24px;
    width: 136px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const NovelPic = styled.img`
  width: 151px;
  height: 210px;
  @media (max-width: 767px) {
    width: 140px;
    height: 160px;
  }
`;

export const NovelTitle = styled.div`
  font-size: 22px;
  margin: 20px 0px 8px 0px;
  font-weight: 700;
`;

export const InnerFlex = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const WriterPic = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 13px;

  @media (max-width: 767px) {
    display: none;
  }
`;
export const Writer = styled.div`
  font-size: 18px;
`;

export const MyPageFont = styled.div`
  font-size: 32px;
  margin-bottom: 50px;
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
