import * as S from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <S.UploadWrapper>
      {props.fileUrls ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/code-camp-main-project/${props?.fileUrls}`}
        />
      ) : (
        <>
          <S.UploadButton type="button" onClick={props.onClickUpload}>
            <S.Plus>+</S.Plus>
          </S.UploadButton>
        </>
      )}

      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.UploadWrapper>
  );
}
