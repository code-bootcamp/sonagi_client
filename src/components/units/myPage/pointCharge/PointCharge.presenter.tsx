import Head from "next/head";
import HamburgerPage from "../../../commons/hamburger";
import * as S from "./PointCharge.styles";
import { IPointChargePresenterProps } from "./PointCharge.types";
export default function PointChargePresenter(
  props: IPointChargePresenterProps
) {
  return (
    <S.Wrapper>
      <Head>
        <link rel="shortcut icon" href="/header/favicon.ico" />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <S.TopFlex>
        <S.MySonagiPoint>내 소나기 포인트</S.MySonagiPoint>
        <S.Flex>
          <S.TitleAmount>
            {props.loginData?.fetchLoginUser.point.toLocaleString("ko-KR")}
          </S.TitleAmount>
          <S.AmountWon>원</S.AmountWon>
        </S.Flex>
      </S.TopFlex>
      <S.TableBorder>
        <S.TableTop>소나기 포인트 충전</S.TableTop>
        <S.TableDiv>
          {props.pointData?.fetchProductsAll.map((el: any) => (
            <S.InnerTable key={el._id} el={el} value={props.value}>
              <S.Input
                type="radio"
                name="cash"
                onClick={props.onClickPoint(el)}
              />
              <S.InnerTableContents>
                소나기 포인트 {el.point.toLocaleString("ko-KR")}원
              </S.InnerTableContents>
              <S.AmountFlex>
                <S.HowMuchs>{el.price.toLocaleString("ko-KR")}</S.HowMuchs>
                <div>원</div>
              </S.AmountFlex>
            </S.InnerTable>
          ))}
        </S.TableDiv>
      </S.TableBorder>
      <S.FooterBar>
        <S.Div>
          <S.ChargeAmount>충전 금액</S.ChargeAmount>
        </S.Div>
        <S.FooterFlex>
          <S.HowMuch>{props.value.toLocaleString("ko-KR")}</S.HowMuch>
          <S.FooterAmountWon>원</S.FooterAmountWon>
        </S.FooterFlex>
        <S.ButtonDiv>
          <S.ChargeButton onClick={props.requestPay}>충전하기</S.ChargeButton>
        </S.ButtonDiv>
      </S.FooterBar>
    </S.Wrapper>
  );
}
