import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { CREATE_BOARD } from "./FreeBoardWrite.queries";
import * as yup from "yup";

const schema = yup.object({
  fileURLs: yup.array().required("자유게시판 이미지를 등록해주세요!"),
});
export default function FreeBoardWriteContainer() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [title, setTitle] = useState("");
  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const { setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title,
            contents,
          },
        },
      });
      console.log("result", result);
      console.log("result.data.createBoard.id", result.data.createBoard.id);
      alert("게시글이 등록되었습니다");
      router.push(`/freeBoard/${result.data?.createBoard.id}`);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    // console.log(newFileUrls);

    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  return (
    <FreeBoardWritePresenter
      fileUrls={fileUrls}
      setFileUrls={setFileUrls}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
