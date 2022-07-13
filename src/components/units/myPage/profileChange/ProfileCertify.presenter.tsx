import React from "react";
import * as S from "./ProfileCertify.styles";
export default function ProfileCertifyPresenter() {
  return (
    <S.Wrapper>
      <S.Div>
        <S.MainTitle>회원정보 변경</S.MainTitle>
      </S.Div>
      <S.WrapperPassword>
        <S.WrapTitle>
          <S.LabelWrapper>
            <S.Label>개인정보 보호를 위해</S.Label>
            <S.Label>비밀번호를 한번 더 입력해 주세요</S.Label>
          </S.LabelWrapper>
          <S.WrapInput>
            <S.LabelInput type="password" />
            <S.Button>확인</S.Button>
          </S.WrapInput>
        </S.WrapTitle>
      </S.WrapperPassword>
    </S.Wrapper>
  );
}
