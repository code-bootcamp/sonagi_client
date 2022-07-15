import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import NovelWriteContainer from "../../../../src/components/units/novelWrite/NovelWrite.container";

export const FETCH_NOVEL_DETAIL = gql`
  query fetchNovelDetail($novelID: String!) {
    fetchNovelDetail(novelID: $novelID) {
      id
      title
      description
      likeCount
      viewCount
      createAt
      updateAt
      user {
        name
        nickName
      }
      novelCategory {
        name
        id
      }
      novelTags {
        id
        name
      }
      files {
        id
        name
        url
      }
      novelIndexs {
        id
        title
        contents
        index
        createAt
        updateAt
        viewCount
        star
      }
    }
  }
`;

export default function NovelEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  console.log(data);
  return loading ? (
    <></>
  ) : (
    <NovelWriteContainer isEdit={true} editData={data} />
  );
}
