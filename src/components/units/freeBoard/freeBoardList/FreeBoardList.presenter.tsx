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
                {/* <div>{el.viewCount}</div> */}
              </S.WrapInfo>
            </S.Column>
            <S.DateWrapper>
              <S.Date>{getDate(el.createAt)}</S.Date>
            </S.DateWrapper>
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
