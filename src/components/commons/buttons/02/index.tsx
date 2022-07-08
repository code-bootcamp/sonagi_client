import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #828282;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 20px;
  margin: 0 30px;
  border: none;
  text-align: center;
  cursor: pointer;
`;
export default function Button02(props: any) {
  return <Button>{props.title}</Button>;
}
