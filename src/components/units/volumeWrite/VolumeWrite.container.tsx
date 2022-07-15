import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import * as yup from "yup";
import VolumeWritePresenter from "./VolumeWrite.presenter";
import { CREATE_NOVEL_INDEX, FETCH_NOVEL_DETAIL } from "./VolumeWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";

const schema = yup.object({
  title: yup.string().required("필수"),
  contents: yup.string().required("필수"),
});

export default function VolumeWriteContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const [createNovelIndex] = useMutation(CREATE_NOVEL_INDEX);
  const { data } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // toastUI
  const editorRef = useRef<Editor>(null);
  const onChangeDescription = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    console.log(htmlData);
    setValue("contents", htmlData);
    trigger("contents");
  };

  // 등록
  const onClickSubmit = async (data: any) => {
    try {
      await createNovelIndex({
        variables: {
          input: {
            title: data.title,
            contents: data.contents,
            novelID: router.query._id,
            authorText: data.authorText,
          },
        },
      });
      alert("등록 성공");
      router.push(`/novel/${router.query._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <VolumeWritePresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      data={data}
      // toastUI
      onChangeDescription={onChangeDescription}
      editorRef={editorRef}
    />
  );
}
