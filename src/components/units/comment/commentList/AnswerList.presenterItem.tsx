// import { useMutation } from "@apollo/client";
// import { useState } from "react";
// import CommentWriteContainer from "../commentWrite/CommentWrite.container";
// import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
// import * as S from "./CommentList.styles";

// export default function AnswerListUIITEM(props) {
//   const [isAnswerEdit, setIsAnswerEdit] = useState(false);
//   const [deleteComment] = useMutation(DELETE_COMMENT);

//   const onClickUpdateAnswer = () => {
//     setIsAnswerEdit(true);
//   };

//   const onClickDeleteAnswer = async () => {
//     try {
//       const result = await deleteComment({
//         variables: {
//           CommentID: props.answerEl?._id,
//         },
//         refetchQueries: [
//           {
//             query: FETCH_COMMENTS,
//           },
//         ],
//       });
//       console.log("대댓글삭제", result);
//       alert("대댓글이 삭제되었습니다");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <>
//       {!isAnswerEdit && (
//         <S.Wrapper>
//           <S.WrapperUserInfo>
//             <S.WrapBestIcon>
//               {/* <S.BestComment>Best</S.BestComment> */}
//             </S.WrapBestIcon>
//             <S.WrapInfo>
//               <S.ProfileIcon src="/comment/profile_icon.png" />
//               <S.WrapCommentInfo>
//                 <S.Comment>{props.el?.contents}</S.Comment>
//                 <S.WrapUserInfo>
//                   <S.Name>{props.el?.user?.nickName}</S.Name>

//                   <S.Date>{props.el?.createAt}</S.Date>

//                   <S.UpIcon
//                     src="/comment/thumb_up.png"
//                     onClick={props.onClickLikeComment}
//                   />
//                   {/* <S.UpCount>325</S.UpCount> */}
//                   <S.UpCount>{props.data?.fetchComments.likeCount}</S.UpCount>
//                 </S.WrapUserInfo>
//               </S.WrapCommentInfo>
//               <S.WrapIcon>
//                 <S.EditIcon
//                   src="/comment/create.png"
//                   onClick={onClickUpdateAnswer}
//                 />
//                 <S.DeleteIcon
//                   src="/comment/Trash.png"
//                   onClick={onClickDeleteAnswer}
//                 />
//                 <S.AnswerIcon src="/comment/insert_comment.png" />
//               </S.WrapIcon>
//             </S.WrapInfo>
//           </S.WrapperUserInfo>
//         </S.Wrapper>
//       )}
//       {isAnswerEdit && (
//         <CommentWriteContainer
//           isAnswerEdit={true}
//           setIsAnswerEdit={setIsAnswerEdit}
//         />
//       )}
//     </>
//   );
// }
