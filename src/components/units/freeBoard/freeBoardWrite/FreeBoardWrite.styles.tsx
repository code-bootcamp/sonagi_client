import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 40px 0;
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: #747474;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1.125rem;
  color: #484848;
  margin-left: 15px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 25px 0;
  border-bottom: 1px solid #b1b1b1;
`;

export const WrapperLabel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  /* border-bottom: 1px solid #b1b1b1; */
`;

export const Label = styled.div`
  font-size: 1.5rem;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const TitleInput = styled.input`
  font-size: 1.25rem;
  margin-left: 30px;
  border: none;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const ContentsInput = styled.input`
  font-size: 1.25rem;
  height: 350px;
  margin-top: 25px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const Image = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 1px solid black;
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
`;
