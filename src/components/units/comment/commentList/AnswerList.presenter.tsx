import { gql, useQuery } from "@apollo/client";
import AnswerListUIITEM from "./AnswerList.presenterItem";

const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      children {
        id
        contents
        createAt
      }
    }
  }
`;

export default function AnswerListPresenter(props) {
  const { data } = useQuery(FETCH_COMMENTS);

  return (
    <>
      {data?.fetchComments.map((answerEl) => (
        <AnswerListUIITEM key={answerEl.id} answerEl={answerEl} el={props.el} />
      ))}
    </>
  );
}
