import Button01 from "../../../commons/buttons/01";
import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./NoticeWrite.styles";

export default function NoticeWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.MainTitle>이벤트</S.MainTitle>
        <S.TitleLine></S.TitleLine>
      </S.RowWrap>
      <S.SubTitle>제목</S.SubTitle>
      <S.InputTitle placeholder="제목을 입력해주세요"></S.InputTitle>
      <S.SubTitle>내용</S.SubTitle>
      <S.InputContents placeholder="내용을 입력하세요"></S.InputContents>
      <S.SubTitle>사진첨부</S.SubTitle>
      <S.UploadBox>
        {/* {props.fileUrls.map((el: any, index: any) => (
        <Uploads01
          setFileUrls={props.setFileUrls}
          fileUrls={props.fileUrls}
          key={uuidv4()}
          index={index}
          files={props.files}
          setFiles={props.setFiles}
          fileUrl={el}
          onChangeFileUrls={props.onChangeFileUrls}
        />
      ))} */}
        <Uploads01 />
      </S.UploadBox>
      <S.ButtonWrapper>
        <Button02 onClick={props.onClickList} title="취소" />
        <Button01 title="등록" />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
