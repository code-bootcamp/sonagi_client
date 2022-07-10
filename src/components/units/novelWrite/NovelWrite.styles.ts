import styled from "@emotion/styled";

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
  padding-bottom: 25px;
`;

export const WrapperLavel = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #b1b1b1;
`;

export const WarningText = styled.div`
  font-size: 1rem;
  color: #b1b1b1;
`;

export const WriteImage = styled.img``;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLabel = styled.input`
  ::placeholder {
    color: black;
  }
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const InputTitle = styled.input`
  width: 800px;
  height: 60px;
  margin-left: 30px;
`;

export const WrapGenreCycle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapGenre = styled.div`
  display: flex;
`;

export const WrapSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 60px;
  border: 1px solid #b1b1b1;
  width: 230px;
  height: 40px;
`;

export const GenreLabel = styled.div`
  font-size: 1.125rem;
`;

export const SelectButton = styled.img`
  width: 24px;
  height: 24px;
  background-color: #2277d8;
`;

export const WrapCycle = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckButton = styled.img`
  margin: 0 10px;
`;

export const CycleLabel = styled.div`
  font-size: 1rem;
`;

export const WrapCycleButton = styled.div`
  margin-left: 1rem;
  display: flex;
`;

export const CycleButton = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #b1b1b1;
`;

export const WrapCoverImage = styled.div`
  display: flex;
`;

export const CoverImage = styled.img`
  margin-left: 100px;
  width: 150px;
  height: 210px;
`;

export const WrapIntroduce = styled.div`
  padding-top: 25px;
`;

export const IntroduceInput = styled.textarea`
  margin-top: 25px;
  width: 100%;
  height: 440px;
  :focus {
    outline: none;
  }
`;

export const WrapSubmitButton = styled.div`
  padding: 70px 0;
  display: flex;
  justify-content: center;
`;
