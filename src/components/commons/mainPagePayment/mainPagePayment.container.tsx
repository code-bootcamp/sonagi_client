import useScrollCount from "../../../commons/hooks/useScrollCount";

import MainPagePaymentPresenter from "./mainPagePayment.presenter";
export default function MainPagePaymentContainer() {
  const animatedItem = useScrollCount(49000, 48000, 3000);
  const animatedItem2 = useScrollCount(23000, 22000, 3000);
  const animatedItem3 = useScrollCount(50000, 49000, 3000);
  const animatedItem4 = useScrollCount(45000, 44000, 3000);

  return (
    <MainPagePaymentPresenter
      animatedItem={animatedItem}
      animatedItem2={animatedItem2}
      animatedItem3={animatedItem3}
      animatedItem4={animatedItem4}
    />
  );
}
