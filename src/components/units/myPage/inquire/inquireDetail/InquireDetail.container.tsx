import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useMoveToPage from "../../../../../commons/hooks/UseMoveToPage";
import InquireDetailPresenter from "./InquireDetail.presenter";
import { FETCH_QUESTION } from "./InquireDetail.queire";

export default function InquireDetailContainer() {
  const router = useRouter();

  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQuery(FETCH_QUESTION, {
    variables: { questionID: router.query._id },
  });

  return (
    <InquireDetailPresenter data={data} onClickMoveToPage={onClickMoveToPage} />
  );
}
