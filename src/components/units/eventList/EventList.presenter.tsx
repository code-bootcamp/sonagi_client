import * as S from "./EventList.styles";

export default function EventListPresenter(props) {
  return (
    <S.Wrapper>
      <S.MainTitle>이벤트</S.MainTitle>
      <S.ListWrapper>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg onClick={props.onClickDetail}></S.ListImg>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg></S.ListImg>
        <S.ListTitle>이벤트 제목</S.ListTitle>
        <S.ListDate>기간 : 2022.6.20 ~ 2022.7.10</S.ListDate>
        <S.ListImg></S.ListImg>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
