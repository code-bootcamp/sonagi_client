import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_COMMENT } from "../../comment/commentList/CommentList.queries";
import NestedCommentListPresenter from "./NestedCommentList.presenter";
import { FETCH_BOARD } from "./NestedCommentList.queries";
import { INestedCommentListContainerProps } from "./NestedCommentList.types";

export default function NestedCommentListContainer(
  props: INestedCommentListContainerProps
) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });

  console.log("대댓글데이터를조회해보자11", data?.fetchBoard.comments);

  // 삭제
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const DeleteNestedComment = async () => {
    try {
      await deleteComment({
        variables: {
          CommentID: data?.fetchBoard.comments[0].children[0].id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardID: router.query._id },
          },
        ],
      });
      alert("대댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    // <>
    //   {data?.fetchCommentsFromBoard.map((el) => (
    //     <NestedCommentListPresenter
    //       key={el.id}
    //       el={el}
    //       DeleteNestedComment={DeleteNestedComment}
    //     />
    //   ))}
    // </>
    // data?.fetchBoard.comments[0].children[0].contents

    <>
      {data?.fetchBoard.comments.map((el) =>
        el.children.map((answerEL) => (
          <NestedCommentListPresenter
            key={answerEL.id}
            el={props.el}
            answerEL={answerEL}
            DeleteNestedComment={DeleteNestedComment}
            onClickLikeComment={undefined}
          />
        ))
      )}
    </>
  );
}
