import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { useState } from "react";
import { getDateDay } from "../../../../commons/libraries/utils";
import ReadCommentWriteContainer from "../commentWrite/CommentWrite.container";
import {
  DELETE_EPISODE_REVIEW,
  FETCH_EPISODE_REVIEW_PAGE,
} from "./CommentList.queries";
import * as S from "./CommentList.styles";

export default function ReadCommentListPresenterItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteEpisodeReview] = useMutation(DELETE_EPISODE_REVIEW);
  const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async (event) => {
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
      alert("리뷰가 삭제되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };

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
          />
        )}
      </S.FooterWrapper>
    </>
  );
}
