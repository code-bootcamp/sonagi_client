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
  onClickCheckAll: () => void;
  onCheckedItem: (el: any) => void;
  isChecked: (el: any) => boolean;
  checkList: string[];
  buyList: string[];
  onClickSelectPayment: () => void;
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

export interface INovelEl {
  id: string;
  title: string;
  contents: string;
  index: number;
  createAt: string;
  updateAt: string;
  viewCount: number;
  star: number;
  isFinish: boolean;
  isNotice: boolean;
  isPrivate: boolean;
  isBuy: boolean;
}

export interface ICheckListEl {
  contents: string;
  createAt: string;
  id: string;
  index: number;
  isBuy: boolean;
  isFinish: boolean;
  isNotice: boolean;
  isPrivate: boolean;
  star: number;
  title: string;
  updateAt: string;
  viewCount: number;
  __typename: string;
}
