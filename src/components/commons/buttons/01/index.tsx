import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
  background-color: #2277d8;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 1.25rem;
  border: none;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 40px;
    font-size: 1.1rem;
  }
`;
export default function Button01(props: any) {
  return <Button>{props.title}</Button>;
}

// <Button01 title="게시물 등록하기" isValid={formState.isValid} />
