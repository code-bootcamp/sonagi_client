import { useRouter } from "next/router";
import EventWritePresenter from "./EventWrite.presenter";

export default function EventWriteContainer() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/event");
  };

  return <EventWritePresenter onClickList={onClickList} />;
}
