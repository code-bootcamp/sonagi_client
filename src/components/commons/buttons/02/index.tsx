import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
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
    width: 100px;
    height: 45px;
    font-size: 0.9rem;
    margin-right: 5px;
    margin-left: 25px;
  }
`;
export default function Button02(props: any) {
  return <Button onClick={props.onClick}>{props.title}</Button>;
}
