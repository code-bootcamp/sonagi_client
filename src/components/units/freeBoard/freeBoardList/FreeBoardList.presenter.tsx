import React from "react";
import Button01 from "../../../commons/buttons/01";
import * as S from "./FreeBoardList.styles";
import { getDate } from "./../../../../commons/libraries/utils";
import Paginations from "../../../commons/paginations/Paginations.container";
import { IFreeBoardListPresenter } from "./FreeBoardList.types";
export default function FreeBoardListPresenter(props: IFreeBoardListPresenter) {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.MainTitle>자유게시판</S.MainTitle>
      </S.WrapTitle>
      {/* <S.WrapperBoard>
        <S.Title>글 제목 글 제목 글 제목 글 제목 글 제목</S.Title>
        <S.WrapInfo>
          <S.Writer>작성자</S.Writer>
          <S.Date>2022.07.04</S.Date>
          <S.Date>조회 12</S.Date>
          <S.Date>추천 0</S.Date>
        </S.WrapInfo>
      </S.WrapperBoard> */}
      {props.data?.fetchBoardsAll.map(
        (el: {
          id: React.Key | null | undefined;
          title:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          user: {
            nickName:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          };
          createAt: any;
        }) => (
          <S.WrapperBoard
            key={el.id}
            onClick={props.onClickMoveToFreeBoardDetail(el)}
            id={el.id}
          >
            <S.AvatarImg src="/freeBoard/avatar.png" />
            <S.Column>
              <S.Flex>
                <S.Title>{el.title}</S.Title>
                <S.New>NEW</S.New>
              </S.Flex>
              <S.WrapInfo>
                <S.Writer>{el.user?.nickName}</S.Writer>
                {/* <S.Writer>작성자</S.Writer> */}
                {/* <S.Date>{el.viewCount}</S.Date>
            <S.Date>{el.likeCount}</S.Date> */}
              </S.WrapInfo>
            </S.Column>
            <S.Date>{getDate(el.createAt)}</S.Date>
          </S.WrapperBoard>
        )
      )}
      <Paginations refetch={props.refetch} count={props.count} />
      <S.WrapButton>
        <Button01
          title="작성하기"
          onClick={props.onClickMoveToFreeBoardWrite}
        />
      </S.WrapButton>
    </S.Wrapper>
  );
}
