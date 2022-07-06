import * as S from "./EventWrite.styles";

export default function EventWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.MainTitle>이벤트</S.MainTitle>
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
        <S.UploadButton>
          <div>+</div>
        </S.UploadButton>
        <S.UploadButton>
          <div>+</div>
        </S.UploadButton>
        <S.UploadButton>
          <div>+</div>
        </S.UploadButton>
      </S.UploadBox>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickList}>취소</S.Button>
        <S.Button>등록</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
