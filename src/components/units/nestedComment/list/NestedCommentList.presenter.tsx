import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { DELETE_COMMENT } from "../../comment/commentList/CommentList.queries";
import NestedCommentWritePresenter from "../write/NestedCommentWrite.presenter";
import { FETCH_BOARD } from "./NestedCommentList.queries";
import * as S from "./NestedCommentList.styles";
import { INestedCommentListPresenterProps } from "./NestedCommentList.types";
export default function NestedCommentListPresenter(
  props: INestedCommentListPresenterProps
) {
  const router = useRouter();
  useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });

  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdateNestedReply = () => {
    setIsEdit(true);
  };

  // 삭제
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const DeleteNestedComment = async () => {
    try {
      await deleteComment({
        variables: {
          CommentID: props.answerEL?.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardID: router.query._id },
          },
        ],
      });
      Modal.success({ content: "대댓글이 삭제되었습니다." });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Arrow>↪</S.Arrow>
        <S.WrapperUserInfo>
          <S.WrapBestIcon>
            {/* <S.BestComment>Best</S.BestComment> */}
          </S.WrapBestIcon>
          <S.WrapInfo>
            <S.ProfileIcon src="/comment/Group 473.png" />
            <S.WrapCommentInfo>
              {/* <S.Comment>너무 재미있아요!!! 최고최고</S.Comment> */}
              {/* <S.Comment>{props.el?.contents}</S.Comment> */}
              {/* <S.Comment>
                {data.fetchBoard.comments[0].children[0].contents}
              </S.Comment> */}
              <S.Comment>{props.answerEL?.contents}</S.Comment>

              <S.WrapUserInfo>
                {/* <S.Name>Name</S.Name> */}
                <S.Name>{props.el?.user?.nickName}</S.Name>

                {/* <S.Date>2022.07.04</S.Date> */}
                <S.Date>{getDate(props.el?.createAt)}</S.Date>

                {/* <S.UpIcon
                  src="/comment/thumb_up.png"
                  onClick={props.onClickLikeComment}
                /> */}
                {/* <S.UpCount>325</S.UpCount> */}
                {/* <S.UpCount>{props.data?.fetchComments.likeCount}</S.UpCount> */}
              </S.WrapUserInfo>
            </S.WrapCommentInfo>
            <S.WrapIcon>
              <S.EditIcon
                src="/comment/create.png"
                onClick={onClickUpdateNestedReply}
              />
              <S.DeleteIcon
                src="/comment/Trash.png"
                onClick={DeleteNestedComment}
              />
              {/* <S.AnswerIcon src="/comment/insert_comment.png" /> */}
            </S.WrapIcon>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {isEdit && (
          <NestedCommentWritePresenter
            isEdit={true}
            setIsEdit={setIsEdit}
            WriteNestedComment={undefined}
            contents={undefined}
            el={props.el}
            onChangeContents={undefined}
            isHidden={undefined}
            onClickUpdateComment={undefined}
            onClickUpdateNestedComment={undefined}
            answerEL={props.answerEL}
          />
        )}
      </S.FooterWrapper>
    </>
  );
}
