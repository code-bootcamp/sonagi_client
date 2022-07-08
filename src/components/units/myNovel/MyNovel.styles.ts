import styled from "@emotion/styled";

export const MyNovel = styled.div`
  font-size: 1.125rem;
  color: #141414;
  @media (max-width: 767px) {
    box-shadow: inset 0 -14px #bee3ff;
    line-height: 24px;
    width: 113px;
    font-size: 1.563rem;
  }
`;

export const Img = styled.img`
  border-radius: 8px;
  @media (max-width: 767px) {
    width: 7.875rem;
    height: 10rem;
  }
`;

export const Bottom = styled.div`
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
`;

export const Box = styled.div`
  width: 830px;
  height: 110px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-top: 40px;
  @media (min-width: 770px) and (max-width: 2000px) {
    width: 700px;
    height: 110px;
  }
  @media (max-width: 769px) {
    border: none;
    margin-bottom: 150px;
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;
  @media (max-width: 767px) {
    font-size: 1.25rem;
    font-weight: 800;
  }
  @media (max-width: 2000px) {
  }
`;

export const Genre = styled.div`
  font-size: 1rem;
`;

export const Time = styled.div`
  font-size: 0.875rem;
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
    margin-left: 180px;
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
  border-radius: 8px;
`;

export const Button2 = styled.div`
  width: 91px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const MyPageFont = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
