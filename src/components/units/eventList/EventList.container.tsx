import { useQuery } from "@apollo/client";
import EventListPresenter from "./EventList.presenter";
import { FETCH_EVENTS } from "./EventList.queries";

export default function EventListContainer() {
  const { data } = useQuery(FETCH_EVENTS);

  console.log(data);

  return <EventListPresenter data={data} />;
}
