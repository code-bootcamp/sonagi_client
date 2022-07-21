import * as S from "./mainPagePayment.styles";
import Fade from "react-reveal/Fade";

export default function MainPagePaymentPresenter(props) {
  return (
    <S.Wrapper>
      <Fade bottom duration={3000}>
        <S.TitleWrapper>
          <S.Title>소소한</S.Title>
          <S.Title>나의 이야기</S.Title>
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.Subtitle>베스트 셀러와</S.Subtitle>
          <S.Subtitle>최신 작품들까지</S.Subtitle>
        </S.TitleWrapper>
      </Fade>
      <S.QuestionBox
        onClick={props.onClickQuestion1}
        isAnswer1={props.isAnswer1}
      >
        <S.QuestionContents isAnswer1={props.isAnswer1}>
          읽지 않으면 환불이 가능한가요?
        </S.QuestionContents>
        {props.isAnswer1 && (
          <S.AnswerContents>
            물론입니다. <br />
            결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불해 드리고
            있어요.
            <br />
            <b>[소나기 &gt; 마이페이지 &gt; 구매 &gt; 결제 내역]</b> 에서 직접
            환불이 가능하며,
            <br />
            해결이 어려운 경우 고객센터로 문의해 주세요.
          </S.AnswerContents>
        )}
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion2}
        isAnswer2={props.isAnswer2}
      >
        <S.QuestionContents isAnswer2={props.isAnswer2}>
          어떤 기기에서 사용할 수 있나요?
        </S.QuestionContents>
        {props.isAnswer2 && (
          <S.AnswerContents>
            아래 기기와 버전에서 소나기를 사용할 수 있어요. <br />
            <br />
            - 휴대폰 / 태블릿 : iOS13, Android 6 이상 지원
            <br />
            - PC : Mac Yosemite, Window 10 이상 지원
            <br />
            (크레마 그랑데, 크레마 카르타G, 이노스페이스원 공식 판매 기기, 교보
            Sam 7.8 등)
          </S.AnswerContents>
        )}
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion3}
        isAnswer3={props.isAnswer3}
      >
        <S.QuestionContents isAnswer3={props.isAnswer3}>
          기다리면 무료는 누구나 읽을 수 있나요?
        </S.QuestionContents>
        {props.isAnswer3 && (
          <S.AnswerContents>
            네. 소나기의 회원이라면 누구나 기다리면 무료 혜택을 받을 수 있어요.{" "}
            <br />
            <br />
            도서 표지의 <b>&#39;기다리면 무료 마크&#39;</b>를 확인하세요!
            <br />
            읽고 싶은 작품이 &#39;기다리면 무료&#39;라면&#44;
            <br />
            <b>24시간마다 1화씩 계속 무료</b>로 읽을 수 있어요.
          </S.AnswerContents>
        )}
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion4}
        isAnswer4={props.isAnswer4}
      >
        <S.QuestionContents isAnswer4={props.isAnswer4}>
          회원가입 시 인증 / 로그인이 안돼요
        </S.QuestionContents>
        {props.isAnswer4 && (
          <S.AnswerContents>
            회원가입 시 입력한 이메일 주소로 인증 링크가 담긴 메일이 발송돼요.{" "}
            <br />
            가입일로부터 5일 이내에 이메일 인증을 완료하지 않는 경우, 가입
            정보가 파기되니 새로 회원가입을 진행해 주세요.
            <br />
            <br />
            <b> ※ 참고해주세요!</b>
            <br />
            인증 링크는 이메일 발송 시점으로부터 3시간 동안 유효하며, <br />
            유효시간이 지났다면 홈페이지에서 로그인한 뒤 인증 메일 재발송을 해야
            합니다.
            <br />
          </S.AnswerContents>
        )}
      </S.QuestionBox>
    </S.Wrapper>
  );
}
