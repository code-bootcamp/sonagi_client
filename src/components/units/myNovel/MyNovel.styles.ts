import styled from "@emotion/styled";

export const MyNovel = styled.div`
  font-size: 18px;
  color: #141414;
  @media (max-width: 767px) {
    box-shadow: inset 0 -14px #bee3ff;
    line-height: 24px;
    width: 113px;
    font-size: 1.563rem;
  }
`;

export const Img = styled.img`
  @media (max-width: 767px) {
    width: 7.875rem;
    height: 10rem;
  }
`;

export const Bottom = styled.div`
  font-size: 14px;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
`;

export const Box = styled.div`
  width: 830px;
  height: 110px;
  border: 1px solid black;
  margin-top: 40px;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 700px;
    height: 110px;
  }
  @media (max-width: 767px) {
    border: none;
    margin-bottom: 150px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 20px;
    font-weight: 800;
  }
  @media (max-width: 2000px) {
  }
`;

export const Genre = styled.div`
  font-size: 16px;
`;

export const Time = styled.div`
  font-size: 14px;
  color: #cccccc;
  margin-left: 15px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const GenreFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 150px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const BoxFlex = styled.div`
  display: flex;
  @media (max-width: 3000px) {
    margin-left: 290px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 47%;
  }
  @media (max-width: 767px) {
    margin: 18%;
    margin-right: 35%;
  }
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
  }
  @media (max-width: 2000px) {
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  @media (max-width: 767px) {
    margin-right: 120px;
  }
  @media (max-width: 2000px) {
  }
`;

export const Button1 = styled.div`
  width: 117px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Button2 = styled.div`
  width: 91px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
