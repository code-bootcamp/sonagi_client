import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import VolumeWriteContainer from "../../../../../src/components/units/volumeWrite/VolumeWrite.container";

export const FETCH_EPISODE_DETAIL = gql`
  query fetchEpisodeDetail($novelIndexID: String!) {
    fetchEpisodeDetail(novelIndexID: $novelIndexID) {
      id
      title
      contents
      index
      viewCount
      authorText
      isNotice
      isFinish
      isBuy
    }
  }
`;

export default function VolumeEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_EPISODE_DETAIL, {
    variables: { novelIndexID: router.query.volume_id },
  });
  return loading ? (
    <></>
  ) : (
    <VolumeWriteContainer isEdit={true} editData={data} />
  );
}
