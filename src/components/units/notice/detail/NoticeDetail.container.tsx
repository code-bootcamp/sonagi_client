import NoticeDetailPresenter from "./NoticeDetail.presenter";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { DELETE_NOTICE } from "./NoticeDetail.queries";
import { useMutation } from "@apollo/client";

export default function NoticeDetailContainer() {
  const router = useRouter();
  const [deleteNotice] = useMutation(DELETE_NOTICE);

  const onClickMoveToList = () => {
    router.push("/notice");
  };

  // 공지사항 삭제
  const onClickNoticeDelete = () => {
    deleteNotice({
      variables: { noticeID: router.query.id },
    });
    console.log(router.query.id);
    router.push("/notice");
    Modal.success({ content: "게시글을 삭제했습니다!" });
  };

  return (
    <NoticeDetailPresenter
      onClickMoveToList={onClickMoveToList}
      onClickNoticeDelete={onClickNoticeDelete}
    />
  );
}
