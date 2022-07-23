import { MouseEvent } from "react";

export interface INovelDetailPresenterProps {
  setIsDonate: any;
  LoginData: any;
  novelID: any;
  detailData?: any;
  onClickDelete: () => void;
  onClickMoveToRead: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToVolumeWrite: () => void;
  onClickPayment: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDonate: () => void;
  onClickLike: () => void;
  onClickIndexDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickEdit: () => void;
  onClickPrivate: (event: MouseEvent<HTMLDivElement>) => void;
  switchPrivate: boolean;
  onClickFirst: () => void;
  isFirst: boolean;
  isDonate: boolean;
  isSubmitting: boolean;
  setIsEdit: any;
  isEdit: any;
  onClickFirstView: () => void;
  onClickEditEpisode: (event: MouseEvent<HTMLDivElement>) => void;
  Heart: boolean;
}

export interface Iel {
  id: string;
  novel: {
    id: string;
  };
}

export interface INovelDetailStyles {
  isFirst: boolean;
}
