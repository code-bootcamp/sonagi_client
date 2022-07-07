import styled from "@emotion/styled";

export const ChargeButton = styled.div`
  width: 102px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  color: #828282;
  cursor: pointer;
  /* @media (min-width: 768px) and (max-width: 991px) {
    margin-right: 700px;
  }
  @media (max-width: 767px) {
    margin-right: 700px;
  } */
`;

export const Wrapper = styled.div`
  /* display: flex; */
  width: 1000px;
`;

export const DIV = styled.div`
  margin-left: 750px;
  margin-bottom: 30px;
  /* @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 600px;
  } */
`;

export const CashCharge = styled.div`
  font-size: 1rem;
  color: #828282;
  margin-left: 900px;
  cursor: pointer;
`;

export const LargeBox = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px;
    height: 400px;
  }
  @media (max-width: 767px) {
    width: 360px;
    /* height: 694px; */
    display: flex;
    flex-direction: column;
  }
`;

export const InnerLeftBox = styled.div`
  width: 280px;
  height: 400px;
  background-color: #ebf6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px;
    height: 400px;
  }
  @media (max-width: 767px) {
    background-color: none;
    width: 360px;
    height: 694px;
    background-color: white;
  }
`;

export const InnerRightBox = styled.div`
  width: 520px;
  height: 400px;
  background-color: #f2f2f2;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px;
    height: 400px;
  }
  @media (max-width: 767px) {
    background-color: none;
    width: 360px;
    background-color: white;
  }
`;

export const ChangeButton = styled.div`
  width: 56px;
  height: 22px;
  background-color: #2277d8;
  color: white;
  font-size: 0.625rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 40px;
  left: 50px;
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
  font-size: 1.125rem;
  margin: 15px 0px 15px 0px;
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
  height: 144px;
  width: 104px;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
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
  justify-content: space-around;
  @media (min-width: 768px) and (max-width: 1500px) {
    margin-top: 130px;
  }
  @media (max-width: 767px) {
    display: flex;
    margin-left: 4.375rem;
  }
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 400;
  color: #141414;
  margin-top: 7px;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    font-size: 0.938rem;
    font-weight: 800;
  }
`;

export const MainBottom = styled.div`
  font-size: 0.8em;
  color: 4F4F4F;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Middle = styled.div`
  font-size: 1.5em;
  color: #2277d8;
  margin: 3px 0px 5px 0px;
`;

export const Pig = styled.img`
  width: 1.875rem;
  height: 1.563rem;
  margin-bottom: 5px;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Hearts = styled.img`
  width: 1.625em;
  height: 1.5em;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MessageIcon = styled.img`
  width: 1.563em;
  height: 1.5em;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const LogoutButton = styled.div`
  width: 56px;
  height: 22px;
  background-color: white;
  color: #2277d8;
  font-size: 0.625rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40px;
  right: 90px;
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (max-width: 767px) {
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

// export const SelectWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const SelectCash = styled.option`
//   font-size: 20px;
//   font-weight: 700;
//   color: black;
//   margin-bottom: 30px;
// `;

// export const Select = styled.select`
//   /* width: 400px;
//   padding: 5px;
//   border: 0px solid;
//   border-bottom: 1px solid;
//   margin-bottom: 20px;
//   font-size: 30px; */
// `;

// export const Buttons = styled.button`
//   width: 100px;
//   height: 40px;
//   background-color: #2277d8;
//   font-size: 16px;
//   font-weight: 600;
//   color: white;
//   border: none;
//   cursor: pointer;
//   margin-top: 30px;
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const Option = styled.option`
//   font-size: 10px;
//   color: #141414;
// `;

// export const PayMentWrapper = styled.div`
//   width: 464px;
//   border-radius: 20px;
//   position: absolute;
//   background-color: #ffffff;
//   left: 75vh;
//   top: 300px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   border: 1px solid #cccccc;
//   z-index: 100;
//   box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
// `;

// export const Titles = styled.div`
//   font-family: "Jalnan OTF";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 29px;
//   text-align: center;
//   padding-top: 50px;
//   color: #484848;
// `;

// export const MoneyWrapper = styled.div`
//   margin-top: 20px;
// `;

// export const MySelect = styled.div`
//   padding: 10px;
//   width: 350px;
//   height: 40px;
//   margin: 30px;
//   font-family: "Noto Sans KR";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #828282;
//   border: none;
//   border-bottom: 2px solid;
//   /* &:focus {
//     outline: none;
//   } */
//   background-repeat: no-repeat;
//   background-image: url("https://img.icons8.com/material-rounded/24/000000/expand-arrow.png");
//   background-position: right;
//   cursor: pointer;
//   display: inline-block;
// `;

// export const MyOption = styled.div``;

// export const MyLi = styled.li`
//   padding: 7px 0px 5px 0px;
//   margin: 10px 10px;
//   list-style: none;
//   color: #828282;
//   &:hover {
//     font-weight: 700;
//     font-size: 17px;
//   }
//   border-bottom: 1px solid #e0e0e0;
// `;

// export const MyLis = styled.li`
//   padding: 7px 0px 5px 0px;
//   margin: 10px 10px;
//   list-style: none;
//   color: #828282;
//   &:hover {
//     font-weight: 700;
//     font-size: 17px;
//   }
// `;

// export const Table = styled.div`
//   /* border: 1px solid #e0e0e0; */
//   border-radius: 10px;
//   width: 338px;
//   /* height: 212px; */
//   margin-top: 20px;
//   box-shadow: 0px 0px 20px #c4c4c4;
//   padding: 10px;
// `;

// export const MoneyButton = styled.div`
//   background-color: #2277d8;
//   color: #ffffff;
//   width: 350px;
//   height: 40px;
//   text-align: center;
//   padding-top: 10px;
//   margin-top: 20px;
//   margin-bottom: 25px;
//   border-radius: 10px;
//   cursor: pointer;
//   margin-top: 40px;
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   z-index: 30;
//   top: 0;
//   left: 0;
// `;
