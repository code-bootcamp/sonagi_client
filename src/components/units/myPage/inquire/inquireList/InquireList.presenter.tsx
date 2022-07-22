import React from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import HamburgerPage from "../../../../commons/hamburger";
import * as S from "./InquireList.styles";

export default function InquireListPresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapHambuger>
        <S.MainTitle>1 : 1 문의</S.MainTitle>
        <HamburgerPage />
      </S.WrapHambuger>
      {props.data?.fetchQuestionAll.map((el: any) => (
        <S.WrapperList
          key={el.id}
          onClick={props.onClickMoveToPage(`/myPage/inquire/${el.id}`)}
        >
          <S.WrapInfo>
            <S.Title>{el.title}</S.Title>
            <S.Date>{getDate(el.createAt)}</S.Date>
          </S.WrapInfo>
          {String(el.status) === "true" ? (
            <S.Answer>답변 등록</S.Answer>
          ) : (
            <S.Answer>답변 미등록</S.Answer>
          )}
        </S.WrapperList>
      ))}
      <S.WrapButton>
        <S.Button onClick={props.onClickMoveToPage("/myPage/inquire/new")}>
          문의하기
        </S.Button>
      </S.WrapButton>
    </S.Wrapper>
  );
}
