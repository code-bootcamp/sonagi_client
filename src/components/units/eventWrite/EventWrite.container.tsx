import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import EventWritePresenter from "./EventWrite.presenter";
import * as yup from "yup";
import { CREATE_EVENT } from "./EventWrite.queries";
import { useForm } from "react-hook-form";

const schema = yup.object({
  title: yup.string(),
  contents: yup.string(),
  fileURLs: yup.array().required("표지 이미지를 등록해주세요!"),
});

export default function EventWriteContainer() {
  const router = useRouter();

  const [createEvent] = useMutation(CREATE_EVENT);

  const [fileUrls, setFileUrls] = useState([""]);

  const onClickList = () => {
    router.push("/event");
  };

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    // console.log(newFileUrls);

    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  const onClickEventWrite = async (data) => {
    try {
      const result = await createEvent({
        variables: {
          createEventInput: {
            title: data.title,
            contents: data.contents,
            isEvent: true,
            startAt: new Date(),
            endAt: new Date(),
            fileURLs: data.fileURLs,
          },
        },
      });
      console.log("하하하", result);
      alert("성공");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <EventWritePresenter
      onClickList={onClickList}
      onClickEventWrite={onClickEventWrite}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
