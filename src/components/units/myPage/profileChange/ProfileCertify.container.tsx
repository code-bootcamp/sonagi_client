import { useMutation } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import ProfileCertifyPresenter from "./ProfileCertify.presenter";
import { COMPARE_PASSWORD } from "./ProfileCertify.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const schema = yup.object({
  pwd: yup.string().required("필수 입력 사항"),
});

export default function ProfileCertifyContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const [comparePassword] = useMutation(COMPARE_PASSWORD);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickChangePassword = async (data: any) => {
    try {
      const result = await comparePassword({
        variables: {
          pwd: String(data.pwd),
        },
      });
      if (result.data.comparePassword.isSuccess === true) {
        reset();
        router.push("/myPage/profileModify");
      } else alert("비밀번호가 일치하지 않습니다");
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProfileCertifyPresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickChangePassword={onClickChangePassword}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
