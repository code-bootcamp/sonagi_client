import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Error = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  color: red;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

export const WrapTitleWarning = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: #747474;
  padding: 25px 0;
`;

export const WrapperLavel = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #b1b1b1;
`;

export const WarningText = styled.div`
  font-size: 1rem;
  color: #b1b1b1;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WriteImage = styled.img`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLabel = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 2.2rem;
  }
`;

export const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const WrapSellect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapNotice = styled.div`
  display: flex;
  align-items: center;
`;
export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  border: 1px solid black;

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 30px;
    font-size: 0.8rem;
  }
`;
// export const WrapCheckButton = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const CheckButton = styled.img`
//   width: 24px;
//   height: 24px;
//   margin: 10px;
// `;
// export const CheckLabel = styled.div`
//   font-size: 1rem;
//   @media ${breakPoints.mobile} {
//     font-size: 0.8rem;
//   }
// `;

export const NoticeLabel = styled.input`
  ::placeholder {
    color: black;
  }
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const WrapIntroduce = styled.div`
  padding: 25px 0;
`;

export const IntroduceInput = styled.input`
  margin-top: 40px;
  width: 100%;
  height: 440px;

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const WrapperWriterSay = styled.div`
  padding: 25px 0;
`;

export const WriteSay = styled.input`
  width: 100%;
  height: 200px;
  margin-top: 40px;
`;

export const WrapperRule = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapRule = styled.div`
  display: flex;
  align-items: center;
`;

export const RuleText = styled.div`
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;
export const WrapRuleText = styled.div`
  display: flex;
  align-items: center;
`;
export const MoveRule = styled.div`
  font-size: 0.75rem;
  border-bottom: 1px solid gray;
  color: gray;
  margin-left: 7px;

  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
  }
`;

export const CheckButtonFoot = styled.img`
  margin: 10px 10px 10px 0;
`;

export const WrapSubmitButton = styled.div`
  display: flex;
  padding: 20px 10%;
  justify-content: space-around;
`;

export const ClickButton = styled.button`
  margin: 0 50px;
  background-color: #2277d8;
  color: white;
  text-align: center;
  width: 160px;
  height: 60px;
  border: none;
  font-size: 1.25rem;
`;
