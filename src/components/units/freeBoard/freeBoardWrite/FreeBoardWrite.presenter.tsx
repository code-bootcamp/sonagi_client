import React from "react";
import Button01 from "../../../commons/buttons/01";
import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./FreeBoardWrite.styles";
export default function FreeBoardWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.MainTitle>자유게시판</S.MainTitle>
        <S.TitleLine></S.TitleLine>
        <S.SubTitle>글쓰기</S.SubTitle>
      </S.RowWrap>
      <S.SubTitle>제목</S.SubTitle>
      <S.InputTitle
        placeholder="제목을 입력해주세요"
        onChange={props.onChangeTitle}
      ></S.InputTitle>
      <S.SubTitle>내용</S.SubTitle>
      <S.InputContents
        placeholder="내용을 입력하세요"
        onChange={props.onChangeContents}
      ></S.InputContents>
      <S.SubTitle>사진첨부</S.SubTitle>
      <S.UploadBox>
        <Uploads01 />
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
      </S.UploadBox>
      <S.ButtonWrapper>
        <Button02 title="취소" />
        <S.Margin>
          <Button01 title="등록" onClick={props.onClickSubmit} />
        </S.Margin>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
