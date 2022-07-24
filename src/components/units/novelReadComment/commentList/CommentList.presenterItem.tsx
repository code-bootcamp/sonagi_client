import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getDateDay } from "../../../../commons/libraries/utils";
import ReadCommentWriteContainer from "../commentWrite/CommentWrite.container";
import {
  DELETE_EPISODE_REVIEW,
  FETCH_EPISODE_REVIEW_PAGE,
} from "./CommentList.queries";
import * as S from "./CommentList.styles";
import { IReadCommentListPresenterItemProps } from "./CommentList.types";

export default function ReadCommentListPresenterItem(
  props: IReadCommentListPresenterItemProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteEpisodeReview] = useMutation(DELETE_EPISODE_REVIEW);
  const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    console.log("이벤트", event.currentTarget.id);
    try {
      await deleteEpisodeReview({
        variables: {
          ReviewID: event.currentTarget.id,
        },

        refetchQueries: [
          {
            query: FETCH_EPISODE_REVIEW_PAGE,
            variables: { episodeID: router.query.volume_id, page: 1 },
          },
        ],
      });
      Modal.success({ content: "리뷰가 삭제되었습니다" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  console.log(props.el);

  return (
    <>
      <S.Wrapper>
        <S.WrapperUserInfo>
          <S.WrapBestIcon>
            {/* <S.BestComment>Best</S.BestComment> */}
          </S.WrapBestIcon>
          <S.WrapInfo>
            <S.WrapCommentInfo>
              <S.WrapUserInfo>
                {/* <S.Star value={props.el?.star} disabled /> */}
                <S.Name>{props.el?.user?.nickName}</S.Name>
                <S.WrapDate>
                  <S.Date>{getDateDay(props.el?.createAt)}</S.Date>
                </S.WrapDate>
              </S.WrapUserInfo>
              <S.WrapComment>
                <S.Comment>{props.el?.contents}</S.Comment>
              </S.WrapComment>
            </S.WrapCommentInfo>
            <S.WrapIconUP>
              <S.WrapIcon>
                <S.EditIcon src="/comment/create.png" onClick={onClickUpdate} />
                <S.DeleteIcon
                  id={props.el?.id}
                  src="/comment/Trash.png"
                  onClick={onClickDelete}
                />
                <S.AnswerIcon src="/comment/insert_comment.png" />
              </S.WrapIcon>
              <S.WrapUp>
                <S.UpIcon src="/comment/thumb_up.png" />
                <S.UpCount>{props.el?.likeCount}</S.UpCount>
              </S.WrapUp>
            </S.WrapIconUP>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {isEdit && (
          <ReadCommentWriteContainer
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
            setIsGoCommnet={function (value: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </S.FooterWrapper>
    </>
  );
}
