import { useMutation } from "@apollo/client";
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
      const result = await deleteLoginUser();
      console.log(result);
      alert("회원 탈퇴가 완료되었습니다");
      window.location.replace("/");
    } catch (error) {
      alert(error.message);
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
