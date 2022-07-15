import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import CommentWriteContainer from "../commentWrite/CommentWrite.container";
import { DELETE_COMMENT } from "./CommentList.queries";
import * as S from "./CommentList.styles";

export default function CommentListPresenterItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  // const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async (event) => {
    console.log("이벤트", event);
    try {
      await deleteComment({
        variables: {
          CommentID: props.el?.id,
        },

        // refetchQueries: [
        //   {
        //     query: FETCH_COMMENTS_ALL,
        //   },
        // ],
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
              <S.Comment>{props.el?.comments?.contents}</S.Comment>

              <S.WrapUserInfo>
                {/* <S.Name>Name</S.Name> */}
                <S.Name>{props.el?.user?.nickName}</S.Name>

                {/* <S.Date>2022.07.04</S.Date> */}
                <S.Date>{getDate(props.el?.createAt)}</S.Date>

                <S.UpIcon src="/comment/thumb_up.png" />
                <S.UpCount>325</S.UpCount>
              </S.WrapUserInfo>
            </S.WrapCommentInfo>
            <S.WrapIcon>
              <S.EditIcon src="/comment/create.png" onClick={onClickUpdate} />
              <S.DeleteIcon src="/comment/Trash.png" onClick={onClickDelete} />
              <S.AnswerIcon src="/comment/insert_comment.png" />
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
      </S.FooterWrapper>
    </>
  );
}
