import React from "react";
import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

import * as S from "./FreeBoardWrite.styles";
import { IFreeBoardWritePresenterProps } from "./FreeBoardWrite.types";
import Button01 from "../../../commons/buttons/01";
export default function FreeBoardWritePresenter(
  props: IFreeBoardWritePresenterProps
) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.MainTitle>자유게시판</S.MainTitle>
        <S.TitleLine></S.TitleLine>

        <S.SubTitle>{props.isEdit ? "수정하기" : "글쓰기"}</S.SubTitle>
      </S.RowWrap>
      <S.SubTitle>제목</S.SubTitle>
      <S.InputTitle
        placeholder="제목을 입력해주세요"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      ></S.InputTitle>
      <S.SubTitle>내용</S.SubTitle>
      <S.InputContents
        placeholder="내용을 입력하세요"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      ></S.InputContents>
      <S.SubTitle>사진첨부</S.SubTitle>
      <S.UploadBox>
        {props.fileUrls.map((el: string, index: number) => (
          <Uploads01
            key={uuidv4()}
            fileUrl={el}
            index={index}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}
      </S.UploadBox>
      <S.ButtonWrapper>
        <Button02 title="취소" onClick={props.onClickMoveToList} />
        <S.Margin>
          <Button01
            title={props.isEdit ? "수정" : "등록"}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          />
        </S.Margin>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
