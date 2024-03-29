import * as S from "./NestedCommentWrite.styles";
import { INestedCommentWritePresenterProps } from "./NestedCommentWrite.types";
export default function NestedCommentWritePresenter(
  props: INestedCommentWritePresenterProps
) {
  return (
    <>
      {props.isHidden ? (
        <></>
      ) : (
        <>
          <S.Wrapper>
            <S.WrapTitle>
              <S.CommentIcon src="/comment/insert_comment.png" />
              <S.CommentTitle>
                {props.isEdit ? "대댓글 수정" : "대댓글 등록"}
              </S.CommentTitle>
            </S.WrapTitle>
            <S.WrapContents>
              <S.ContentsInput
                type="textArea"
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.onChangeContents}
                defaultValue={props.answerEL?.contents}
                maxLength={100}
              />
              <S.Wraplength>
                <S.Length>{props.contents?.length}/100</S.Length>

                <S.CommentButton
                  onClick={
                    props.isEdit
                      ? props.onClickUpdateNestedComment
                      : props.WriteNestedComment
                  }
                >
                  {props.isEdit ? "수정하기" : "등록하기"}
                </S.CommentButton>
              </S.Wraplength>
            </S.WrapContents>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
