import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CarouselPresenter from "./Carousel.presenter";
import {
  FETCH_NOVEL_CYCLES_LAST_ORDER,
  FETCH_NOVEL_CYCLES_LIKE_ORDER,
} from "./Carousel.queries";

export default function CarouselContainer() {
  const router = useRouter();
  const { data: LastData } = useQuery(FETCH_NOVEL_CYCLES_LAST_ORDER);
  const { data: LikeData } = useQuery(FETCH_NOVEL_CYCLES_LIKE_ORDER);
  console.log(LikeData);

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
