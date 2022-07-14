import React from "react";
import * as S from "./ProfileModify.styles";

export default function ProfileModifyPresenter(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isPwd ? props.onClickChangePwd : props.onClickChangeUser
      )}
    >
      <S.Wrapper>
        <S.MainTitle>회원정보 변경</S.MainTitle>
        <S.SubTitle>인증번호는 카카오톡으로 전송됩니다.</S.SubTitle>
        <S.BoxWrapper>
          {props.ChangePwd ? (
            <S.Wrap>
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
                  <S.Button>비밀번호 변경</S.Button>
                </S.WrapButton>
              </S.WrapperModify>
            </S.Wrap>
          ) : (
            <S.Wrap>
              <S.ChangeButton onClick={props.onClickMoveChangePwd}>
                비밀번호 변경
              </S.ChangeButton>
            </S.Wrap>
          )}
          {props.ChangeUser ? (
            <S.Wrap>
              <S.WrapperModify>
                <S.WrapTitle>
                  <S.Label>이름</S.Label>
                  <S.LabelInput
                    type="text"
                    {...props.register("name")}
                    defaultValue={props.data?.fetchLoginUser.name}
                  />
                  <S.Error>{props.formState.errors.name?.message}</S.Error>
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>닉네임</S.Label>
                  <S.LabelInput
                    type="text"
                    {...props.register("nickName")}
                    defaultValue={props.data?.fetchLoginUser.nickName}
                  />
                  <S.Error>{props.formState.errors.nickName?.message}</S.Error>
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>이메일 주소</S.Label>
                  <S.LabelInput
                    type="text"
                    {...props.register("email")}
                    defaultValue={props.data?.fetchLoginUser.email}
                  />
                  <S.Error>{props.formState.errors.email?.message}</S.Error>
                </S.WrapTitle>
                <S.WrapButton>
                  <S.Button>회원정보 변경</S.Button>
                </S.WrapButton>
              </S.WrapperModify>
            </S.Wrap>
          ) : (
            <S.Wrap>
              <S.ChangeButton onClick={props.onClickMoveChangeUser}>
                회원정보 변경
              </S.ChangeButton>
            </S.Wrap>
          )}
        </S.BoxWrapper>
      </S.Wrapper>
    </form>
  );
}
