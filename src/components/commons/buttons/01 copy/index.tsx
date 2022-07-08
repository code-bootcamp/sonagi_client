// 다른데서도 import해서 쓸 수 있게 여러가지 버튼들 만들기
// 사용하려면 다른데서도 isValid, title 넘겨줘야 함

import styled from "@emotion/styled";

const Button = styled.div`
  background-color: #2277d8;
  color: #ffffff;
  width: 160px;
  height: 60px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  /* background-color: ${(props) => (props.isValid ? "pink" : "default")}; */
`;
export default function Button01(props: any) {
  return <Button isValid={props.isValid}>{props.title}</Button>;
}

// <Button01 title="게시물 등록하기" isValid={formState.isValid} />
