import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import NovelWritePresenter from "./NovelWrite.presenter";
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_NOVEL,
  FETCH_NOVEL_CATEGORYS_ALL,
  UPDATE_NOVEL,
} from "./NovelWrite.queries";
import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import { INovelWriteContainerProps, IonClickUpdate } from "./NovelWrite.types";

const schema = yup.object({
  title: yup.string().required("작품 제목을 입력해 주세요!"),
  description: yup.string().required("작품 소개를 입력해 주세요!"),
  categoryID: yup.string().required("장르를 선택해 주세요!"),
  fileURLs: yup.array().required("표지 이미지를 등록해주세요!"),
});

export default function NovelWriteContainer(props: INovelWriteContainerProps) {
  console.log(props.editData);

  const router = useRouter();

  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [isSelect, SetIsSelect] = useState(false);

  const [createNovel] = useMutation(CREATE_NOVEL);
  const [updateNovel] = useMutation(UPDATE_NOVEL);
  const { data: categoryData } = useQuery(FETCH_NOVEL_CATEGORYS_ALL);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // toastUI

  const editorRef = useRef<Editor>(null);
  const onChangeDescription = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    console.log(htmlData);
    setValue("description", htmlData);
    trigger("description");
  };

  // toastUI edit
  useEffect(() => {
    const htmlString = props.editData?.fetchNovelDetail.description;
    editorRef.current?.getInstance().setHTML(htmlString);
  }, [props?.editData]);

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

  // image Edit
  useEffect(() => {
    const files = props.editData?.fetchNovelDetail.files;
    if (files) {
      const urls = files.map((el: any) => el.url);

      if (files[0]) {
        setFileUrls([...urls]);
      }
      setValue("fileURLs", [...urls]);

      trigger("fileURLs");
    }
  }, [props.editData]);

  // 장르 선택

  const onClickSelectGenre = () => {
    SetIsSelect((prev) => !prev);
  };

  const onClickGenre = (event: any) => {
    setGenre(event?.target.id);
    console.log(event?.target.id);
    setName(event.target.innerText);
    SetIsSelect((prev) => !prev);

    setValue("categoryID", event?.target.id);
    trigger("categoryID");
  };

  useEffect(() => {
    if (props.editData?.fetchNovelDetail.novelCategory) {
      setGenre(props.editData?.fetchNovelDetail.novelCategory.id);
    }
    setName(props.editData?.fetchNovelDetail.novelCategory.name);
    setValue("categoryID", props.editData?.fetchNovelDetail.novelCategory.id);
    trigger("categoryID");
  }, [props.editData]);

  // 태그

  const [tags, setTags] = useState<string[]>(["태그"]);

  useEffect(() => {
    if (props.editData?.fetchNovelDetail.novelTags.length) {
      setTags([
        ...props.editData?.fetchNovelDetail.novelTags.map((el: any) => el.name),
      ]);
    }
  }, [props.editData]);

  // 등록
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
            cycles: isDay,
          },
        },
      });
      console.log("하하하", result);
      alert("성공");
      router.push(`/novel/${result.data?.createNovel.id}`);
    } catch (error) {
      alert(error);
    }
  };

  // 수정
  const onClickUpdate = async (data: IonClickUpdate) => {
    try {
      const result = await updateNovel({
        variables: {
          updateNovelInput: {
            title: data.title,
            description: data.description,
            tags,
            categoryID: data.categoryID,
            fileURLs: data.fileURLs,
            id: router.query._id,
          },
        },
      });
      console.log(result);
      alert("성공");
      router.push(`/novel/${result.data?.updateNovel.id}`);
    } catch (error) {
      alert(error);
    }
  };

  const [isClickPre, setIsClickPre] = useState(false);
  const [isClickDay, setIsClickDay] = useState(false);
  const [isDay, setIsDay] = useState([""]);

  const onClickPreButton = () => {
    setIsClickPre(true);
    setIsClickDay(false);
    setIsDay([""]);
  };

  const onClickDayButton = () => {
    setIsClickPre(false);
    setIsClickDay(true);
  };

  const onClickDayDiv = (el: any) => () => {
    setIsDay(el);
  };

  const Day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <NovelWritePresenter
      Day={Day}
      onClickPreButton={onClickPreButton}
      onClickDayButton={onClickDayButton}
      onClickDayDiv={onClickDayDiv}
      isDay={isDay}
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
      // edit
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      editData={props.editData}
    />
  );
}
