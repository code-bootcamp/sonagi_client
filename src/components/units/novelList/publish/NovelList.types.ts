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

export interface INovelPbListUIProps {
  Romance: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  RomanceFantasy: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  Fantasy: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  Asia: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  School: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  Horror: {
    fetchNovelsPage: {
      novels: Array<Iel>;
    };
  };
  data?: any;
  onClickMoveToDetail: (el: Iel) => (event: MouseEvent<HTMLDivElement>) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  onClickMoveToRomancePage: () => void;
  onClickMoveToRomanceFantasyPage: () => void;
  onClickMoveToFantasyPage: () => void;
  onClickMoveToAsiaPage: () => void;
  onClickMoveToSchoolPage: () => void;
  onClickMoveToHorrorPage: () => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
