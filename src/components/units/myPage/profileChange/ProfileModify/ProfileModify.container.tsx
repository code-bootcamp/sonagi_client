import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import ProfileModifyPresenter from "./ProfileModify.presenter";
import { UPDATE_USER_PWD } from "./ProfileModify.queries";
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
});

export default function ProfileModifyContainer() {
  const [updateUserPwd] = useMutation(UPDATE_USER_PWD);
  const [isPwd, setIsPwd] = useState(false);
  const [ChangePwd, setChangePwd] = useState(false);
  const [ChangeUser, setChangeUser] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickMoveChangePwd = () => {
    setChangePwd(true);
    setIsPwd(true);
  };

  const onClickMoveChangeUser = () => {
    setChangeUser(true);
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
      onClickMoveChangePwd={onClickMoveChangePwd}
      onClickMoveChangeUser={onClickMoveChangeUser}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isPwd={isPwd}
    />
  );
}
