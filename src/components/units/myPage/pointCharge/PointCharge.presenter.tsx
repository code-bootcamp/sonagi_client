import * as S from "./PointCharge.styles";
export default function PointChargePresenter() {
  return (
    <div>
      <S.TopFlex>
        <S.MySonagiPoint>내 소나기 포인트</S.MySonagiPoint>
        <S.Flex>
          <S.TitleAmount>0</S.TitleAmount>
          <S.AmountWon>원</S.AmountWon>
        </S.Flex>
      </S.TopFlex>
      <S.TableBorder>
        <S.TableTop>소나기 포인트 충전</S.TableTop>

        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 2,000원</S.InnerTableContents>
          <S.AmountFlex>
            <S.HowMuchs>2,000</S.HowMuchs>
            <div>원</div>
          </S.AmountFlex>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 5,000원</S.InnerTableContents>
          <S.AmountFlex>
            <S.HowMuchs>5,000</S.HowMuchs>
            <div>원</div>
          </S.AmountFlex>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 10,000원</S.InnerTableContents>
          <S.AmountFlex>
            <S.HowMuch>10,000</S.HowMuch>
            <div>원</div>
          </S.AmountFlex>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 20,000원</S.InnerTableContents>
          <S.AmountFlex>
            <S.HowMuch>20,000</S.HowMuch>
            <div>원</div>
          </S.AmountFlex>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 50,000원</S.InnerTableContents>
          <S.AmountFlex>
            <S.HowMuch>50,000</S.HowMuch>
            <div>원</div>
          </S.AmountFlex>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 100,000원</S.InnerTableContents>
          <S.AmountFlexs>
            <S.HowMuch>100,000</S.HowMuch>
            <div>원</div>
          </S.AmountFlexs>
        </S.InnerTable>
        <S.InnerTable>
          <S.Input type="radio" name="cash" />
          <S.InnerTableContents>소나기 포인트 200,000원</S.InnerTableContents>
          <S.AmountFlexs>
            <S.HowMuch>200,000</S.HowMuch>
            <div>원</div>
          </S.AmountFlexs>
        </S.InnerTable>
      </S.TableBorder>
      <S.FooterBar>
        <S.ChargeAmount>충전 금액</S.ChargeAmount>
        <S.FooterFlex>
          <S.HowMuch>200,000</S.HowMuch>
          <S.FooterAmountWon>원</S.FooterAmountWon>
        </S.FooterFlex>
        <S.ChargeButton>충전하기</S.ChargeButton>
      </S.FooterBar>
    </div>
  );
}
