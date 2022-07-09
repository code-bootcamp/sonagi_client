import React from "react";
import * as S from "./ProfileCertify.styles";
export default function ProfileCertifyPresenter() {
  return (
    <S.Background>
      <S.Wrapper>
        <S.MainTitle>회원정보 변경</S.MainTitle>
        <S.WrapperPassword>
          <S.WrapTitle>
            <S.Label>보안을 위해 비밀번호를 한번 더 입력해 주세요</S.Label>
            <S.WrapInput>
              <S.LabelInput type="password" />
              <S.Button>확인</S.Button>
            </S.WrapInput>
          </S.WrapTitle>
        </S.WrapperPassword>
      </S.Wrapper>
    </S.Background>
  );
}
