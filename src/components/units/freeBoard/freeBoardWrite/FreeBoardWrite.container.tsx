import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./FreeBoardWrite.queries";
import * as yup from "yup";
import { IFreeBoardWriteContainer } from "./FreeBoardWrite.types";
import { Modal } from "antd";

const schema = yup.object({
  fileURLs: yup.array().required("게시판 이미지를 등록해주세요."),
});

export default function FreeBoardWriteContainer(
  props: IFreeBoardWriteContainer
) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [title, setTitle] = useState("");
  const onChangeTitle = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const [contents, setContents] = useState("");
  const onChangeContents = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContents(event.target.value);
  };

  const { setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState([""]);
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  // 등록
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title,
            contents,
            fileURLs: fileUrls,
          },
        },
      });
      Modal.success({ content: "게시글이 등록되었습니다." });

      router.push(`/freeBoard/${result.data?.createBoard.id}`);
    } catch (error) {
      Modal.error({ content: "게시글 등록에 실패하였습니다." });
    }
  };

  // 수정
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onClickUpdate = async (data: any) => {
    try {
      if (!title && !contents) {
        Modal.error({
          content: "수정된 내용이 없습니다. 제목 또는 내용을 수정해주세요",
        });
        return;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            id: router.query._id,
          },
        },
      });
      Modal.success({ content: "게시글을 수정합니다" });
      router.push(`/freeBoard/${result.data?.updateBoard.id}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 이미지
  useEffect(() => {
    const files = props.data?.fetchBoard.files;
    if (files) {
      const urls = files.map((el: any) => el.url);

      if (files[0]) {
        setFileUrls([...urls]);
      }
      setValue("fileURLs", [...urls]);

      trigger("fileURLs");
    }
  }, [props.data]);

  // 취소
  const onClickMoveToList = () => {
    router.push("/freeBoard");
  };

  return (
    <FreeBoardWritePresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
