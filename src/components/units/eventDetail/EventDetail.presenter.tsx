import * as S from "./EventDetail.styles";

export default function EventDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.MainTitle>이벤트</S.MainTitle>
      <S.SubTitle>작성 제목</S.SubTitle>
      <S.WriterWrapper>
        <S.Writer>작성자</S.Writer>
        <S.CreatedDate>2022.08.04</S.CreatedDate>
      </S.WriterWrapper>
      <S.DetailBox></S.DetailBox>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickList}>목록으로</S.Button>
        <S.Button onClick={props.onClickWrite}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
