import { useState } from "react";
import AgreeTermsPresenter from "./agreeTerms.presenter";

export default function AgreeTermsContainer(props) {
  const [CheckBox, setCheckBox] = useState("");

  const onClickCheck1 = () => {
    setCheckBox("Check1");
  };

  const onClickCheck2 = () => {
    setCheckBox("Check2");
  };

  const onClickCheck3 = () => {
    setCheckBox("Check3");
  };

  const onClickClose = () => {
    setCheckBox("");
  };

  const onClickCheckAgree1 = () => {
    props.setAgree1(true);
  };

  const onClickCheckAgree2 = () => {
    props.setAgree2(true);
  };

  return (
    <AgreeTermsPresenter
      onClickCheck1={onClickCheck1}
      onClickCheck2={onClickCheck2}
      onClickCheck3={onClickCheck3}
      onClickCheckAgree1={onClickCheckAgree1}
      onClickCheckAgree2={onClickCheckAgree2}
      onClickClose={onClickClose}
      CheckBox={CheckBox}
      setCheckBox={setCheckBox}
    />
  );
}
