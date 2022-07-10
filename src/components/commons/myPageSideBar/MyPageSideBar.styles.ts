import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  margin-right: 2.6%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MyPage = styled.div`
  font-size: 18px;
  color: #141414;
  margin: 20px 0px 67px 0px;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 2px 15px 0px 0px;
`;

export const Vector = styled.img`
  width: 20px;
  height: 18px;
  margin: 5px 15px 0px 0px;
`;

export const Line = styled.div`
  width: 173px;
  border: 1px solid #f2f2f2;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #333333;
`;

export const Menu = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  margin-top: 7px;
  cursor: pointer;
`;
