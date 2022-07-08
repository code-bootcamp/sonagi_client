import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #2277d8;
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
export default function Button01(props: any) {
  return <Button>{props.title}</Button>;
}

// <Button01 title="게시물 등록하기" isValid={formState.isValid} />
