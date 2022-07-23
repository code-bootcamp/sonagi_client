import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 92%;
    margin: 0 3%;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const TitleLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: #bdbdbd;
  margin: 0px 50px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
`;

export const Writer = styled.div`
  font-size: 1.125em;
  color: #2277d8;
  font-weight: 800;
  margin-left: 20px;
  margin-top: 10px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
    width: 100%;
    margin-left: 70%;
    margin-top: 10%;
  }
`;

export const WriterDefault = styled.div`
  font-size: 1.125em;
  color: #bdbdbd;
  margin: 10px 0px 0px 2px;
`;

export const Title = styled.div`
  font-size: 1.7em;
  margin-top: 10px;
  font-weight: 700;
  /* padding: 64px 0px 24px; */
  @media ${breakPoints.tablet} {
    font-size: 1.6em;
    margin-top: 10px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.25em;
  }
`;

export const WrapUserInfo = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
`;
export const UserLabel = styled.div`
  font-size: 1.25rem;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;
export const Date = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #808080;
  width: 100%;

  @media ${breakPoints.tablet} {
    font-size: 1.1rem;
    width: 120%;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;
export const ReportIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;
export const Contents = styled.div`
  /* margin: 30px 0px 80px 0px; */
  width: 100%;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  /* border: 5px solid #eee; */
`;

export const InnerContents = styled.div`
  margin-top: 20px;
  width: 60%;
  font-size: 1.4rem;
  @media ${breakPoints.tablet} {
    font-size: 18px;
    margin-top: 10px;
  }
  @media ${breakPoints.mobile} {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const FreeBoardImage = styled.img`
  width: 22%;
  height: 400px;
`;

export const Button = styled.div`
  width: 160px;
  height: 60px;
  padding: 25px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const FreeBoardImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  object-fit: fill;

  @media ${breakPoints.tablet} {
    position: relative;
    height: 100%;
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }

  /* margin-right: 100px; */
`;

export const ImgWrap = styled.div`
  width: 340px;
  height: 390px;
  overflow: hidden;
  margin: 0 auto;
  @media ${breakPoints.tablet} {
    width: 20%;
    position: relative;
    width: 230px;
    height: 272px;
    left: 5%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  background-color: red;
  width: 20%;
  height: 400px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  @media ${breakPoints.mobile} {
    width: 120px;
    height: 120px;
  }
`;

export const TopWrapper = styled.div`
  border: 5px solid teal;
  /* width: 70%; */
  height: 200px;
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 120px;
  background-color: #f6f6f6;
  @media ${breakPoints.tablet} {
    width: 139.2%;
    /* top: 550px; */
    position: relative;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  @media ${breakPoints.tablet} {
    width: 30%;
  }
`;

export const Columns = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  margin-top: 3px;
  margin-left: 70px;
  @media ${breakPoints.tablet} {
    width: 80%;
    margin-left: 24%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 40%;
  }
`;

export const Row = styled.div`
  display: flex;
  background-color: blue;
`;

export const Flex = styled.div`
  display: flex;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Flexs = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  padding: 80px;
  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    padding: 30px;
  }

  /* background-color: #eee; */
`;

export const ContentsWrap = styled.div`
  width: 190%;
  height: 120px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  /* border: 2px solid black; */
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 120px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    margin-top: 10px;
  }
  /* border: 2px solid black; */
`;

export const WriterWrap = styled.div`
  display: flex;
`;

export const DateWrapper = styled.div`
  /* width: 100%; */
  @media ${breakPoints.tablet} {
    /* width: 100%; */
  }
  @media ${breakPoints.mobile} {
    width: 46%;
  }
`;
