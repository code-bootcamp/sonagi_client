import styled from "@emotion/styled";
import React from "react";

import ReadCommentListPresenterItem from "./CommentList.presenterItem";
import ReadCommentWriteContainer from "../commentWrite/CommentWrite.container";
import InfiniteScroll from "react-infinite-scroller";
import { Iel, IReadCommentListPresenterProps } from "./CommentList.types";

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f5;
  height: 8%;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f5;
`;

const Scroll = styled.div`
  height: 84%;
  overflow: auto;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
`;

export default function ReadCommentListPresenter(
  props: IReadCommentListPresenterProps
) {
  return (
    <Wrapper>
      {props.isGoComment ? (
        <ReadCommentWriteContainer setIsGoCommnet={props.setIsGoCommnet} />
      ) : (
        <>
          <HeadWrapper onClick={props.onClickGoRead}>읽으러 가기</HeadWrapper>
          <Scroll>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onClickFetchMore}
              hasMore={true || false}
              useWindow={false}
            >
              {props.data?.fetchEpisodeReviewPage.episodeReviews.map(
                (el: Iel) => (
                  <ReadCommentListPresenterItem key={el.id} el={el} />
                )
              )}
            </InfiniteScroll>
          </Scroll>
          <FooterWrapper onClick={props.onClickGoComment}>
            댓글 쓰러 가기
          </FooterWrapper>
        </>
      )}
    </Wrapper>
  );
}
