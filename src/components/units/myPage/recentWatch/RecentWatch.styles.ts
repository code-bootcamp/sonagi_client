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
  top: 330px;
  :hover {
    transform: scale(1.13);
    transition: transform 1s;
    filter: brightness(70%);
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
  margin-left: 70px;
`;

export const Wrap = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

export const BoxWrap = styled.div``;
