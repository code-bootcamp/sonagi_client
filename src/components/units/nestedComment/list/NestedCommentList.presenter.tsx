import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./NestedCommentList.queries";
import * as S from "./NestedCommentList.styles";
export default function NestedCommentListPresenter(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  // console.log(
  //   "대댓글데이터를조회해보자",
  //   data?.fetchBoard.comments[0].children[0].contents
  // );
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
              {/* <S.Comment>{props.el?.contents}</S.Comment> */}
              <S.Comment>
                {data.fetchBoard.comments[0].children[0].contents}
              </S.Comment>

              <S.WrapUserInfo>
                {/* <S.Name>Name</S.Name> */}
                <S.Name>{props.el?.user?.nickName}</S.Name>

                {/* <S.Date>2022.07.04</S.Date> */}
                <S.Date>{props.el?.createAt}</S.Date>

                <S.UpIcon
                  src="/comment/thumb_up.png"
                  onClick={props.onClickLikeComment}
                />
                {/* <S.UpCount>325</S.UpCount> */}
                {/* <S.UpCount>{props.data?.fetchComments.likeCount}</S.UpCount> */}
              </S.WrapUserInfo>
            </S.WrapCommentInfo>
            <S.WrapIcon>
              <S.EditIcon src="/comment/create.png" />
              <S.DeleteIcon src="/comment/Trash.png" />
              <S.AnswerIcon src="/comment/insert_comment.png" />
            </S.WrapIcon>
          </S.WrapInfo>
        </S.WrapperUserInfo>
      </S.Wrapper>
      <S.FooterWrapper>
        {/* <AnswerListPresenter el={props.el} /> */}
      </S.FooterWrapper>
    </>
  );
}
