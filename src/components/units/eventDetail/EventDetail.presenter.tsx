import Button01 from "../../commons/buttons/01";
import * as S from "./EventDetail.styles";

export default function EventDetailPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.EventDetailWrap>
        <S.RowWrap>
          <S.MainTitle>이벤트</S.MainTitle>
          <S.TitleLine></S.TitleLine>
        </S.RowWrap>
        <S.SubTitle>작성 제목</S.SubTitle>
        <S.WriterWrapper>
          <S.Writer>작성자</S.Writer>
          <S.CreatedDate>2022.08.04</S.CreatedDate>
        </S.WriterWrapper>
        <S.DetailBox></S.DetailBox>
        <S.ButtonWrapper>
          <Button01 onClick={props.onClickList} title="목록으로" />
          <Button01 onClick={props.onClickList} title="수정하기" />
          <Button01 title="삭제하기" />
        </S.ButtonWrapper>
      </S.EventDetailWrap>
    </S.Wrapper>
  );
}
