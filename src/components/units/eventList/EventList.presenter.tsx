import * as S from "./EventList.styles";

export default function EventListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.EventTitleWrap>
          <S.MainTitle>이벤트</S.MainTitle>
          <S.Subtitle>소나기의 이벤트를 알립니다.</S.Subtitle>
        </S.EventTitleWrap>
        <S.EventIcon src="../event/event.png" />
      </S.RowWrap>
      {props.data?.fetchEventsAll.map((el: any) => (
        <S.ListWrapper key={el.id}>
          <S.ListTitle>{el.title}</S.ListTitle>
          <S.ListDate>기간 : 2022.7.20 ~ 2022.10.10</S.ListDate>
          <S.ListImgDiv>
            <S.ListImg
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
            />
          </S.ListImgDiv>
        </S.ListWrapper>
      ))}
    </S.Wrapper>
  );
}
