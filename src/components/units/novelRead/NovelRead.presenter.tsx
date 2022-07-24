import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import DOMPurify from "dompurify";
import ReadCommentListContainer from "../novelReadComment/commentList/CommentList.container";
import * as S from "./NovelRead.styles";
import { INovelReadPresenterProps } from "./NovelRead.types";

export default function NovelReadPresenter(props: INovelReadPresenterProps) {
  return (
    <>
      {props.commentClick ? (
        <ReadCommentListContainer
          setCommentClick={props.setCommentClick}
          commentClick={props.commentClick}
          setIsEdit={undefined}
          isEdit={undefined}
          el={undefined}
          setIsGoCommnet={undefined}
        />
      ) : (
        <S.Wrapper onContextMenu={props.onClickRight}>
          <S.HeadWrapper setDisplay={props.setDisplay}>
            <S.LeftWrapperTop>
              <S.LogoImg
                onClick={props.onClickMoveToMain}
                src="/header/logo.png"
              />
              <S.ArrowLeft src="/novelRead/arrowleft.png" />
            </S.LeftWrapperTop>
            <S.TitleWrapper>
              <S.Title>{props.novelData?.fetchNovelDetail.title}</S.Title>
              <S.SubTitle>
                {props.readData?.fetchEpisodeDetail.index} 화 :{" "}
                {props.readData?.fetchEpisodeDetail.title}
              </S.SubTitle>
            </S.TitleWrapper>
            <S.RightWrapperTop>
              <S.SettingImg
                onClick={props.onClickLike}
                src={
                  props.Heart
                    ? "/novelDetail/heart.png"
                    : "/novelRead/heart.png"
                }
              />
              <S.MarkImg
                src={
                  props.ismark
                    ? "/novelRead/bookmarkFill.png"
                    : "/novelRead/bookmark.png"
                }
                onClick={props.onClickBookMark}
              />
            </S.RightWrapperTop>
          </S.HeadWrapper>
          <S.BodyWrapper fontsize={props.size} onClick={props.onClickDisplay}>
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.readData?.fetchEpisodeDetail.contents
                  ),
                }}
              ></div>
            ) : (
              ""
            )}
          </S.BodyWrapper>
          <S.FooterWrapper setDisplay={props.setDisplay}>
            <S.CenterWrapperMobile>
              <S.FooterArrow src="/novelRead/footerArrowLeft.png" />
              <S.Content onClick={props.onClickMoveToPrevPage}>
                이전화
              </S.Content>
              <S.Content onClick={props.onClickMoveToNextPage}>
                다음화
              </S.Content>
              <S.FooterArrow src="/novelRead/footerArrowRight.png" />
            </S.CenterWrapperMobile>
            <S.Footer>
              <S.LeftWrapper onClick={props.onClickComment}>
                <S.Comment src="/novelRead/comment.png" />
                <S.CommentNumber>
                  {props.commentData?.fetchEpisodeReviewPage?.count}
                </S.CommentNumber>
              </S.LeftWrapper>
              <S.CenterWrapper>
                <S.FooterArrow src="/novelRead/footerArrowLeft.png" />
                <S.Content onClick={props.onClickMoveToPrevPage}>
                  이전화
                </S.Content>
                <S.Content onClick={props.onClickMoveToNextPage}>
                  다음화
                </S.Content>
                <S.FooterArrow src="/novelRead/footerArrowRight.png" />
              </S.CenterWrapper>
              <S.RightWrapper>
                <S.WrapFont>
                  <S.Content>글자크기</S.Content>
                  <PlusOutlined
                    style={{
                      fontSize: "20px",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                    onClick={props.onClickSizeUp}
                  />
                  <MinusOutlined
                    style={{ fontSize: "20px", paddingRight: "30px" }}
                    onClick={props.onClickSizeDown}
                  />
                </S.WrapFont>

                <S.Comment src="/novelRead/list.png" />
                <S.Content onClick={props.onClickMoveToList}>목록</S.Content>
              </S.RightWrapper>
            </S.Footer>
          </S.FooterWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
