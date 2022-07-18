import React from "react";
import HamburgerPage from "../../../commons/hamburger";
import * as S from "./PasswordChange.styles";

export default function PasswordChangePresenter(props) {
  return (
    <S.Wrapper>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <form onSubmit={props.handleSubmit(props.onClickChangePwd)}>
        <S.MainTitle>비밀번호 변경</S.MainTitle>
        <S.SubTitle>
          현재 비밀번호와 변경하실 비밀번호를 입력해주세요.
        </S.SubTitle>
        <S.BoxWrapper>
          <S.Wrap>
            <S.WrapperModify>
              <S.WrapTitle>
                <S.Label>현재 비밀번호</S.Label>
                <S.LabelInput type="password" {...props.register("prevPwd")} />
                <S.Error>{props.formState.errors.prevPwd?.message}</S.Error>
              </S.WrapTitle>
              <S.WrapTitle>
                <S.Label>변경할 비밀번호</S.Label>
                <S.LabelInput type="password" {...props.register("pwd")} />
                <S.Error>{props.formState.errors.pwd?.message}</S.Error>
              </S.WrapTitle>
              <S.WrapTitle>
                <S.Label>변경할 비밀번호 확인</S.Label>
                <S.LabelInput type="password" {...props.register("pwdCheck")} />
                <S.Error>
                  {props.formState.errors.pwdCheck &&
                    "비밀번호가 일치하지 않습니다"}
                </S.Error>
              </S.WrapTitle>
              <S.WrapButton>
                <S.Button>비밀번호 변경</S.Button>
              </S.WrapButton>
            </S.WrapperModify>
          </S.Wrap>
        </S.BoxWrapper>
      </form>
    </S.Wrapper>
  );
}
