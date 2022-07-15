import { useMutation, useQuery } from "@apollo/client";
import ProfileModifyPresenter from "./ProfileModify.presenter";
import { FETCH_LOGIN_USER, UPDATE_LOGIN_USER } from "./ProfileModify.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
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
  const [updateLoginUser] = useMutation(UPDATE_LOGIN_USER);

  const [isDelete, SetIsDelete] = useState(false);

  const { data } = useQuery(FETCH_LOGIN_USER);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickChangeUser = async (data: any) => {
    try {
      const result = await updateLoginUser({
        variables: {
          updateInput: {
            name: data.name,
            nickName: data.nickName,
            email: data.email,
          },
        },
      });
      console.log(result);
      alert("회원정보가 변경되었습니다");
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDelete = () => {
    SetIsDelete(true);
  };

  return (
    <ProfileModifyPresenter
      onClickChangeUser={onClickChangeUser}
      onClickDelete={onClickDelete}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      data={data}
      isDelete={isDelete}
    />
  );
}
