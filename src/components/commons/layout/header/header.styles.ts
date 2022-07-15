import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    height: 150px;
    padding: 20px 2px;
  }
`;

export const TopWrapper = styled.div`
  width: 1200px;
  height: 40px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  @media ${breakPoints.wideWeb} {
    width: 1200px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  width: 1200px;
  height: 85px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    height: 150px;
    padding: 20px 2px;
  }
`;

export const WrapSearch = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    justify-content: space-between;
  }
`;

export const SignUpLoginButton = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 21px;
  text-align: center;
  margin-left: 30px;
  color: #787878;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 40px;
  }
`;

export const SearchBox = styled.div`
  width: 310px;
  height: 40px;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const SearchButton = styled.img``;

export const SearchInput = styled.input`
  width: 90%;
  border: none;
  background-color: #f2f2f2;
  padding-left: 10px;
  color: #808080;

  &:focus {
    outline: none;
  }
`;

export const MyPageButton = styled.img`
  width: 29px;
  height: 25px;
  cursor: pointer;
  margin-left: 30px;
`;

export const LoginUser = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
`;

export const LoginUser2 = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  text-align: center;
  color: #787878;
  cursor: pointer;
`;
