import { useRouter } from "next/router";
import * as S from "./footer.styles";
import FooterMobile from "./footerMobile";
export default function LayoutFooter() {
  const router = useRouter();
  const MoveToNotice = () => {
    router.push("/notice");
  };

  return (
    <>
      <S.Wrapper>
        <S.LeftBox>
          <S.Notice onClick={MoveToNotice}>공지사항</S.Notice>
          {/* d */}
          <S.Title>(주)소나기 사업자 정보</S.Title>
          <S.Contents>
            사업자 등록번호 000 - 00 - 00000 | 통신판매업신고번호
            2000-서울강남-00000 | 대표자명 이성계
            <br />
            주소 : 서울특별시 구로구 디지털로 300 지밸리 13F | 연락처 : 02 - 000
            - 0000
          </S.Contents>
          <S.Corp>ⓒ SONAGI Corp.</S.Corp>
        </S.LeftBox>
        <S.RightBox>
          <S.RightSubBox>
            <S.SNSButton src="/footer/facebook.png"></S.SNSButton>
            <S.SNSButton src="/footer/instagram.png"></S.SNSButton>
            <S.SNSButton src="/footer/youtube.png"></S.SNSButton>
          </S.RightSubBox>
          <S.Title>소나기 고객센터</S.Title>
          <S.RightSubBox>
            <S.Number>0000-0000</S.Number>
            <S.QuestButton>1 : 1 문의</S.QuestButton>
          </S.RightSubBox>
          <S.Contents2>
            평일 10:00~17:00 | 점심시간 12:30~14:00
            <br />
            주말 및 공휴일 휴무
          </S.Contents2>
        </S.RightBox>
      </S.Wrapper>
      <FooterMobile />
    </>
  );
}
