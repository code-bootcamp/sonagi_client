import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
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
  margin-right: 25px;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 45px;
    font-size: 0.9rem;
    /* margin-bottom: 35px; */
  }
`;
export default function Button01(props: any) {
  return <Button onClick={props.onClick}>{props.title}</Button>;
}

// <Button01 title="게시물 등록하기" isValid={formState.isValid} />
