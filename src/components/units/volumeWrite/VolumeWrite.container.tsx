import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import * as yup from "yup";
import VolumeWritePresenter from "./VolumeWrite.presenter";
import { CREATE_NOVEL_INDEX, FETCH_NOVEL_DETAIL } from "./VolumeWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  title: yup.string().required("필수"),
});

export default function VolumeWriteContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const [createNovelIndex] = useMutation(CREATE_NOVEL_INDEX);
  const { data } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 등록
  const onClickSubmit = async (data: any) => {
    try {
      await createNovelIndex({
        variables: {
          createNovelIndexInput: {
            title: data.title,
            contents: data.contents,
            novelID: router.query._id,
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
      data={data}
    />
  );
}
