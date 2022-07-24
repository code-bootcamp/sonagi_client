import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";

import DetailCommentWriteContainer from "../commentWrite/CommentWrite.container";
import {
  DELETE_NOVEL_REVIEW,
  FETCH_LOGIN_USER,
  FETCH_NOVEL_REVIEW_PAGE,
} from "./CommentList.queries";
import * as S from "./CommentList.styles";
import { IDetailCommentListPresenterItemProps } from "./CommentList.types";

export default function DetailCommentListPresenterItem(
  props: IDetailCommentListPresenterItemProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteNovelReview] = useMutation(DELETE_NOVEL_REVIEW);
  const { data: Logindata } = useQuery(FETCH_LOGIN_USER);
  const router = useRouter();

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await deleteNovelReview({
        variables: {
          ReviewID: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_NOVEL_REVIEW_PAGE,
            variables: { novelID: router.query._id },
          },
        ],
      });
      Modal.success({ content: "리뷰가 삭제되었습니다" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const MyId = props.el?.user.id.includes(Logindata?.fetchLoginUser.id);

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
                {MyId && (
                  <>
                    <S.EditIcon onClick={onClickUpdate}>수정하기</S.EditIcon>
                    <S.DeleteIcon id={props.el?.id} onClick={onClickDelete}>
                      삭제하기
                    </S.DeleteIcon>
                  </>
                )}
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
