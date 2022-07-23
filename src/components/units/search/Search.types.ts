import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";
interface IFiles {
  url: string;
}
export interface Iel {
  cycle?: number;
  description?: string;
  files?: Array<IFiles>;
  id?: string;
  isFinish?: boolean;
  likeCount?: number;
  novelCategory?: {
    name: string;
  };
  title?: string;
  user?: {
    id: string;
    name: string;
    nickName: string;
  };
  viewCount?: number;
  __typename?: string;
}

export interface ISearchPresenterProps {
  PbSchool: any;
  FinSchool: any;
  data?: any;
  onClickMoveToDetail: (el: Iel) => (event: MouseEvent<HTMLDivElement>) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}
