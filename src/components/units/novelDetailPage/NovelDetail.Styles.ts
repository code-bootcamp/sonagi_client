import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;

export const WrapImage = styled.div`
  width: 250px;

  @media ${breakPoints.mobile} {
    width: 100%;
    align-self: center;
  }
`;

export const Genre = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectAll = styled.div`
  font-size: 0.75rem;
  margin-left: 35px;
  margin-right: 20px;

  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
    margin: 0 10px 0 10px;
  }
`;

export const Arrow = styled.div`
  font-size: 1rem;
  color: #848484;
  margin: 0px 10px 1px 10px;
  font-weight: 400;
`;

export const DIV = styled.div`
  display: flex;
`;

export const Flexs = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const LookFirstBtn = styled.div`
  width: 148.64px;
  height: 46px;
  background-color: #2277d8;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Buttons = styled.div`
  width: 148.64px;
  height: 46px;
  background-color: black;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LookButtonWrapper = styled.div`
  padding-top: 20px;
  width: 90%;
  display: flex;

  @media ${breakPoints.mobile} {
    padding-top: 20px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const LookButtonWrapper2 = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-start;

  @media ${breakPoints.mobile} {
    padding-top: 20px;
    width: 100%;
    justify-content: center;
  }
`;
export const Button2 = styled.button`
  background-color: #c8c8c8;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 160px;
    height: 50px;
    font-size: 1rem;
  }
`;

export const Button5 = styled.button`
  background-color: #ffffff;
  color: #2277d8;
  width: 160px;
  height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  border: 1px solid #2277d8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  margin: 0 60px;

  @media ${breakPoints.mobile} {
    width: 160px;
    height: 50px;
    font-size: 1rem;
    margin: 20px 0;
  }
`;

export const Button4 = styled.button`
  background-color: #ffffff;
  color: #2277d8;
  width: 160px;
  height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  border: 1px solid #2277d8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  margin-right: 60px;

  @media ${breakPoints.mobile} {
    width: 160px;
    height: 50px;
    font-size: 1rem;
  }
`;

export const Button1 = styled.button`
  background-color: #2277d8;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 160px;
    height: 50px;
    font-size: 1rem;
  }
`;

export const Count = styled.div`
  font-size: 0.75rem;
  color: #808080;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const TopFont = styled.div`
  font-size: 0.938rem;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const NovelTitle = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  padding: 5px 0px 10px 0px;
  margin-left: -2px;

  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
    text-align: center;
  }
`;

export const StarImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 1px;
`;

export const Score = styled.div`
  font-size: 0.938rem;
  margin-left: 10px;
  color: #484848;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 5px 0px 20px 0px;
`;

export const Star = styled(Rate)`
  font-size: 1.25rem;
  color: #2277d8;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const WrapWriter = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapDiv = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    padding-top: 15px;
  }
`;

export const WriterImg = styled.img`
  width: 33px;
  height: 33px;
`;

export const NovelRemarks = styled.div`
  font-size: 0.938rem;
  color: #757575;
  margin-top: 10px;
  margin-bottom: 100px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0 100px 0;
  width: 100%;
`;

export const Tags = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #2277d2;
  padding: 5px;
  background-color: #ffffff;
  margin-right: 15px;
  color: #2277d2;
  font-weight: 400;
`;

export const WriterFont = styled.div`
  font-size: 1rem;
  margin: 0px 10px 0px 10px;
  color: #484848;
`;

export const NovelImage = styled.img`
  width: 250px;

  /* aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: middle; */

  @media ${breakPoints.mobile} {
    width: 60%;
    margin-bottom: 30px;
    align-self: center;
  }
`;

export const SmallArrow = styled.img`
  width: 15px;
  height: 14px;
  margin: 0px 10px 0px 10px;
`;

export const TopWrapper = styled.div`
  /* display: flex; */
`;

export const ColumnWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 70px;

  @media ${breakPoints.mobile} {
    align-items: center;
    width: 100%;
    padding: 0 50px;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 0;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    /* align-items: center; */
    padding: 30px;
  }
`;

