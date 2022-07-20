import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import DetailCommentWriteContainer from "../commentWrite/CommentWrite.container";
import {
  DELETE_NOVEL_REVIEW,
  FETCH_NOVEL_REVIEW_PAGE,
} from "./CommentList.queries";
import * as S from "./CommentList.styles";
import { IDetailCommentListPresenterItemProps } from "./CommentList.types";

export default function DetailCommentListPresenterItem(
  props: IDetailCommentListPresenterItemProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteNovelReview] = useMutation(DELETE_NOVEL_REVIEW);
  const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    console.log("이벤트", event.currentTarget.id);
    try {
      await deleteNovelReview({
        variables: {
          ReviewID: event.currentTarget.id,
        },

        refetchQueries: [
          {
            query: FETCH_NOVEL_REVIEW_PAGE,
            variables: { novel: router.query._id },
          },
        ],
      });
      alert("리뷰가 삭제되었습니다");
    } catch (error: any) {
      alert(error.message);
    }
  };

  console.log("1", props.el);

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
                <S.Star value={props.el?.star} disabled />
                <S.Name>{props.el?.user?.nickName}</S.Name>
                <S.WrapDate>
                  <S.Date>{getDate(props.el?.createAt)}</S.Date>
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
                {/* <S.AnswerIcon src="/comment/insert_comment.png" /> */}
              </S.WrapIcon>
              {/* <S.WrapUp>
                <S.UpIcon src="/comment/thumb_up.png" />
                <S.UpCount>{props.el?.likeCount}</S.UpCount>
              </S.WrapUp> */}
            </S.WrapIconUP>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {isEdit && (
          <DetailCommentWriteContainer
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        )}
      </S.FooterWrapper>
    </>
  );
}
