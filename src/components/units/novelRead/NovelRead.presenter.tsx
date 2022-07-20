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
        />
      ) : (
        <S.Wrapper onContextMenu={props.onClickRight}>
          <S.HeadWrapper setDisplay={props.setDisplay}>
            <S.LeftWrapper>
              <S.LogoImg
                onClick={props.onClickMoveToMain}
                src="/header/logo.png"
              />
              <S.ArrowLeft src="/novelRead/arrowleft.png" />
            </S.LeftWrapper>
            <S.TitleWrapper>
              <S.Title>{props.novelData?.fetchNovelDetail.title}</S.Title>
              <S.SubTitle>
                {props.readData?.fetchEpisodeDetail.index} 화 :{" "}
                {props.readData?.fetchEpisodeDetail.title}
              </S.SubTitle>
            </S.TitleWrapper>
            <S.RightWrapper>
              <S.SettingImg src="/novelRead/heart.png" />
              <S.SettingImg
                src="/novelRead/bookmark.png"
                onClick={props.onClickBookMark}
              />
              <S.SettingImg src="/novelRead/setting.png" />
            </S.RightWrapper>
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
                <S.Content>FontSize</S.Content>
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
          </S.FooterWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
