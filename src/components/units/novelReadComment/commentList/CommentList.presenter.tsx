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
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f5;
  cursor: pointer;
`;

const Scroll = styled.div`
  height: 69%;
  overflow: auto;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
`;

const WrapAuthorText = styled.div`
  height: 15%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 30px;
  border-bottom: 1px solid gray;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 10px;
`;
const AuthorText = styled.div`
  font-size: 1rem;
`;

export default function ReadCommentListPresenter(
  props: IReadCommentListPresenterProps
) {
  // const [reviewLength, setReviewLength] = useState(false);
  // if (props.data?.fetchEpisodeReviewPage.episodeReviews.length > 9) {
  //   setReviewLength((prev) => !prev);
  // }

  return (
    <Wrapper>
      {props.isGoComment ? (
        <ReadCommentWriteContainer
          setIsGoCommnet={props.setIsGoCommnet}
          setIsEdit={function (value: any): void {
            throw new Error("Function not implemented.");
          }}
          isEdit={false}
          el={{
            contents: undefined,
            createAt: undefined,
            id: undefined,
            likeCount: undefined,
            updateAt: undefined,
            user: undefined,
          }}
        />
      ) : (
        <>
          <HeadWrapper onClick={props.onClickGoRead}>읽으러 가기</HeadWrapper>
          <WrapAuthorText>
            <Text>작가의 말</Text>
            <AuthorText>
              {props.AuthorData?.fetchEpisodeDetail.authorText}
            </AuthorText>
          </WrapAuthorText>
          <Scroll>
            <InfiniteScroll
              hasMore={false}
              pageStart={0}
              loadMore={props.onClickFetchMore}
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
