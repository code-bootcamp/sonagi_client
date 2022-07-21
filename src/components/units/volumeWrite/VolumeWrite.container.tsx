import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import * as yup from "yup";
import VolumeWritePresenter from "./VolumeWrite.presenter";
import { CREATE_NOVEL_INDEX, FETCH_NOVEL_DETAIL } from "./VolumeWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";
import { Modal } from "antd";

const schema = yup.object({
  title: yup.string().required("필수"),
  contents: yup.string().required("필수"),
});

export default function VolumeWriteContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const [createNovelIndex] = useMutation(CREATE_NOVEL_INDEX);
  const [isRule, setIsRule] = useState(false);
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

  // 공지
  const [isNotice, setIsNotice] = useState(false);
  const [isEpisode, setIsEpisode] = useState(true);
  const onClickNotice = () => {
    setIsNotice(true);
    setIsEpisode(false);
  };

  const onClickEpisode = () => {
    setIsNotice(false);
    setIsEpisode(true);
  };

  // 완결
  const [finish, setFinish] = useState(false);
  const onClickFinish = () => {
    setFinish((prev) => !prev);
  };

  // 등록
  const onClickSubmit = async (data: any) => {
    if (isRule === false) {
      Modal.warning({ content: "운영원칙에 동의해주세요" });
    } else
      try {
        await createNovelIndex({
          variables: {
            input: {
              title: data.title,
              contents: data.contents,
              novelID: router.query._id,
              authorText: data.authorText,
              isFinish: finish,
              isNotice,
            },
          },
        });
        alert("등록 성공");
        router.push(`/novel/${router.query._id}`);
      } catch (error) {
        alert(error);
      }
  };

  const onClickRule = () => {
    setIsRule(true);
  };

  return (
    <VolumeWritePresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickSubmit={onClickSubmit}
      onClickRule={onClickRule}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      data={data}
      // toastUI
      onChangeDescription={onChangeDescription}
      editorRef={editorRef}
      onClickFinish={onClickFinish}
      // 공지
      onClickNotice={onClickNotice}
      onClickEpisode={onClickEpisode}
      isNotice={isNotice}
      isEpisode={isEpisode}
    />
  );
}
