import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1000px;
  padding: 30px;
`;

export const Flex = styled.div`
  /* display: flex;
  margin-left: 20px;
  position: absolute;
  top: 340px;
  width: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Flex2 = styled.div`
  display: flex;
  margin-left: 20px;
  position: absolute;
  top: 660px;
`;

export const RecentWatch = styled.div`
  font-size: 1.563rem;
  margin: 20px 0px 40px 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const NovelPic = styled.img`
  /* border-radius: 8px; */
  cursor: pointer;
  width: 150px;
  height: 200px;
  margin-left: 45px;
  position: relative;
  /* top: 5px; */
  /* position: absolute;
  top: 100; */
  transition: all 0.6s ease 0.2s;
  /* transform: rotateY(-180deg); */
  :hover {
    transform: scale(1.2);
    transition: transform 1s;
    filter: brightness(75%);
    background: #fff;
    -webkit-box-shadow: 1px 1px 2px #e6e6e6;
    -moz-box-shadow: 1px 1px 2px #e6e6e6;
    box-shadow: 1px 1px 2px #e6e6e6;
  }
  @media ${breakPoints.tablet} {
    width: 90px;
    height: 140px;
    position: relative;
    top: 20px;
    margin-left: 55px;
  }
  @media ${breakPoints.mobile} {
    width: 95px;
    height: 130px;
    position: relative;
    top: 20px;
    margin-left: 70px;
  }
`;

export const NovelPics = styled.img`
  /* border-radius: 8px; */
  cursor: pointer;
  width: 150px;
  height: 200px;
  margin-left: 45px;
  position: relative;
  top: 120px;
  /* position: absolute;
  top: 100; */
  transition: all 0.6s ease 0.2s;
  /* transform: rotateY(-180deg); */
  :hover {
    transform: scale(1.2);
    transition: transform 1s;
    filter: brightness(70%);
    background: #fff;
    -webkit-box-shadow: 1px 1px 2px #e6e6e6;
    -moz-box-shadow: 1px 1px 2px #e6e6e6;
    box-shadow: 1px 1px 2px #e6e6e6;
  }
  @media ${breakPoints.tablet} {
    width: 90px;
    height: 140px;
    position: relative;
    top: -50px;
    margin-left: 55px;
  }

  @media ${breakPoints.mobile} {
    width: 95px;
    height: 130px;
    position: relative;
    top: 20px;
    margin-left: 70px;
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

export const BookShelf = styled.img`
  /* width: 70%; */
  /* height: 290px; */
  /* margin-top: 55px; */
  position: absolute;
  width: 960px;
  top: 500px;
  @media ${breakPoints.tablet} {
    /* width: 100%; */
    width: 590px;

    position: relative;
    top: 20px;
    left: 20px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    position: relative;
    top: 20px;
    left: 30px;
  }
`;

export const BookShelfs = styled.img`
  position: relative;
  top: 120px;
  width: 960px;
  @media ${breakPoints.tablet} {
    width: 590px;
    position: relative;
    top: -50px;
    left: 20px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    position: relative;
    top: 20px;
    left: 30px;
  }
`;

export const BookShelf2 = styled.img`
  width: 100%;
  /* height: 290px; */
  margin-top: 105px;
`;

export const Info = styled.div``;

export const Title = styled.div`
  font-size: 20px;
  /* margin-left: 70px; */
  width: 150px;
  height: 200px;
  color: black;
  font-weight: 800;
  font-family: sans-serif;

  transform: translate(-52%, -50%);
  font-size: 18px;
  /* border: 1px solid white; */
  /* padding: 8px 32px; */
  border-radius: 5px;
`;

export const NovelCategory = styled.div`
  font-size: 16px;
  /* margin-left: 70px; */
  width: 150px;
  height: 200px;
  color: black;
  font-weight: 800;
  font-family: sans-serif;

  transform: translate(-52%, -50%);
  font-size: 18px;
  /* border: 1px solid white; */
  /* padding: 8px 32px; */
  border-radius: 5px;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const BoxWrap = styled.div`
  width: 100%;
`;

export const TitleWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  top: 350px;
  background-color: blue;
  /* left: 133px; */
  transition: all 0.3s ease;
  opacity: 0;
  :hover {
    opacity: 1;
    z-index: 1;
    cursor: pointer;
  }
`;
