interface IFiles {}
export interface Iel {
  novel: any;
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
export interface INovelBestListPresenterProps {
  data?: any;
  el: {
    id: any;
    el: any;
  };
  onClickMoveToDetail: any;
  HeartList: any;
  onClickLike: any;
}

export interface INovelBestListStyledProps {
  data?: any;
  el: {
    id: any;
    el: any;
  };
  HeartList: any;
}
