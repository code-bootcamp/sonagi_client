import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #2277d8;
  color: #ffffff;
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  border: none;
  text-align: center;
  cursor: pointer;
`;
export default function Button03(props: any) {
  return <Button>{props.title}</Button>;
}
