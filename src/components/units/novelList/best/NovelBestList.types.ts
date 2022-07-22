import { MouseEvent } from "react";
interface IFiles {
  url: string;
}
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
  el: any;
  onClickMoveToDetail: (el: Iel) => (event: MouseEvent<HTMLDivElement>) => void;
  HeartList: () => void;
  onClickLike: (el: any) => () => Promise<void>;
}
