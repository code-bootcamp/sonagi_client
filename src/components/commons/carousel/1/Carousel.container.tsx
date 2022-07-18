import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CarouselPresenter from "./Carousel.presenter";
import { FETCH_NOVELS_PAGE } from "./Carousel.queries";

export default function CarouselContainer() {
  const router = useRouter();
  const LastRandomPage = Math.floor(Math.random() * 2) + 1;
  const TodayRandomPage = Math.floor(Math.random() * 2) + 1;

  const { data: LastData } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "ALL",
        target: "",
        order: "LAST",
        isFinish: false,
        page: LastRandomPage,
      },
    },
  });

  const { data: LikeData } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "ALL",
        target: "",
        order: "LIKE",
        isFinish: false,
        page: 1,
      },
    },
  });

  const day = new Date();
  const week = [7, 1, 2, 3, 4, 5, 6];
  const Today = week[day.getDay()];

  const { data: TodayData } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CYCLE",
        target: String(Today),
        order: "LIKE",
        isFinish: false,
        page: TodayRandomPage,
      },
    },
  });

  console.log(TodayData);

  const onClickNovelDetail = (el) => () => {
    router.push(`/novel/${el.id}`);
  };

  return (
    <CarouselPresenter
      LastData={LastData}
      LikeData={LikeData}
      TodayData={TodayData}
      onClickNovelDetail={onClickNovelDetail}
    />
  );
}
