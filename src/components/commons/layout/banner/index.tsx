import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import { gql, useQuery } from "@apollo/client";

const FETCH_EVENTS = gql`
  query fetchEventsAll {
    fetchEventsAll {
      id
      files {
        id
        url
      }
    }
  }
`;

export default function LayoutBanner() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data, loading } = useQuery(FETCH_EVENTS);

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return loading ? (
    <></>
  ) : (
    <>
      <S.SliderWrapper onClick={onClickMoveToPage("/event")}>
        <S.MySlide {...settings}>
          {data?.fetchEventsAll.map((el: any) => (
            <S.CarouselImg
              key={el.id}
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
            />
          ))}
        </S.MySlide>
      </S.SliderWrapper>
    </>
  );
}
