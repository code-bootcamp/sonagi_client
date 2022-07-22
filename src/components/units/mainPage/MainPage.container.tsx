import useScrollFadeIn from "../../../commons/hooks/useScrollFadeIn";
import MainPagePresenter from "./MainPage.presenter";

export default function MainPageContainer() {
  const FadeIn = useScrollFadeIn();

  return <MainPagePresenter FadeIn={FadeIn} />;
}
