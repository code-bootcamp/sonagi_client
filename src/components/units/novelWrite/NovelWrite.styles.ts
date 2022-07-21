import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { INovelWriteStyles } from "./NovelWrite.types";

export const Error = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
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
  padding-bottom: 25px;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
    padding-bottom: 0;
  }
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

export const TitleLabelTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const TitleLabel = styled.input`
  ::placeholder {
    font-weight: 300;
    font-size: 1.2rem;
  }

  width: 90%;
  font-size: 1.2rem;
  font-weight: 400;
  border: none;
  padding-left: 15px;
  :focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const Label = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

export const WrapImage = styled.div`
  padding-left: 70px;
  display: flex;

  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const InputTitle = styled.input`
  width: 800px;
  height: 60px;
  margin-left: 30px;
`;

export const WrapGenreCycle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapGenre = styled.div`
  display: flex;
  /* padding-bottom: 30px; */

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const WrapSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  margin-top: 3px;
  border: 1px solid #b1b1b1;
  width: 230px;
  height: ${(props: INovelWriteStyles) => (props.isSelect ? "100%" : "35px")};

  @media ${breakPoints.mobile} {
    margin: 0;
    width: 100%;
    justify-content: center;
  }
`;

export const WrapGenreSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export const WrapGenreList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GenreLabel = styled.div`
  font-size: 1.125rem;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const List = styled.li`
  width: 100%;
  padding: 7px 0px 5px 0px;
  background-color: white;
  list-style: none;
  color: #828282;
  text-align: center;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    font-weight: 700;
    /* background-color: #2277d8;
    color: #fff; */
    color: #2277d8;
  }

  @media ${breakPoints.tablet} {
    text-align: center;
  }
`;

export const SelectButton = styled.img`
  width: 24px;
  height: 24px;

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const WrapCycle = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WrapCheck = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const WrapChange = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding-bottom: 20px;
  }
`;

export const CheckButton = styled.input`
  margin: 0 15px;
`;

export const CycleLabel = styled.div`
  font-size: 1rem;
`;

export const WrapCycleButton = styled.div`
  margin-left: 25px;
  display: flex;
  background-color: ${(props: INovelWriteStyles) =>
    props.isClickDay ? "none" : "gray"};

  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;

export const CycleButton1 = styled.div`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
  cursor: pointer;
  background-color: ${(props: INovelWriteStyles) =>
    props.isDay === props.el ? " #2277d8" : "none"};
  color: ${(props) => (props.isDay === props.el ? " white" : "none")}; ;
`;

export const CycleButton2 = styled.div`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const CycleButton3 = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const CycleButton4 = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const CycleButton5 = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const CycleButton6 = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const CycleButton7 = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const WrapCoverImage = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const CoverImage = styled.img`
  margin-left: 100px;
  width: 150px;
  height: 210px;
  /* display: none; */

  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;

export const WrapIntroduce = styled.div`
  padding-top: 25px;
`;

export const IntroduceInput = styled.input`
  margin-top: 25px;
  width: 100%;
  height: 440px;
  :focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8 rem;
  }
`;

export const WrapSubmitButton = styled.div`
  padding: 70px 0;
  display: flex;
  justify-content: space-evenly;
`;

export const WrapTags = styled.div`
  padding-top: 50px;
  width: 100%;
  /* height: 56px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
