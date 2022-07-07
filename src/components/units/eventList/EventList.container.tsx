import { useRouter } from "next/router";
import EventListPresenter from "./EventList.presenter";

export default function EventListContainer() {
  const router = useRouter();

  const onClickDetail = () => {
    router.push("/event/_id");
  };

  return <EventListPresenter onClickDetail={onClickDetail} />;
}
