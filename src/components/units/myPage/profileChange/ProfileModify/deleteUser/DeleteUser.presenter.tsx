import * as S from "./DeleteUser.styles";

export default function DeleteUserPresenter(props) {
  return (
    <S.Wrap setCheck={props.setCheck}>
      <S.Label>회원 탈퇴</S.Label>
      <S.WrapperModify>
        <S.WrapTitle>
          <S.Title>다음 사항을 꼭 확인해 주세요 !</S.Title>
          <S.SubTitle>회원 탈퇴 관련 자주 묻는 질문</S.SubTitle>
          <S.Contents>
            Q. 아직 사용하지 않은 소나기 포인트는 어떻게 되나요?
          </S.Contents>
          <S.Contents>A. 즉시 소멸되며 환불받을 수 없습니다.</S.Contents>
          <S.Contents>
            Q. 탈퇴한 계정의 이메일로 다시 가입할 수 있나요?
          </S.Contents>
          <S.Contents>A. 이메일은 영구적으로 재사용 할 수 없습니다.</S.Contents>
          <S.Title>탈퇴하려는 이유는 무엇인가요?</S.Title>
          <S.Box>
            <input type="radio" name="radio" />
            <S.Contents>원하는 책이 부족해서</S.Contents>
          </S.Box>
          <S.Box>
            <input type="radio" name="radio" />
            <S.Contents>회원 혜택이 부족해서</S.Contents>
          </S.Box>
          <S.Box>
            <input type="radio" name="radio" />
            <S.Contents>불만, 불편 사항에 대한 응대가 늦어서</S.Contents>
          </S.Box>
          <S.Box>
            <input type="radio" name="radio" />
            <S.Contents>자주 사용하지 않아서</S.Contents>
          </S.Box>
          <S.Box>
            <input type="radio" name="radio" />
            <S.Contents>기타</S.Contents>
          </S.Box>
        </S.WrapTitle>
      </S.WrapperModify>
      <S.BottomWrapper>
        <input type="checkbox" onClick={props.onClickCheck} />
        <S.Check>위 내용을 이해했으며, 모두 동의합니다.</S.Check>
      </S.BottomWrapper>
      <S.ButtonWrapper>
        {props.setCheck && (
          <S.Button onClick={props.onClickDeleteUser}>회원 탈퇴</S.Button>
        )}
      </S.ButtonWrapper>
    </S.Wrap>
  );
}
