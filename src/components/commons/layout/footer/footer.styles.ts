import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px 100px;
  background: #f7f7f7;
  margin: 0 auto;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LeftBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  border-right: 1px solid #cccccc;
`;

export const RightBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

export const Notice = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 18px;
  color: #828282;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 18px;
  color: #828282;
  margin-bottom: 10px;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 0.688rem;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
  margin-bottom: 30px;
`;

export const Corp = styled.div`
  font-weight: 400;
  font-size: 0.688rem;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
`;

export const RightSubBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const SNSButton = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Number = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 27px;
  letter-spacing: 0.232836px;
  color: #2277d8;
  margin-right: 20px;
`;

export const QuestButton = styled.div`
  width: 60px;
  height: 20px;
  margin-top: 4px;
  background: #bbbbbb;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 14px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Contents2 = styled.div`
  font-weight: 400;
  font-size: 0.688rem;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
`;
