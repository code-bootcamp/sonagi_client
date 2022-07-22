import { useMutation } from "@apollo/client";
import ProfileModifyPresenter from "./PasswordChange.presenter";
import { COMPARE_PASSWORD, UPDATE_USER_PWD } from "./PasswordChange.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

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

export default function PasswordChangeContainer() {
  const [updateUserPwd] = useMutation(UPDATE_USER_PWD);
  const [comparePassword] = useMutation(COMPARE_PASSWORD);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickChangePwd = async (data: any) => {
    try {
      const result = await comparePassword({
        variables: {
          pwd: String(data.prevPwd),
        },
      });
      if (result.data.comparePassword.isSuccess === true) {
        try {
          const result = await updateUserPwd({
            variables: {
              pwd: data.pwd,
            },
          });
          console.log(result);
          Modal.success({ content: "비밀번호가 변경되었습니다" });
          reset();
        } catch (error: any) {
          Modal.error({ content: error.message });
        }
        reset();
      } else Modal.error({ content: "현재 비밀번호가 일치하지 않습니다" });
      return;
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <ProfileModifyPresenter
      onClickChangePwd={onClickChangePwd}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
