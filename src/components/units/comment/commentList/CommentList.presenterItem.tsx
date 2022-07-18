import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import NestedCommentListContainer from "../../nestedComment/list/NestedCommentList.container";
import NestedCommentWrite from "../../nestedComment/write/NestedCommentWrite.container";
import CommentWriteContainer from "../commentWrite/CommentWrite.container";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
import * as S from "./CommentList.styles";

export default function CommentListPresenterItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  // const [isAnswer, setIsAnswer] = useState(false);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [isNested, setIsNested] = useState(false);
  const [mention, setMention] = useState("");

  const onWriteMention = (nickname) => () => {
    const at = "@";
    const space = " ";
    setMention(at.concat(nickname).concat(space));
    setIsNested(true);
  };
  // const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  // const onClickAnswer = () => {
  //   setIsAnswer(true);
  // };

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          CommentID: props.el?.id,
        },

        refetchQueries: [
          {
            query: FETCH_COMMENTS,
          },
        ],
      });
      alert("질문이 삭제되었습니다");
    } catch (error) {
      alert(error.message);
    }
    console.log("댓글삭제", event);
  };

  return (
    <>
      <S.Wrapper>
        <S.WrapperUserInfo>
          <S.WrapBestIcon>
            {/* <S.BestComment>Best</S.BestComment> */}
          </S.WrapBestIcon>
          <S.WrapInfo>
            <S.ProfileIcon src="/comment/profile_icon.png" />
            <S.WrapCommentInfo>
              {/* <S.Comment>너무 재미있아요!!! 최고최고</S.Comment> */}
              <S.Comment>{props.el?.contents}</S.Comment>
              {/* <S.Comment>{props.el?.comments?.contents}</S.Comment> */}

              <S.WrapUserInfo>
                {/* <S.Name>Name</S.Name> */}
                <S.Name>{props.el?.user?.nickName}</S.Name>

                {/* <S.Date>2022.07.04</S.Date> */}
                <S.Date>{getDate(props.el?.createAt)}</S.Date>

                <S.UpIcon
                  src="/comment/thumb_up.png"
                  onClick={props.onClickLikeComment}
                />
                {/* <S.UpCount>325</S.UpCount> */}
                <S.UpCount>{props.data?.fetchComments.likeCount}</S.UpCount>
              </S.WrapUserInfo>
            </S.WrapCommentInfo>
            <S.WrapIcon>
              <S.EditIcon src="/comment/create.png" onClick={onClickUpdate} />
              <S.DeleteIcon src="/comment/Trash.png" onClick={onClickDelete} />
              {/* <S.AnswerIcon
                src="/comment/insert_comment.png"
                onClick={onClickAnswer}
              /> */}
              <S.AnswerIcon
                src="/comment/insert_comment.png"
                onClick={onWriteMention}
              />
            </S.WrapIcon>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {isEdit && (
          <CommentWriteContainer
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        )}
        {isNested && (
          <NestedCommentWrite
            // isAnswer={true}
            // setIsAnswer={setIsAnswer}
            isNested={true}
            el={props.el}
            mention={mention}
            setIsNested={setIsNested}
          />
        )}
        <NestedCommentListContainer el={props.el.id} />
        {/* <AnswerListPresenter el={props.el} /> */}
      </S.FooterWrapper>
    </>
  );
}
