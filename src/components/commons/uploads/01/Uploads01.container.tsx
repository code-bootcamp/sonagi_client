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
  // const [url,setUrl] = useState

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    if (!file) return;
    console.log(file);

    try {
      const result = await uploadFile({
        variables: {
          FILE_TYPE: "NOVEL",
          files: [file],
        },
      });
      console.log(result.data.uploadFile[0].url);
      props.onChangeFileUrls(result.data.uploadFile[0].url, props.index);
    } catch (error) {
      alert(error.message);
    }
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // // readAsDataURL : 파일을 url로 만들어줌
    // fileReader.onload = (data) => {
    //   if (typeof data.target?.result === "string") {
    //     const tempUrls = [...props.fileUrls];
    //     tempUrls[props.index] = data.target?.result;
    //     props.setFileUrls(tempUrls);
    //     const tempFiles = [...props.files];
    //     tempFiles[props.index] = file;
    //     props.setFiles(tempFiles);
    //   }
    // };
    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    // } catch (error) {
    //   Modal.error({ content: error.message });
    // }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
