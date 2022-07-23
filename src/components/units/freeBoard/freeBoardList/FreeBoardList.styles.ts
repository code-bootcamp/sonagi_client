import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.mobile} {
    padding: 0 1.25rem;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px; ;
`;

export const MainTitle = styled.div`
  font-size: 1.875em;
  font-weight: normal;
  color: #484848;
  margin-top: 20px;
  border-radius: 8px;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const WrapButton = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const ClickButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #2277d8;
  font-weight: 500;
  width: 100px;
  height: 40px;
`;

export const WrapperBoard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 45px 0 45px 45px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin: 20px 0px 20px 0px;
  width: 100%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1.563rem;
  font-weight: bold;
  margin-left: 20px;
  color: #484848;

  @media ${breakPoints.mobile} {
    width: 200%;
  }
`;

export const WrapInfo = styled.div`
  padding-top: 5px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Writer = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #2277d8;
  margin-right: 27px;
  margin-left: 11px;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  font-size: 1.2rem;
  color: #7e7e7e;
  margin-left: 57%;
  margin-top: 30px;

  @media ${breakPoints.tablet} {
    font-size: 1.1rem;
    width: 100%;
    margin-left: 42%;
    margin-top: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
    width: 120%;
    margin-left: -96%;
    margin-top: 90px;
  }
`;

export const DateWrapper = styled.div`
  width: 50%;
  margin-right: 1%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  @media ${breakPoints.mobile} {
    width: 200%;
  }
`;

export const New = styled.div`
  width: 40px;
  height: 18px;
  border: none;
  background-color: #ddf0ff;
  color: #2277d8;
  font-size: 0.688rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  @media ${breakPoints.mobile} {
    position: relative;
    right: 55px;
  }
`;

export const PagingBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

export const PageWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export const AvatarImg = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 15px;
  @media ${breakPoints.mobile} {
    width: 60px;
    height: 60px;
    position: absolute;
    right:290px;
  }
  /* @media ${breakPoints.tablet} {
    width: 11%;
  }

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const MobileColumn = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    font-size: 1rem;
  }
`;
