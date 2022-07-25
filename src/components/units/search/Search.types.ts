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
export interface ISearchContainerProps {
  onClickMoveToDetail: (el: Iel) => (event: MouseEvent<HTMLDivElement>) => void;
  onClickTag: (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface ISearchPresenterProps {
  PbSchool: any;
  FinSchool: any;
  data?: any;
  onClickMoveToDetail: any;
  refetch: any;
  refetchBoardsCount: any;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onClickTag: (event: MouseEvent<HTMLButtonElement>) => void;
}
