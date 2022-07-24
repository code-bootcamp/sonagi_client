export interface IReadCommentListContainerProps {
  setCommentClick: any;
  commentClick: boolean;
  setIsEdit: any;
  isEdit: any;
  el: any;
  setIsGoCommnet: any;
}

export interface IReadCommentListPresenterProps {
  data: {
    fetchEpisodeReviewPage: any;
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
  setIsGoCommnet: any;
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