export const Divsl = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0px 5px 0px 5px;
  color: #484848;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Divs = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0px 5px 0px 5px;
  color: #484848;
`;

export const HeartImg = styled.img`
  width: 20px;
  height: 18.35px;
  color: #ed6c5e;
`;

export const HeartCount = styled.div`
  font-size: 1rem;
  margin-left: 10px;
  color: #484848;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin: 10px 250px 0px 0px; */
`;

export const Line = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  margin: 30px 0 3px 0;
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  height: 11px;

  @media ${breakPoints.mobile} {
    height: 10px;
  }
`;

export const New = styled.div`
  font-size: 0.75rem;
  margin-left: 5px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
  }
`;

export const All = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
`;

export const Sum = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: #00a0e9;
  margin-left: 10px;
`;

export const MarginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-right: 1px solid black;
  height: 12.5px;
  margin-left: 10px;
`;

export const Title = styled.div`
  font-size: 0.938rem;
`;

export const Look = styled.div`
  width: 65px;
  height: 30px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.938rem;
  margin-left: 850px;
`;

export const Date = styled.div`
  font-size: 0.625rem;
  padding-right: 8px;
`;

export const WrapDate = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

export const SumCharacter = styled.div`
  font-size: 0.625rem;
  margin-left: 10px;
`;

export const LineImg = styled.img`
  height: 25px;
`;

export const HeartWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  width: 126px;
  height: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #e5e8eb;
  }

  @media ${breakPoints.mobile} {
    align-self: center;
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 30px 0px 30px 0px;
`;

export const MiddelButtonWrapper = styled.div`
  display: flex;
  margin-top: 100px;
`;

export const MiddelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 99px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  margin-right: 25px;
`;

export const WrapBody = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 96%;
    margin: 0 2%;
  }
`;

export const TableLine = styled.div`
  /* border-bottom: 1px solid #d9d9d9; */
  border-bottom: 1px solid black;
`;

export const TableTop = styled.div`
  display: flex;
  width: 100%;
`;

export const Borrow = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Get = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Square = styled.input`
  width: 17px;
  height: 17px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const SortButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 30px;
  border: 1px solid black;

  @media ${breakPoints.mobile} {
    width: 65px;
    height: 27px;
  }
`;

export const TableButton = styled.div`
  width: 65px;
  height: 30px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.938rem;
  margin-left: 10px;
`;

export const WrapEpisode = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isFirst ? "column-reverse" : "column")};
`;

export const TableLineWrapper = styled.div`
  display: flex;
  padding: 15px 10px;
  border-bottom: 1px solid #4f4f4f;
  justify-content: space-between;
  align-items: center;
`;

export const TableDottedLine = styled.div`
  border-bottom: 1px dotted black;
  padding: 10px;
`;

export const LookWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LookContent = styled.div`
  padding-left: 45px;
  padding-right: 2px;
`;

export const TableSonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 35px;
`;

export const WrapFirst = styled.div`
  display: flex;
  align-items: center;
`;

export const Margin = styled.div`
  margin-bottom: 50px;
`;

export const TableInnerLine = styled.div`
  border-bottom: 1px solid #4f4f4f;
  margin: 10px 0px 10px 0px;
`;

export const Cart = styled.div`
  width: 70px;
  height: 35px;
  background-color: white;
  color: #4f4f4f;
  border: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;

export const Borrows = styled.div`
  width: 70px;
  height: 35px;
  background-color: #2277d8;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 15px;

  @media ${breakPoints.mobile} {
    margin-left: 10px;
    font-size: 0.8rem;
    width: 65px;
    height: 33px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LookBtn = styled.div`
  width: 60px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #484848;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  margin: 0 15px;
`;

export const WrapFooter = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const FooterLabel = styled.div`
  font-size: 1.5rem;
  padding-bottom: 10px;
  font-weight: 500;
  color: #58667a;
  border-bottom: 1.5px solid #d9d9d9;
`;
