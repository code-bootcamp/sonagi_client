import useCountUp from "./count.container";
import MainPagePaymentPresenter from "./mainPagePayment.presenter";
export default function MainPagePaymentContainer() {
  const { CountUp } = useCountUp(32000, 0, 2000);

  return <MainPagePaymentPresenter CountUp={CountUp} />;
}
