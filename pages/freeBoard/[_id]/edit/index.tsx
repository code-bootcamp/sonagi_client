import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../src/components/units/freeBoard/freeBoardDetail/FreeBoardDetail.queries";
import FreeBoardWriteContainer from "../../../../src/components/units/freeBoard/freeBoardWrite/FreeBoardWrite.container";

export default function FreeBoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardID: router.query._id,
    },
  });

  return <FreeBoardWriteContainer data={data} isEdit={true} />;
}
