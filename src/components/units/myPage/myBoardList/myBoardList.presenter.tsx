import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import HamburgerPage from "../../../commons/hamburger";
import * as S from "./myBoardList.styles";
import { IMyBoardListPresenterProps } from "./myBoardList.types";
export default function MyBoardListPresenter(
  props: IMyBoardListPresenterProps
) {
  return (
    <S.DIV>
      <S.Wrapper>
        <S.HamburgerWrapper>
          <HamburgerPage />
        </S.HamburgerWrapper>
        <S.WrapperHeader>
          <S.MenuWrapper>
            <S.ProductMenu
              onClick={props.onClickMyProductList}
              isPickList={props.isBoardList}
            >
              내가 쓴 게시글
            </S.ProductMenu>
            <S.PickMenu
              onClick={props.onClickMyBordList}
              isPickList={props.isBoardList}
            >
              내가 쓴 댓글
            </S.PickMenu>
          </S.MenuWrapper>
        </S.WrapperHeader>
        {!props.isBoardList ? (
          <S.WrapperBody>
            <S.RowName>
              <S.ColumnName>번호</S.ColumnName>
              <S.ColumnTitle>제목</S.ColumnTitle>
              <S.ColumnContents>내용</S.ColumnContents>
              <S.CreateAt>날짜</S.CreateAt>
            </S.RowName>
            {props.BoardData?.fetchBoards.map(
              (
                el: {
                  id: Key | null | undefined;
                  title:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  contents:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  createAt: any;
                },
                index: number
              ) => (
                <S.Row key={el.id} onClick={props.onClickMoveToDetail(el)}>
                  <S.Column>{index + 1}</S.Column>
                  <S.ColumnCommentTitle>{el.title}</S.ColumnCommentTitle>
                  <S.ColumnInnerContents>{el.contents}</S.ColumnInnerContents>
                  <S.CreateAtColumn>{getDate(el.createAt)}</S.CreateAtColumn>
                </S.Row>
              )
            )}
          </S.WrapperBody>
        ) : (
          <S.WrapperBody>
            <S.RowName>
              <S.ColumnName>번호</S.ColumnName>
              <S.CommentContents>댓글내용</S.CommentContents>
              <S.date>날짜</S.date>
            </S.RowName>
            {props.CommentData?.fetchComments.map(
              (
                el: {
                  id: Key | null | undefined;
                  contents:
                    | boolean
                    | ReactChild
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  createAt: any;
                },
                index: number
              ) => (
                <S.CommentsRow key={el.id}>
                  <S.Column>{index + 1}</S.Column>
                  <S.ColumnContentss>{el.contents}</S.ColumnContentss>
                  <S.ColumnDate>{getDate(el.createAt)}</S.ColumnDate>
                </S.CommentsRow>
              )
            )}
          </S.WrapperBody>
        )}
      </S.Wrapper>
    </S.DIV>
  );
}
