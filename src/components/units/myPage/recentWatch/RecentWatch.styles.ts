import styled from "@emotion/styled";

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
  margin-left: 55px;
  position: absolute;
  top: 325px;
  /* position: absolute;
  top: 100; */
  transition: all 0.6s ease 0.2s;
  overflow: hidden;

  :hover {
    /* transform: scale(1.13);
    transition: transform 1s; */
    filter: brightness(70%);
    /* transform: rotateY(180deg); */
  }
`;

export const NovelPics = styled.img`
  /* border-radius: 8px; */
  cursor: pointer;
  width: 150px;
  height: 200px;
  margin-left: 55px;
  position: absolute;
  top: 730px;
  /* position: absolute;
  top: 100; */
  transition: all 0.6s ease 0.2s;
  /* transform: rotateY(-180deg); */
  :hover {
    transform: scale(1.13);
    transition: transform 1s;
    filter: brightness(70%);
    background: #fff;
    -webkit-box-shadow: 1px 1px 2px #e6e6e6;
    -moz-box-shadow: 1px 1px 2px #e6e6e6;
    box-shadow: 1px 1px 2px #e6e6e6;
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
  width: 100%;
  /* height: 290px; */
  margin-top: 205px;
`;

export const BookShelfs = styled.img`
  width: 100%;
  /* height: 290px; */
  margin-top: 180px;
`;

export const BookShelf2 = styled.img`
  width: 100%;
  /* height: 290px; */
  margin-top: 105px;
`;

export const Info = styled.div``;

export const Title = styled.div`
  font-size: 16px;
  /* margin-left: 70px; */
  width: 150px;
  height: 200px;
  color: white;
  font-weight: 800;
  font-family: sans-serif;
  position: absolute;
  top: 116px;
  left: 136px;
  transform: translate(-50%, -50%);
  font-size: 18px;
  /* border: 1px solid white; */
  /* padding: 8px 32px; */
  border-radius: 5px;
`;

export const Wrap = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

export const BoxWrap = styled.div``;

export const TitleWrap = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  opacity: 0;
  /* background: #d0d3d4; */
  /* height: 100%;
  width: 0;
  top: 0;
  left: 0;
  background: #82e0aa; */

  :hover {
    opacity: 0.9;
    background-color: blue;
    z-index: 1;
  }
`;
