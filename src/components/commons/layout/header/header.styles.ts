import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 1200px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    width: 95%;
  }
`;

export const TopBox = styled.div`
  height: 40px;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  border-bottom: 1px solid #e0e0e0;
`;

export const BottomBox = styled.div`
  height: 85px;
  padding: 20px 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const SignUpLoginButton = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-left: 30px;
  color: #787878;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 120px;
  height: 40px;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  width: 310px;
  height: 40px;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 8px;
  margin-right: -665px;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 200px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    width: 200px;
    margin-right: -45%;
  }
`;

export const SearchButton = styled.img``;

export const MyPageButton = styled.img`
  width: 29px;
  height: 25px;
  cursor: pointer;
`;
