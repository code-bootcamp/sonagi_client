import { useRouter } from "next/router";
import EventDetailPresenter from "./EventDetail.presenter";

export default function EventDetailContainer() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/event");
  };

  const onClickWrite = () => {
    router.push("/event/new");
  };
  return (
    <EventDetailPresenter
      onClickList={onClickList}
      onClickWrite={onClickWrite}
    />
  );
}
