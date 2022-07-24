export interface Iel {
  contents: string;
  createAt: string;
  updateAt: string;
  id: string;
  likeCount: number;
  star: number;
  user: {
    id: string;
    nickName: string;
  };
}

export interface IDetailCommentListPresenterProps {
  data?: any;
  onClickFetchMore: () => void;
  refetch?: any;
}

export interface IDetailCommentListPresenterItemProps {
  key: any;
  el: Iel;
}
