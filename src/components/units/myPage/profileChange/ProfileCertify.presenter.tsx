import React from "react";
import HamburgerPage from "../../../commons/hamburger";
import * as S from "./ProfileCertify.styles";
import { IProfileCertifyPresenter } from "./ProfileCertify.types";
export default function ProfileCertifyPresenter(
  props: IProfileCertifyPresenter
) {
  return (
    <S.Wrapper>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <form onSubmit={props.handleSubmit(props.onClickChangePassword)}>
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
              <S.LabelInput type="password" {...props.register("pwd")} />
              <S.Button>확인</S.Button>
            </S.WrapInput>
          </S.WrapTitle>
        </S.WrapperPassword>
      </form>
    </S.Wrapper>
  );
}
