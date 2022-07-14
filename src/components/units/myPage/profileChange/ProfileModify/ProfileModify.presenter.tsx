import React from "react";
import * as S from "./ProfileModify.styles";

export default function ProfileModifyPresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickChangePwd)}>
      <S.Wrapper>
        <S.MainTitle>회원정보 변경</S.MainTitle>
        <S.SubTitle>인증번호는 카카오톡으로 전송됩니다.</S.SubTitle>
        <S.BoxWrapper>
          <S.Wrap>
            {props.ChangePwd ? (
              <S.WrapperModify>
                <S.WrapTitle>
                  <S.Label>현재 비밀번호</S.Label>
                  <S.LabelInput
                    type="password"
                    {...props.register("prevPwd")}
                  />
                  <S.Error>{props.formState.errors.prevPwd?.message}</S.Error>
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>변경할 비밀번호</S.Label>
                  <S.LabelInput type="password" {...props.register("pwd")} />
                  <S.Error>{props.formState.errors.pwd?.message}</S.Error>
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>변경할 비밀번호 확인</S.Label>
                  <S.LabelInput
                    type="password"
                    {...props.register("pwdCheck")}
                  />
                  <S.Error>
                    {props.formState.errors.pwdCheck &&
                      "비밀번호가 일치하지 않습니다"}
                  </S.Error>
                </S.WrapTitle>
                <S.WrapButton>
                  <S.Button isValid={props.formState.isValid}>
                    비밀번호 변경
                  </S.Button>
                </S.WrapButton>
              </S.WrapperModify>
            ) : (
              <S.ChangeButton onClick={props.onClickMoveChangePwd}>
                비밀번호 변경
              </S.ChangeButton>
            )}
          </S.Wrap>
          <S.Wrap>
            <S.ChangeButton>회원 정보 변경</S.ChangeButton>
          </S.Wrap>
        </S.BoxWrapper>
      </S.Wrapper>
    </form>
  );
}
