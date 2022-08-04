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
  useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });

  return (
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
