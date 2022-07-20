import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import { withAuth } from "../../../commons/hooks/withAuth";
import MyPagePresenter from "./MyPage.presenter";
import { FETCH_LOGIN_USER, FETCH_NOVEL_LIKE } from "./MyPage.queries";

function MyPageContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_LOGIN_USER);
  const { onClickMoveToPage } = useMoveToPage();

  const { data: LikeNovel } = useQuery(FETCH_NOVEL_LIKE);

  const LikeCount = LikeNovel?.fetchNovelLikeInUser?.length;

  const onClickMoveToPointCharge = () => {
    router.push("/myPage/pointCharge");
  };

  return (
    <MyPagePresenter
      onClickMoveToPointCharge={onClickMoveToPointCharge}
      onClickMoveToPage={onClickMoveToPage}
      data={data}
      LikeCount={LikeCount}
    />
  );
}

export default withAuth(MyPageContainer);
