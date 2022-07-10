import * as S from "./EventList.styles";

export default function EventListPresenter(props) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.EventTitleWrap>
          <S.MainTitle>이벤트</S.MainTitle>
          <S.Subtitle>소나기의 이벤트를 알립니다.</S.Subtitle>
        </S.EventTitleWrap>
        <S.EventIcon src="../event/event.png" />
      </S.RowWrap>
      <S.ListWrapper>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg onClick={props.onClickDetail}></S.ListImg>
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg onClick={props.onClickDetail}></S.ListImg>
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg onClick={props.onClickDetail}></S.ListImg>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
