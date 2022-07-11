import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
  background-color: #828282;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 45px;
    font-size: 0.9rem;
  }
`;
export default function Button02(props: any) {
  return <Button onClick={props.onClick}>{props.title}</Button>;
}
