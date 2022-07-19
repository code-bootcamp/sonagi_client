import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const ChargeButton = styled.div`
  width: 110px;
  height: 40px;
  background-color: #ffffff;
  color: #2277d8;
  border: 1px solid #2277d8;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
    margin-right: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 10px 0;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 96%;
    margin: 0 auto;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    width: 100%;
    justify-content: right;
  }
`;

export const DIV = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 50px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CashCharge = styled.div`
  font-size: 1rem;
  color: #828282;
  margin-left: 900px;
  cursor: pointer;
`;

export const LargeBox = styled.div`
  width: 85%;
  margin: 0 2%;
  display: flex;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const InnerLeftBox = styled.div`
  border-radius: 8px 0px 0px 8px;
  width: 40%;
  height: 400px;
  background-color: #ebf6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 96%;
    background-color: #ebf6ff;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
  }
`;

export const InnerRightBox = styled.div`
  border-radius: 0px 8px 8px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 62%;
  height: 400px;
  background-color: #f2f2f2;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 96%;
    height: 5vh;
    height: auto;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    height: 200px;
  }
`;

export const ChangeButton = styled.div`
  width: 50px;
  height: 20px;
  background-color: #2277d8;
  color: white;
  font-size: 0.625rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 30px;
  left: 50px;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Name = styled.div`
  font-size: 1rem;
  margin: 15px 0px;

  span {
    font-size: 1.25em;
    font-weight: 500;
    margin-right: 5px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const Email = styled.div`
  font-size: 0.813rem;
  margin-bottom: 15px;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Point = styled.div`
  font-size: 0.938rem;
  margin-left: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Dash = styled.div`
  font-size: 0.938rem;
  margin-left: 10px;
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
`;

export const MainFlex = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 400;
  color: #141414;
  margin-top: 7px;
  @media ${breakPoints.tablet} {
    font-size: 0.75rem;
  }
`;

export const MainBottom = styled.div`
  font-size: 0.8em;
  color: #4f4f4f;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    /* display: none; */
  }
`;

export const Middle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: #2277d8;
  margin: 18px 0px 27px 0px;
  @media ${breakPoints.tablet} {
    font-size: 1.125rem;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
  @media ${breakPoints.tablet} {
    width: 25px;
    height: 20px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectCash = styled.option`
  font-size: 1.25rem;
  font-weight: 700;
  color: black;
  margin-bottom: 30px;
`;

export const Select = styled.select`
  /* width: 400px;
  padding: 5px;
  border: 0px solid;
  border-bottom: 1px solid;
  margin-bottom: 20px;
  font-size: 30px; */
`;

export const Buttons = styled.button`
  width: 100px;
  height: 40px;
  background-color: #2277d8;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Option = styled.option`
  font-size: 0.625rem;
  color: #141414;
`;

export const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffffff;
  left: 65vh;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
`;

export const Titles = styled.div`
  font-family: "Jalnan OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 29px;
  text-align: center;
  padding-top: 50px;
  color: #484848;
`;

export const MoneyWrapper = styled.div`
  margin-top: 20px;
`;

export const MySelect = styled.div`
  padding: 10px;
  width: 350px;
  height: 40px;
  margin: 30px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #828282;
  border: none;
  border-bottom: 2px solid;
  /* &:focus {
    outline: none;
  } */
  background-repeat: no-repeat;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/expand-arrow.png");
  background-position: right;
  cursor: pointer;
  display: inline-block;
`;

export const MyOption = styled.div``;

export const MyLi = styled.li`
  padding: 7px 0px 5px 0px;
  margin: 10px 10px;
  list-style: none;
  color: #828282;
  &:hover {
    font-weight: 700;
    font-size: 1.063rem;
  }
  border-bottom: 1px solid #e0e0e0;
`;

export const MyLis = styled.li`
  padding: 7px 0px 5px 0px;
  margin: 10px 10px;
  list-style: none;
  color: #828282;
  &:hover {
    font-weight: 700;
    font-size: 1.063rem;
  }
`;

export const Table = styled.div`
  /* border: 1px solid #e0e0e0; */
  border-radius: 10px;
  width: 338px;
  /* height: 212px; */
  margin-top: 20px;
  box-shadow: 0px 0px 20px #c4c4c4;
  padding: 10px;
`;

export const MoneyButton = styled.div`
  background-color: #2277d8;
  color: #ffffff;
  width: 350px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  display: flex;
`;

export const DIVS = styled.div`
  width: 100%;
  margin-left: 30px;
  position: relative;
  top: 40px;
  right: 1px;
`;
