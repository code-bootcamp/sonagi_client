import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  padding: 20px 100px;
  background: #f7f7f7;

  @media (min-width: 991px) {
    width: 1200px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    padding: 30px 50px;
  }
`;

export const LeftBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  border-right: 1px solid #cccccc;
`;

export const RightBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

export const Notice = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
  margin-bottom: 10px;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
  margin-bottom: 30px;
`;

export const Corp = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
`;

export const RightSubBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const SNSButton = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Number = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.232836px;
  color: #2277d8;
  margin-right: 20px;
`;

export const QuestButton = styled.div`
  width: 60px;
  height: 20px;
  margin-top: 4px;
  background: #bbbbbb;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents2 = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.232836px;
  color: #bbbbbb;
`;

// export const TopBox = styled.div`
//   height: 40px;
//   padding: 10px 0px;
//   display: flex;
//   flex-direction: row;
//   justify-content: right;
//   border-bottom: 1px solid #e0e0e0;
// `;

// export const BottomBox = styled.div`
//   height: 85px;
//   padding: 20px 2px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #e0e0e0;
// `;

// export const SignUpLoginButton = styled.div`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 21px;
//   text-align: center;
//   margin-left: 30px;
//   color: #787878;
//   cursor: pointer;
// `;

// export const LogoImg = styled.img`
//   width: 120px;
//   height: 40px;
//   cursor: pointer;
// `;

// export const SearchBox = styled.div`
//   width: 310px;
//   height: 40px;
//   background: #f2f2f2;
//   border-radius: 5px;
//   padding: 8px;
//   margin-right: -665px;
//   cursor: pointer;
// `;

// export const SearchButton = styled.img``;

// export const MyPageButton = styled.img`
//   width: 29px;
//   height: 25px;
//   cursor: pointer;
// `;
