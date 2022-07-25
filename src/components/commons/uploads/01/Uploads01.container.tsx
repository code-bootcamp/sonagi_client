// import { checkFileValidation } from "./Uploads01.fileValidation";
// import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { useMutation } from "@apollo/client";
import { checkFileValidation } from "./Uploads01.fileValidation";
import { Modal } from "antd";

export default function Uploads01(props: IUploads01Props) {
  // const [imageUrl, setImageUrl] = useState("");
  // 사진 올리기
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    if (!file) return;
    console.log(file);
    // props.onChangeFileUrls(file, props.index);

    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // fileReader.onload = (data) => {
    //   if (typeof data.target?.result === "string") {
    //     console.log(data.target?.result);
    //     setImageUrl(data.target?.result);
    //   }
    // };

    try {
      const result = await uploadFile({
        variables: {
          FILE_TYPE: "NOVEL",
          files: [file],
        },
      });
      // console.log(result);
      // setFileUrl(result.data.uploadFile[0].url);
      // console.log(result.data.uploadFile[0].url);
      props.onChangeFileUrls(result.data.uploadFile[0].url, props.index);
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}

      // imageUrl={imageUrl}
      // fileUrl={fileUrl}
    />
  );
}
