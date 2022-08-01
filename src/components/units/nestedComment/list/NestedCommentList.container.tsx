import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Key } from "react";
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

  console.log("%%대댓글데이터를조회해보자%%", data?.fetchBoard.comments);

  // // 삭제
  // const [deleteComment] = useMutation(DELETE_COMMENT);
  // const DeleteNestedComment = async () => {
  //   try {
  //     await deleteComment({
  //       variables: {
  //         CommentID: data?.fetchBoard.comments[0].children[0].id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD,
  //           variables: { boardID: router.query._id },
  //         },
  //       ],
  //     });
  //     // alert("대댓글이 삭제되었습니다.");
  //     Modal.success({ content: "대댓글이 삭제되었습니다." });
  //   } catch (error: any) {
  //     // alert(`대댓글 삭제에 실패했습니다. ${error.message}`);
  //     Modal.error({ content: error.message });
  //   }
  // };

  console.log("this is p el", props.el);
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

    // 이전
    <>
      {props.el.children.map((answerEL: { id: Key | null | undefined }) => (
        <NestedCommentListPresenter
          key={answerEL.id}
          answerEL={answerEL}
          // DeleteNestedComment={DeleteNestedComment}
          onClickLikeComment={undefined}
          el={props.el}
          isEdit={false}
          DeleteNestedComment={undefined}
        />
      ))}
    </>
  );
}

// <>
// {data?.fetchBoard.comments.map((el) =>
//   el.children.map((answerEL: { id: Key | null | undefined }) => (
//     <NestedCommentListPresenter
//       key={answerEL.id}
//       el={props.el}
//       answerEL={answerEL}
//       DeleteNestedComment={DeleteNestedComment}
//       onClickLikeComment={undefined}
//     />
//   ))
// )}
// </>
