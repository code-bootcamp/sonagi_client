import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import NestedCommentListContainer from "../../nestedComment/list/NestedCommentList.container";
import NestedCommentWrite from "../../nestedComment/write/NestedCommentWrite.container";
import CommentWriteContainer from "../commentWrite/CommentWrite.container";
import { DELETE_COMMENT, FETCH_BOARD } from "./CommentList.queries";
import * as S from "./CommentList.styles";
import { ICommentListPresenterItemProps } from "./CommentList.types";

export default function CommentListPresenterItem(
  props: ICommentListPresenterItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  // const [isAnswer, setIsAnswer] = useState(false);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [isNested, setIsNested] = useState(false);
  const [isNestedExist, setIsNestedExist] = useState(false);
  // const [mention, setMention] = useState("");

  const onWriteMention = () => {
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
            query: FETCH_BOARD,
            variables: {
              boardID: router.query._id,
            },
          },
        ],
      });
      alert("질문이 삭제되었습니다");
    } catch (error) {
      alert(error);
    }
    console.log("댓글삭제", event);
  };

  useEffect(() => {
    const active = () => {
      if (props.data?.fetchBoard?.comments[0].length === 1) {
        setIsNestedExist(true);
      } else {
        setIsNestedExist(false);
      }
    };
    active();
  }, []);

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
              <S.EditIcon
                title="수정하기"
                src="/comment/create.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                title="삭제하기"
                src="/comment/Trash.png"
                onClick={onClickDelete}
              />
              {/* <S.AnswerIcon
                src="/comment/insert_comment.png"
                onClick={onClickAnswer}
              /> */}
              <S.AnswerIcon
                title="대댓글 달기"
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
            isAnswerEdit={undefined}
            isAnswer={undefined}
          />
        )}
        {isNested && (
          <>
            <NestedCommentWrite
              isNested={true}
              el={props.el}
              setIsNested={setIsNested}
            />
          </>
        )}
        {isNestedExist && (
          <>
            <NestedCommentListContainer />
          </>
        )}
        {/* <NestedCommentListContainer /> */}

        {/* <NestedCommentListContainer el={props.el.children.id} /> */}
        {/* <AnswerListPresenter el={props.el} /> */}
      </S.FooterWrapper>
    </>
  );
}
