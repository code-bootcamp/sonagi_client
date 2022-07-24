import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/01";
import Button02 from "../../../commons/buttons/02";
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
              <S.Writer>{props.BoardData?.fetchBoard.user?.nickName}</S.Writer>
            </S.Column>
            <S.Columns>
              <S.DateWrapper>
                <S.Date>
                  {getDate(props.BoardData?.fetchBoard?.createAt)}
                </S.Date>
              </S.DateWrapper>
              <S.TitleWrap>
                <S.Title>{props.BoardData?.fetchBoard?.title}</S.Title>
              </S.TitleWrap>
              <S.ContentsWrap>
                <S.InnerContents>
                  {props.BoardData?.fetchBoard.contents}
                </S.InnerContents>
              </S.ContentsWrap>
            </S.Columns>
          </S.Flexs>
          {props.BoardData?.fetchBoard.user.id ===
          props.UserData?.fetchLoginUser.id ? (
            <S.BottomWrapper>
              <S.ButtonWrapper>
                <Button02
                  title="목록으로"
                  onClick={props.onClickMoveToBoardList}
                />
                <Button02 title="수정하기" onClick={props.onClickMoveToEdit} />
                <Button01 title="삭제하기" onClick={props.onClickDelete} />
              </S.ButtonWrapper>
            </S.BottomWrapper>
          ) : (
            <S.BottomWrapper>
              <S.ButtonWrapper>
                <Button01
                  title="목록으로"
                  onClick={props.onClickMoveToBoardList}
                />
              </S.ButtonWrapper>
            </S.BottomWrapper>
          )}
        </S.Contents>
        <S.ImgWrap>
          <S.FreeBoardImg
            src={
              props.BoardData?.fetchBoard.files[0]?.url
                ? `https://storage.googleapis.com/code-camp-main-project/${props.BoardData?.fetchBoard.files[0].url}`
                : "/freeBoard/freeboard.png"
            }
          />
        </S.ImgWrap>
      </S.Flex>
    </S.Wrapper>
  );
}
