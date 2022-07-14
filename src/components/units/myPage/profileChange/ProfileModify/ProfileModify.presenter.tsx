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
                  {/* <S.Error>{props.formState.errors.prevPwd?.message}</S.Error> */}
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>변경할 비밀번호</S.Label>
                  <S.LabelInput type="password" {...props.register("pwd")} />
                  {/* <S.Error>{props.formState.errors.pwd?.message}</S.Error> */}
                </S.WrapTitle>
                <S.WrapTitle>
                  <S.Label>변경할 비밀번호 확인</S.Label>
                  <S.LabelInput
                    type="password"
                    {...props.register("pwdCheck")}
                  />
                  {/* <S.Error>{props.formState.errors.pwdCheck?.message}</S.Error> */}
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
          {/* <S.Wrap>
          <S.WrapperModify>
            <S.WrapTitle>
              <S.Label>닉네임</S.Label>
              <S.LabelInput type="text" />
            </S.WrapTitle>
            <S.WrapTitle>
              <S.Label>이메일 주소</S.Label>
              <S.LabelInput type="text" />
            </S.WrapTitle>
            <S.WrapTitle>
              <S.Label>연락처</S.Label>
              <S.WrapNumber>
                <S.NumberInput type="text" />
                <S.NumberButton>인증번호 전송</S.NumberButton>
              </S.WrapNumber>
            </S.WrapTitle>
            <S.WrapTitle>
              <S.Label>비밀번호</S.Label>
              <S.LabelInput type="text" />
            </S.WrapTitle>
            <S.WrapButton>
              <S.Button>회원정보 수정</S.Button>
            </S.WrapButton>
          </S.WrapperModify>
        </S.Wrap> */}
        </S.BoxWrapper>
      </S.Wrapper>
    </form>
  );
}
