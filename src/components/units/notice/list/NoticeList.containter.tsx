import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NoticeListPresenter from "./NoticeList.presenter";
import { FETCH_NOTICES } from "./NoticeList.queries";

export default function NoticeListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_NOTICES);

  console.log(data);

  const onClickNoticedetail = () => {
    router.push("/notice/_id");
  };

  const onClickNoticeNew = () => {
    router.push("/notice/new");
  };

  return (
    <NoticeListPresenter
      data={data}
      onClickNoticedetail={onClickNoticedetail}
      onClickNoticeNew={onClickNoticeNew}
    />
  );
}
