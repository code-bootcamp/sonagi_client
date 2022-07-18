import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CarouselPresenter from "./Carousel.presenter";
import {
  FETCH_NOVEL_CYCLES_LAST_ORDER,
  FETCH_NOVEL_CYCLES_LIKE_ORDER,
} from "./Carousel.queries";

export default function CarouselContainer() {
  const router = useRouter();
  const randomPage = Math.floor(Math.random() * 2) + 1;

  const { data: LastData } = useQuery(FETCH_NOVEL_CYCLES_LAST_ORDER, {
    variables: { page: randomPage },
  });
  const { data: LikeData } = useQuery(FETCH_NOVEL_CYCLES_LIKE_ORDER);

  console.log(randomPage, LikeData);

  const onClickNovelDetail = (el) => () => {
    router.push(`/novel/${el.id}`);
  };

  return (
    <CarouselPresenter
      LastData={LastData}
      LikeData={LikeData}
      onClickNovelDetail={onClickNovelDetail}
    />
  );
}
