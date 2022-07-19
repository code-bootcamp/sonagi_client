import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { withAuth } from "../../../commons/hooks/withAuth";
import MyPagePresenter from "./MyPage.presenter";
import { FETCH_LOGIN_USER } from "./MyPage.queries";

function MyPageContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_LOGIN_USER);

  console.log(data);

  const onClickMoveToPointCharge = () => {
    router.push("/myPage/pointCharge");
  };

  return (
    <MyPagePresenter
      onClickMoveToPointCharge={onClickMoveToPointCharge}
      data={data}
    />
  );
}

export default withAuth(MyPageContainer);
