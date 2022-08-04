import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import DeleteUserPresenter from "./DeleteUser.presenter";
import { DELETE_USER } from "./DeleteUser.queries";

export default function DeleteUserContainer() {
  const [deleteLoginUser] = useMutation(DELETE_USER);
  const [setCheck, setIsCheck] = useState(false);

  const onClickCheck = () => {
    setIsCheck(true);
  };

  const onClickDeleteUser = async () => {
    try {
      await deleteLoginUser();
      Modal.success({ content: "그동안 소나기를 이용해주셔서 감사합니다" });
      window.location.replace("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <DeleteUserPresenter
      onClickCheck={onClickCheck}
      setCheck={setCheck}
      onClickDeleteUser={onClickDeleteUser}
    />
  );
}
