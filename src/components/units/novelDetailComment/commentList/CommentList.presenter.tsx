import styled from "@emotion/styled";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";

import DetailCommentListPresenterItem from "./CommentList.presenterItem";
import { IDetailCommentListPresenterProps, Iel } from "./CommentList.types";

const WrapMore = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border: 2px solid #d9d9d9;
  margin: 20px 0 50px 0;
`;

const More = styled.div`
  color: #2277d8;
`;

export default function DetailCommentListPresenter(
  props: IDetailCommentListPresenterProps
) {
  return (
    <>
      {props.data?.fetchNovelReviewPage.novelRivews.map((el: Iel) => (
        <DetailCommentListPresenterItem key={el.id} el={el} />
      ))}
      {props.data?.fetchNovelReviewPage.count > 10 && (
        <WrapMore onClick={props.onClickFetchMore}>
          <More>10</More>개 더보기
          <CaretDownOutlined
            style={{ fontSize: "2rem", color: "#2277d8", margin: "0 5px" }}
          />
        </WrapMore>
      )}
    </>
  );
}
