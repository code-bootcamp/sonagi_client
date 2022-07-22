import * as S from "./mainPagePayment.styles";
import Fade from "react-reveal/Fade";

export default function MainPagePaymentPresenter(props: any) {
  return (
    <S.Wrapper>
      <Fade bottom duration={3000}>
        <S.TitleWrapper>
          <S.Title>당신을 기다리는</S.Title>
          <S.Title>10만권의 소설</S.Title>
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.Subtitle>상황에 맞게 원하는 포인트를</S.Subtitle>
          <S.Subtitle>자유롭게 선택하세요</S.Subtitle>
        </S.TitleWrapper>
      </Fade>
      <S.BoxWrapper>
        <S.Box>
          <S.BoxT>소나기와 함께하는</S.BoxT>
          <S.ContentWrap>
            <S.BoxWrap>
              <S.BoxTitle>회원</S.BoxTitle>
              <S.BoxContents {...props.animatedItem} />
              <S.BoxTitle>명</S.BoxTitle>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.Con>50 %</S.Con>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.BoxTitle>유료회원</S.BoxTitle>
              <S.BoxContents {...props.animatedItem2} />
              <S.BoxTitle>명</S.BoxTitle>
            </S.BoxWrap>
          </S.ContentWrap>
          <S.SubT>소나기의 콘텐츠를 무제한으로</S.SubT>
        </S.Box>
        <S.Box>
          <S.BoxT>포인트 충전</S.BoxT>
          <S.ContentWrap>
            <S.BoxWrap>
              <S.BoxTitle>포인트</S.BoxTitle>
              <S.BoxContents {...props.animatedItem3} />
              <S.BoxTitle>P</S.BoxTitle>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.Con2>5 %</S.Con2>
            </S.BoxWrap>
            <S.BoxWrap>
              <S.BoxTitle>금액</S.BoxTitle>
              <S.BoxContents {...props.animatedItem4} />
              <S.BoxTitle>원</S.BoxTitle>
            </S.BoxWrap>
          </S.ContentWrap>
          <S.SubT>소나기를 할인된 가격으로 즐겨보세요</S.SubT>
        </S.Box>
        <S.Pay>
          <S.PayBox>
            <S.PayImg src="/mainpage/ticket.png" />
            <S.PayContent>
              내가 원하는 작가와
              <br />
              작품에 후원 할 수 있어요
            </S.PayContent>
          </S.PayBox>
          <S.Line></S.Line>
          <S.PayBox>
            <S.PayImg src="/mainpage/money.png" />
            <S.PayContent>
              포인트를 충전하셔도 사용이력이
              <br />
              없으면 즉시 환불해드려요
            </S.PayContent>
          </S.PayBox>
        </S.Pay>
      </S.BoxWrapper>
    </S.Wrapper>
  );
}
