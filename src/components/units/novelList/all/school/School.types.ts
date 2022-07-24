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

export interface ISchoolPresenterProps {
  PbSchool: any;
  FinSchool: any;
  data?: any;
  onClickMoveToDetail: any;
}
