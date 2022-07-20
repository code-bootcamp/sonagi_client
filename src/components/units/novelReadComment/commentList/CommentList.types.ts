import { Dispatch, SetStateAction } from "react";

export interface IReadCommentListContainerProps {
  setCommentClick: Dispatch<SetStateAction<boolean>>;
  commentClick: boolean;
}

export interface IReadCommentListPresenterProps {
  data: {
    id: string;
    contents: string;
    likeCount: number;
    star: number;
    createAt: string;
    updateAt: string;
    user: {
      id: string;
      nickName: string;
    };
    count: number;
  };
  onClickFetchMore: () => void;
  refetch: any;
  onClickGoComment: () => void;
  isGoComment: boolean;
  setIsGoCommnet: Dispatch<SetStateAction<boolean>>;
  onClickGoRead: () => void;
}

export interface Iel {
  id?: string;
  contents?: string;
  likeCount?: number;
  star?: number;
  createAt?: string;
  updateAt?: string;
  user?: {
    id?: string;
    nickName?: string;
  };
  count?: number;
}

export interface IReadCommentListPresenterItemProps {
  el: any;
}
