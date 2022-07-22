export interface INoticeListPresenterProps {
  data?: any;
  onClickNoticedetail: () => void;
  onClickNoticeNew: () => void;
}

export interface Iel {
  id?: string;
  files?: string[];
  title?: string;
  createAt?: string;
}
