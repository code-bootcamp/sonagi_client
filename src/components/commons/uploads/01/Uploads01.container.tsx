// import { checkFileValidation } from "./Uploads01.fileValidation";
// import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useMutation } from "@apollo/client";
import { checkFileValidation } from "./Uploads01.fileValidation";

export default function Uploads01(props: IUploads01Props) {
  // 사진 올리기
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    if (!file) return;
    // console.log(file);
    // props.onChangeFileUrls(file, props.index);

    try {
      const result = await uploadFile({
        variables: {
          FILE_TYPE: "NOVEL",
          files: [file],
        },
      });
      console.log(result);
      // setFileUrl(result.data.uploadFile[0].url);
      console.log(result.data.uploadFile[0].url);

      props.onChangeFileUrls(result.data.uploadFile[0].url, props.index);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrls={props.fileUrls}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      // fileUrl={fileUrl}
    />
  );
}
