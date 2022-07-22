import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import InquireWritePresenter from "./InquireWrite.presenter";
import { CREATE_QUESTION } from "./InquireWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  title: yup.string().required("문의 제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
});

export default function InquireWriteContainer() {
  const router = useRouter();
  const [createQuestion] = useMutation(CREATE_QUESTION);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCreateQuestion = async (data: any) => {
    try {
      const result = await createQuestion({
        variables: {
          createQuestionInput: {
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "문의가 등록되었습니다" });
      router.push("/myPage/inquire/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <InquireWritePresenter
      onClickCreateQuestion={onClickCreateQuestion}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
