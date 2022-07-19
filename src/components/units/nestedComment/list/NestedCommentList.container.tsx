import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_COMMENT } from "../../comment/commentList/CommentList.queries";
import { FETCH_COMMENTS } from "../write/NestedCommentWrite.queries";
import NestedCommentListPresenter from "./NestedCommentList.presenter";
import { FETCH_NESTED_COMMENTS } from "./NestedCommentList.queries";

export default function NestedCommentListContainer(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_NESTED_COMMENTS, {
    variables: { boardID: router.query._id },
  });
  console.log("fetchNestedComment", data);

  // 삭제
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const DeleteNestedComment = async () => {
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
      alert("질문이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {data?.fetchCommentsFromBoard.map((el) => (
        <NestedCommentListPresenter
          key={el.id}
          el={el}
          DeleteNestedComment={DeleteNestedComment}
        />
      ))}
    </>
  );
}
