import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeDetail.styles";

export default function NoticeDetailPresenter(props: any) {
  return (
    <S.Wrap>
      <S.NoticeDetailWrap>
        <S.RowWrap>
          <S.Title>공지사항</S.Title>
          <S.TitleLine></S.TitleLine>
        </S.RowWrap>
        <S.NoticeDetail>
          <S.NoticeName>
            [공지] iOS 12 미만 앱 업데이트 지원 종료 예정
          </S.NoticeName>
          <S.WriterWrap>
            <S.WriterName>관리자</S.WriterName>
            <S.WriteAt>2022.00.00</S.WriteAt>
          </S.WriterWrap>
          <S.Line></S.Line>
          <S.contents>
            안녕하세요. 소나기입니다. <br />
            소나기를 이용해 주시는 고객님께 감사 말씀드립니다. <br />
            <br />
            iOS 12 미만 버전에서 리디 앱에 대한 신규 업데이트 지원이 종료될
            예정이오니,
            <br /> 아래 내용을 참고하시어 이용 부탁드립니다. <br />
            <br />
            * 적용일
            <br /> - 2022년 8월 1일 (월) <br />
            <br />
            * 대상 기기 OS 버전
            <br /> - iOS 12 미만 앱 <br />
            <br />
            * 설치 가능한 앱 최신 버전 (FAQ 바로가기 - 클릭) <br />
            <br />
            고객님의 소중한 정보 보안을 더욱 강화하고 쾌적한 독서 환경을
            제공해드리기 위해
            <br /> 해당 버전의 지원을 부득이하게 종료하게 된 점 너그러운 양해
            부탁드립니다.
            <br /> 앞으로도 고객님께서 편리하고 안전한 서비스를 이용하실 수
            있도록 최선을 다하겠습니다. <br />
            감사합니다.
            <br />
            <br /> 소나기 드림.
          </S.contents>
          <S.BtnWrap onClick={props.onClickMoveToList}>
            <Button01 title="목록으로" />
          </S.BtnWrap>
        </S.NoticeDetail>
      </S.NoticeDetailWrap>
    </S.Wrap>
  );
}
