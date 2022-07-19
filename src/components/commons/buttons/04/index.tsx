import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
  background-color: #ffffff;
  color: #2277d8;
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 1.25rem;
  border: 1px solid #2277d8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 45px;
    font-size: 0.9rem;
  }
`;
export default function Button04(props: any) {
  return <Button onClick={props.onClick}>{props.title}</Button>;
}
