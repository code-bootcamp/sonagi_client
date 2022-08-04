import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NoticeWritePresenter from "./NoticeWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_NOTICE } from "./NoticeWrite.queries";
import { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

const schema = yup.object({
  title: yup.string(),
  contents: yup.string(),
  fileURLs: yup.array().required("표지 이미지를 등록해주세요!"),
});

export default function NoticeWriteContainer() {
  const router = useRouter();

  const [createNotice] = useMutation(CREATE_NOTICE);

  const [fileUrls, setFileUrls] = useState([""]);

  // 등록
  const onClickNoticeSubmit = async (data: any) => {
    try {
      await createNotice({
        variables: {
          createNoticeInput: {
            title: data.title,
            contents: data.contents,
            isTop: true,
            fileURLs: data.fileURLs,
          },
        },
      });
      Modal.success({ content: "등록 완료" });
      router.push("/notice");
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 이미지 파일 수정
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  const onClickList = () => {
    router.push("/notice");
  };

  return (
    <NoticeWritePresenter
      onClickList={onClickList}
      onClickNoticeSubmit={onClickNoticeSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
