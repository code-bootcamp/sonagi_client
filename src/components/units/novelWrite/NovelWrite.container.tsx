import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import NovelWritePresenter from "./NovelWrite.presenter";
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_NOVEL, FETCH_NOVEL_CATEGORYS_ALL } from "./NovelWrite.queries";
import { Editor } from "@toast-ui/react-editor";

const schema = yup.object({
  title: yup.string().required("작품 제목을 입력해 주세요!"),
  description: yup.string().required("작품 소개를 입력해 주세요!"),
  categoryID: yup.string().required("장르를 선택해 주세요!"),
  fileURLs: yup.array().required("표지 이미지를 등록해주세요!"),
});

export default function NovelWriteContainer() {
  const [isClickPre, setIsClickPre] = useState(false);
  const [isClickDay, setIsClickDay] = useState(true);
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [isSelect, SetIsSelect] = useState(false);

  const [createNovel] = useMutation(CREATE_NOVEL);
  const { data: categoryData } = useQuery(FETCH_NOVEL_CATEGORYS_ALL);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // toastUI

  const editorRef = useRef<Editor>(null);
  const onChangeDescription = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();

    setValue("description", htmlData);
    trigger("description");
  };

  // image

  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    // console.log(newFileUrls);

    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  // 장르 선택

  const onClickSelectGenre = () => {
    SetIsSelect((prev) => !prev);
  };

  const onClickGenre = (event) => {
    setGenre(event?.target.id);
    console.log(event?.target.id);
    setName(event.target.innerText);
    SetIsSelect((prev) => !prev);

    setValue("categoryID", event?.target.id);
    trigger("categoryID");
  };

  // 태그

  const [tags, setTags] = useState<string[]>(["태그"]);

  const onClickSubmit = async (data: any) => {
    // console.log(fileId[0]);
    try {
      const result = await createNovel({
        variables: {
          createNovelInput: {
            title: data.title,
            description: data.description,
            tags,
            categoryID: data.categoryID,
            fileURLs: data.fileURLs,
          },
        },
      });
      console.log(result);
      alert("성공");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickCycleButton = () => {
    setIsClickPre((prev) => !prev);
    setIsClickDay((prev) => !prev);
  };

  return (
    <NovelWritePresenter
      onClickCycleButton={onClickCycleButton}
      isClickPre={isClickPre}
      isClickDay={isClickDay}
      // toastUI
      onChangeDescription={onChangeDescription}
      editorRef={editorRef}
      // yup
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      // genre
      onClickSelectGenre={onClickSelectGenre}
      setGenre={setGenre}
      onClickGenre={onClickGenre}
      isSelect={isSelect}
      genre={genre}
      name={name}
      // images
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      categoryData={categoryData}
      // tags
      tags={tags}
      setTags={setTags}
    />
  );
}
