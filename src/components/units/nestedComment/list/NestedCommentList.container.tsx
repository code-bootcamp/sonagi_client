import { useMutation, useQuery } from "@apollo/client";
import { DELETE_COMMENT } from "../../comment/commentList/CommentList.queries";
import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
} from "../write/NestedCommentWrite.queries";
import NestedCommentListPresenter from "./NestedCommentList.presenter";

export default function NestedCommentListContainer(props) {
  const { data } = useQuery(FETCH_COMMENT);
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
      {data?.fetchComment.map((el) => (
        <NestedCommentListPresenter
          key={el.id}
          el={el}
          DeleteNestedComment={DeleteNestedComment}
        />
      ))}
    </>
  );
}
