import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  padding-bottom: 120px;
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

export const CommentIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  font-size: 24px;
  color: #484848;
  margin-left: 10px;
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
`;

export const ContentsInput = styled.input`
  width: 100%;
  height: 110px;
`;

export const Wraplength = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  height: 50px;
`;

export const Length = styled.div`
  width: 90%;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const CommentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  background-color: #2277d8;
  color: white;
  cursor: pointer;
`;
