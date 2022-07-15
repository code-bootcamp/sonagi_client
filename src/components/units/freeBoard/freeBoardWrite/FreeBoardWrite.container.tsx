import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { CREATE_BOARD } from "./FreeBoardWrite.queries";

export default function FreeBoardWriteContainer() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [title, setTitle] = useState("");
  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

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

  return (
    <FreeBoardWritePresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
