import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../components/store";

export default function useMoveToPage() {
  const router = useRouter();

  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: any) => () => {
    setVisitedPage(path);
    router.push(path);
  };
  return { visitedPage, onClickMoveToPage };
}
