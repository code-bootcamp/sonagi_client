import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/01";
import * as S from "./FreeBoardDetail.styles";
import { IFreeBoardDetailPresenterProps } from "./FreeBoardDetail.types";
export default function FreeBoardDetailPresenter(
  props: IFreeBoardDetailPresenterProps
) {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.MainTitle>자유게시판</S.MainTitle>
        {/* <S.TitleLine></S.TitleLine> */}
      </S.RowWrap>
      <S.WriterWrapper>
        {/* <S.ReportIcon src="/freeBoard/report.png" /> */}
      </S.WriterWrapper>
      <S.Flex>
        <S.Contents>
          <S.Flexs>
            <S.Column>
              <S.Avatar src="/freeBoard/avatar.png" />
              <S.Writer>{props.data?.fetchBoard.user?.nickName}</S.Writer>
            </S.Column>
            <S.Columns>
              <S.DateWrapper>
                <S.Date>{getDate(props.data?.fetchBoard?.createAt)}</S.Date>
              </S.DateWrapper>
              <S.TitleWrap>
                <S.Title>{props.data?.fetchBoard?.title}</S.Title>
              </S.TitleWrap>
              <S.ContentsWrap>
                <S.InnerContents>
                  {props.data?.fetchBoard.contents}
                </S.InnerContents>
              </S.ContentsWrap>
            </S.Columns>
          </S.Flexs>

          <S.BottomWrapper>
            <S.ButtonWrapper>
              <Button01
                title="목록으로"
                onClick={props.onClickMoveToBoardList}
              />
              <Button01 title="수정하기" onClick={props.onClickMoveToEdit} />
              <Button01 title="삭제하기" onClick={props.onClickDelete} />
            </S.ButtonWrapper>
          </S.BottomWrapper>
        </S.Contents>

        <S.FreeBoardImg
          src={
            props.data?.fetchBoard.files[0]?.url
              ? `https://storage.googleapis.com/code-camp-main-project/${props.data?.fetchBoard.files[0].url}`
              : "/freeBoard/freeboard.png"
          }
        />
      </S.Flex>
    </S.Wrapper>
  );
}
