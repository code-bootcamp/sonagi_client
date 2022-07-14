import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import ProfileModifyPresenter from "./ProfileModify.presenter";
import {
  FETCH_LOGIN_USER,
  UPDATE_LOGIN_USER,
  UPDATE_USER_PWD,
} from "./ProfileModify.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  prevPwd: yup.string(),
  pwd: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    )
    .required("필수 입력 사항"),
  pwdCheck: yup.string().oneOf([yup.ref("pwd"), null]),
  name: yup
    .string()
    .max(8, "이름은 8글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력 사항"),
  nickName: yup
    .string()
    .max(6, "닉네임은 6글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
});

export default function ProfileModifyContainer() {
  const [updateUserPwd] = useMutation(UPDATE_USER_PWD);
  const [updateLoginUser] = useMutation(UPDATE_LOGIN_USER);

  const { data } = useQuery(FETCH_LOGIN_USER);

  const [isPwd, setIsPwd] = useState(false);
  const [ChangePwd, setChangePwd] = useState(false);
  const [ChangeUser, setChangeUser] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickMoveChangePwd = () => {
    setChangePwd(true);
    setIsPwd(true);
  };

  const onClickMoveChangeUser = () => {
    setChangeUser(true);
    setIsPwd(false);
  };

  const onClickChangePwd = async (data: any) => {
    try {
      const result = await updateUserPwd({
        variables: {
          pwd: data.pwd,
        },
      });
      console.log(result);
      alert("비밀번호가 변경되었습니다");
      setChangePwd(false);
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickChangeUser = async (data: any) => {
    try {
      const result = await updateLoginUser({
        variables: {
          name: data.name,
          nickName: data.nickName,
          email: data.email,
        },
      });
      console.log(result);
      alert("회원정보가 변경되었습니다");
      setChangeUser(false);
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProfileModifyPresenter
      ChangePwd={ChangePwd}
      setChangePwd={setChangePwd}
      ChangeUser={ChangeUser}
      setChangeUser={setChangeUser}
      onClickChangePwd={onClickChangePwd}
      onClickChangeUser={onClickChangeUser}
      onClickMoveChangePwd={onClickMoveChangePwd}
      onClickMoveChangeUser={onClickMoveChangeUser}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isPwd={isPwd}
      data={data}
    />
  );
}
