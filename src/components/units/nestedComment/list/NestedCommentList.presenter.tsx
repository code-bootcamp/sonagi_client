import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import NestedCommentWritePresenter from "../write/NestedCommentWrite.presenter";
import { FETCH_BOARD } from "./NestedCommentList.queries";
import * as S from "./NestedCommentList.styles";
import { INestedCommentListPresenterProps } from "./NestedCommentList.types";
export default function NestedCommentListPresenter(
  props: INestedCommentListPresenterProps
) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  // console.log(
  //   "대댓글데이터를조회해보자",
  //   data?.fetchBoard?.comments[0]?.children[0]?.contents
  // );
  console.log("대댓글데이터를조회해보자", data);

  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdateNestedReply = () => {
    setIsEdit(true);
  };

  console.log("this is a el", props.answerEL);

  return (
    <>
      <S.Wrapper>
        <div>↪</div>
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

                <S.UpIcon
                  src="/comment/thumb_up.png"
                  onClick={props.onClickLikeComment}
                />
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
                onClick={props.DeleteNestedComment}
              />
              {/* <S.AnswerIcon src="/comment/insert_comment.png" /> */}
            </S.WrapIcon>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {isEdit && (
          <NestedCommentWritePresenter isEdit={true} setIsEdit={setIsEdit} />
        )}
      </S.FooterWrapper>
    </>
  );
}
