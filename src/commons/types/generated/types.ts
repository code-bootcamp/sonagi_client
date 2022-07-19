export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

/** 답변 Entity */
export type IAnswerEntity = {
  __typename?: "AnswerEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  // question?: Maybe<IQuestionEntity>;
  /** 내용 */
  star: Scalars["Float"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user?: Maybe<IUserEntity>;
};

/** 게시판 Entity */
export type IBoardEntity = {
  __typename?: "BoardEntity";
  // comments: Array<ICommentEntity>;
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 싫어요 갯수 */
  dislikeCount: Scalars["Int"];
  // files: Array<IFileEntity>;
  /** UUID */
  id: Scalars["ID"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user?: Maybe<IUserEntity>;
  /** 조회수 */
  viewCount: Scalars["Int"];
};

/** 회원 조회용 Output Class */
export type IBoardOutput = {
  __typename?: "BoardOutput";
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 싫어요 갯수 */
  dislikeCount: Scalars["Int"];
  /** UUID */
  id: Scalars["ID"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  /** 조회수 */
  viewCount: Scalars["Int"];
};

/** 북마크 Entity */
export type IBookmarkEntity = {
  __typename?: "BookmarkEntity";
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  /** 북마크 체크 여부 */
  isBoolean: Scalars["Boolean"];
  // novelIndex: INovelIndexEntity;
  /** 페이지 */
  page: Scalars["Int"];
  // user: IUserEntity;
};

/** 연재 주기 */
export enum ICycle_Type {}
// Free = "FREE",
// Fri = "FRI",
// Mon = "MON",
// Sat = "SAT",
// Sun = "SUN",
// Thu = "THU",
// Tue = "TUE",
// Wed = "WED",

export type ICancelPaymentInput = {
  /** 아임포트 UID */
  impUid: Scalars["String"];
  /** 아임포트 상품 UID */
  merchantUid: Scalars["String"];
  /** 취소 사유 */
  reason: Scalars["String"];
};

/** 댓글 Entity */
export type ICommentEntity = {
  __typename?: "CommentEntity";
  board: IBoardEntity;
  /** 대댓글 */
  children: Array<ICommentEntity>;
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 싫어요 갯수 */
  dislikeCount: Scalars["Int"];
  /** UUID */
  id: Scalars["ID"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

export type ICreateAnswerInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateBoardInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 파일 URLs */
  fileURLs: Array<Scalars["String"]>;
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateBookmarkDto = {
  bookmarkID?: InputMaybe<Scalars["String"]>;
  isBoolean?: InputMaybe<Scalars["Boolean"]>;
  novelIndexID: Scalars["String"];
  page: Scalars["Float"];
};

export type ICreateCommentInput = {
  /** 대댓글 */
  children?: InputMaybe<Array<Scalars["String"]>>;
  /** 내용 */
  contents: Scalars["String"];
  /** 댓글 */
  parent?: InputMaybe<Scalars["String"]>;
};

export type ICreateEventInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 이벤트 종료 시간 */
  endAt?: InputMaybe<Scalars["DateTime"]>;
  /** 이벤트 진행 여부 */
  isEvent: Scalars["Boolean"];
  /** 이벤트 시작 시간 */
  startAt?: InputMaybe<Scalars["DateTime"]>;
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateNoticeInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 상단 노출 여부 */
  isTop?: InputMaybe<Scalars["Boolean"]>;
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateNovelIndexInput = {
  /** 작가의 말 */
  authorText: Scalars["String"];
  /** 내용 */
  contents: Scalars["String"];
  /** 완결 여부 */
  isFinish?: InputMaybe<Scalars["Boolean"]>;
  /** 공지 여부 */
  isNotice?: InputMaybe<Scalars["Boolean"]>;
  /** 소설 UUID */
  novelID: Scalars["String"];
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateNovelIndexReviewInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 에피소드 UUID */
  episodeID: Scalars["String"];
  /** 평점 */
  star: Scalars["Float"];
};

export type ICreateNovelInput = {
  /** 소설 카테고리 ID. (UUID) */
  categoryID: Scalars["String"];
  /** 연재 주기. ex. [MON, THU, WED, ...] or [FREE] */
  cycles: Array<ICycle_Type>;
  /** 설명 */
  description: Scalars["String"];
  /** 파일 URLs */
  fileURLs: Array<Scalars["String"]>;
  /** 태그 목록. ex. ['#태그 1', '#태그 2'] */
  tags: Array<Scalars["String"]>;
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateNovelReviewInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 평점 */
  star: Scalars["Float"];
};

export type ICreatePaymentInput = {
  /** 결제 금액 */
  amount: Scalars["Int"];
  /** 아임포트 UID */
  impUid: Scalars["String"];
  /** 아임포트 상품 UID */
  merchantUid: Scalars["String"];
  /** 상품 UUID */
  productID: Scalars["String"];
};

export type ICreateQuestionInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 제목 */
  title: Scalars["String"];
};

export type ICreateReportInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 신고 대상 UUID */
  reportUUID: Scalars["String"];
  /** 제목 */
  title: Scalars["String"];
  /** 신고 ENUM */
  // type: IReport_Type;
};

export type ICreateUserInput = {
  /** 이메일 */
  email: Scalars["String"];
  /** 이름 */
  name: Scalars["String"];
  /** 닉네임 */
  nickName: Scalars["String"];
  /** 핸드폰 번호 */
  phone?: InputMaybe<Scalars["String"]>;
  /** 비밀번호 */
  pwd: Scalars["String"];
};

/** 회원 생성용 Output Class */
export type ICreateUserOutput = {
  __typename?: "CreateUserOutput";
  /** 이메일 인증 */
  // authEmail: IEmailOutput;
  /** 핸드폰 인증 */
  // authPhone: IPhoneOutput;
  /** 이메일 */
  email: Scalars["String"];
  /** 회원 UUID */
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  /** 닉네임 */
  nickName: Scalars["String"];
  /** 핸드폰 번호 */
  phone: Scalars["String"];
  /** 소지 금액 */
  point: Scalars["Int"];
  /** 회원 등급 */
  // userClass: IUserClassOutput;
};

export type IDonatePaymentPointInput = {
  /** 소설 UUID */
  novelID: Scalars["String"];
  /** 보낼 Point */
  point: Scalars["Int"];
};

/** 이메일 인증 Entity */
export type IEmailEntity = {
  __typename?: "EmailEntity";
  /** 이메일 */
  email: Scalars["String"];
  id: Scalars["ID"];
  /** 인증 여부 */
  isAuth: Scalars["Boolean"];
  /** 토큰 */
  token: Scalars["String"];
  /** 인증 완료 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

/** 회원 조회용 Output Class */
export type IEmailOutput = {
  __typename?: "EmailOutput";
  /** 인증 여부 */
  isAuth: Scalars["Boolean"];
  /** 인증 완료 시간 */
  updateAt: Scalars["DateTime"];
};

/** Event Entity */
export type IEventEntity = {
  __typename?: "EventEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 이벤트 종료 시간 */
  endAt?: Maybe<Scalars["DateTime"]>;
  /** UUID */
  id: Scalars["ID"];
  /** 이벤트 진행 여부 */
  isEvent: Scalars["Boolean"];
  /** 이벤트 시작 시간 */
  startAt?: Maybe<Scalars["DateTime"]>;
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

/** 파일 저장 위치 */
export enum IFile_Type {}
// Novel = "NOVEL",
// User = "USER",

export type IFetchEpisodeReviewOutput = {
  __typename?: "FetchEpisodeReviewOutput";
  /** 리뷰 목록 전체 갯수 */
  count: Scalars["Int"];
  /** 조회된 리뷰 목록 */
  // episodeReviews: Array<INovelIndexReviewEntity>;
};

export type IFetchNovelInput = {
  // isFinish: IFetchNovelIsFinish;
  // order: IFetchNovelOrder;
  /** 페이지 */
  page?: InputMaybe<Scalars["Int"]>;
  /** ALL => '', CATEGORY => '카테고리 UUID', CYCLE => '0 ~ 7' */
  target: Scalars["String"];
  // type: IFetchNovelType;
};

/** 소설 조회 완결 여부 */
export enum IFetchNovelIsFinish {}
// All = "ALL",
// False = "FALSE",
// True = "TRUE",

/** 소설 조회 Order */
export enum IFetchNovelOrder {}
// Last = "LAST",
// Like = "LIKE",

export type IFetchNovelReviewsOutput = {
  __typename?: "FetchNovelReviewsOutput";
  /** 전체 갯수 */
  count: Scalars["Int"];
  /** 소설 리뷰 조회 */
  // novelRivews: Array<INovelReviewEntity>;
};

/** 소설 조회 Type */
export enum IFetchNovelType {}
// All = "ALL",
// Category = "CATEGORY",
// Cycle = "CYCLE",

export type IFetchNovelsOutput = {
  __typename?: "FetchNovelsOutput";
  /** 전체 갯수 */
  count: Scalars["Int"];
  /** 소설 조회 */
  // novels: Array<INovelEntity>;
};

export type IFetchPaymentOutput = {
  __typename?: "FetchPaymentOutput";
  /** 전체 갯수 */
  count: Scalars["Int"];
  /** 결제 목록 */
  // payments: Array<IPaymentEntity>;
};

/** FileUpload Entity */
export type IFileEntity = {
  __typename?: "FileEntity";
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  /** 폴더 */
  path: Scalars["String"];
  /** URL */
  url: Scalars["String"];
};

export type ILoginInput = {
  /** 이메일 */
  email: Scalars["String"];
  /** 비밀번호 */
  pwd: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  /** 핸드폰 인증 확인 */
  AuthPhoneOK: Scalars["String"];
  /** 임시 저장된 데이터 삭제하기 */
  DeleteTempStorageValue: Scalars["Boolean"];
  /** 로그인, Get AccessToken */
  Login: Scalars["String"];
  /** OAuth 로그인 */
  // LoginOAuth: IResultMessage;
  /** 로그아웃, Bearer JWT */
  // Logout: IResultMessage;
  /** 강제 로그아웃 */
  // LogoutForce: IResultMessage;
  /** 핸드폰 인증 */
  SendPhone: Scalars["String"];
  /** 임시 저장하기 */
  SetTempStorageValue: Scalars["Boolean"];
  /** 결제 전부 취소 */
  // cancelPayment: IPaymentEntity;
  /** 포인트 결제 취소 */
  // cancelPointPayment: IResultMessage;
  /** 신고 취소 */
  // cancelReport: IResultMessage;
  /** 에피소드 비공개 전환 */
  // changePrivateNovelIndex: INovelIndexEntity;
  /** 비밀번호 맞는지 확인 */
  // comparePassword: IResultMessage;
  /** 답변 작성 */
  createAnswer: IAnswerEntity;
  /** 게시글 생성 */
  createBoard: IBoardEntity;
  /** 댓글 생성 */
  createComment: ICommentEntity;
  /** 편당 리뷰 작성 */
  // createEpisodeReview: INovelIndexReviewEntity;
  /** 이벤트 작성 */
  createEvent: IEventEntity;
  /** 공지사항 작성 */
  // createNotice: INoticeEntity;
  /** 소설 등록 */
  // createNovel: INovelEntity;
  /** 후원작 등록 */
  // createNovelDonate: INovelDonateEntity;
  /** 에피소드 등록 */
  // createNovelIndex: INovelIndexEntity;
  /** 선호작 등록 */
  // createNovelLike: INovelLikeEntity;
  /** 소설 리뷰 작성  */
  // createNovelReview: INovelReviewEntity;
  /** 결제 정보 저장 */
  // createPayment: IPaymentEntity;
  /** 문의 작성 */
  // createQuestion: IQuestionEntity;
  /** 신고 등록 */
  // createReport: IReportEntity;
  /** 회원가입 */
  createUser: ICreateUserOutput;
  /** 선호 작가 등록 */
  // createUserLike: IUserBlockEntity;
  /** 답변 삭제 */
  // deleteAnswer: IResultMessage;
  /** 게시글 삭제 */
  // deleteBoard: IResultMessage;
  /** 댓글 삭제 */
  // deleteComment: IResultMessage;
  /** 에피소드 별 리뷰 삭제 */
  // deleteEpisodeReview: IResultMessage;
  /** 이벤트 삭제 */
  // deleteEvent: IResultMessage;
  /** 파일 삭제 */
  deleteFileUpload: Array<Scalars["Boolean"]>;
  /** 회원 탈퇴 ( Soft ), Bearer JWT */
  // deleteLoginUser: IResultMessage;
  /** 공지사항 삭제 */
  // deleteNotice: IResultMessage;
  /** 소설 삭제 */
  // deleteNovel: IResultMessage;
  /** 후원작 등록 취소 */
  // deleteNovelDonate: IResultMessage;
  /** 에피소드 삭제 */
  // deleteNovelIndex: IResultMessage;
  /** 선호작 등록 취소 */
  // deleteNovelLike: IResultMessage;
  /** 소설 리뷰 삭제 */
  // deleteNovelReview: IResultMessage;
  /** 문의 삭제 */
  deleteQuestion: Scalars["String"];
  /** 선호 작가 삭제 */
  // deleteUserLike: IResultMessage;
  /** 후원 결제 */
  // donatePoint: IPaymentPointEntity;
  /** 에피소드 결제 */
  // paidPoint: IPaymentPointEntity;
  /** 답변 삭제 취소 */
  // restoreAnswer: IResultMessage;
  /** 이벤트 삭제 취소 */
  // restoreEvent: IResultMessage;
  /** 공지사항 삭제 취소 */
  // restoreNotice: IResultMessage;
  /** 소설 삭제 취소 */
  // restoreNovel: IResultMessage;
  /** 에피소드 삭제 취소 */
  // restoreNovelIndex: IResultMessage;
  /** AccessToken 재발급 */
  restoreToken: Scalars["String"];
  /** 선호작 switch */
  // switchNovelLike: IResultMessage;
  /** 북마크 등록 및 해제 */
  // toggleBookmark: IResultMessage;
  /** 답변 수정 */
  updateAnswer: IAnswerEntity;
  /** 게시글 수정 */
  updateBoard: IBoardEntity;
  /** 댓글 수정 */
  updateComment: ICommentEntity;
  /** 에피소드 별 리뷰 수정 */
  // updateEpisodeReview: INovelIndexReviewEntity;
  /** 이벤트 수정 */
  updateEvent: IEventEntity;
  /** 회원 정보 수정, Bearer JWT */
  // updateLoginUser: IResultMessage;
  /** 공지사항 수정 */
  // updateNotice: INoticeEntity;
  /** 소설 정보 수정 */
  // updateNovel: INovelEntity;
  /** 에피소드 수정 */
  // updateNovelIndex: INovelIndexEntity;
  /** 소설 리뷰 수정 */
  // updateNovelReview: INovelReviewEntity;
  /** 문의 수정 */
  // updateQuestion: IQuestionEntity;
  /** 비밀번호 변경, Bearer JWT */
  // updateUserPwd: IResultMessage;
  /** 파일 업로드 */
  uploadFile: Array<IFileEntity>;
  /** 파일 업로드 ( 썸네일 제작 ) */
  uploadFileWithThumb: Array<IFileEntity>;
};

export type IMutationAuthPhoneOkArgs = {
  // phoneInput: IPhoneInput;
};

export type IMutationDeleteTempStorageValueArgs = {
  // TEMP_TYPE: ITemp_Type;
};

export type IMutationLoginArgs = {
  loginInput: ILoginInput;
};

export type IMutationSendPhoneArgs = {
  phone: Scalars["String"];
};

export type IMutationSetTempStorageValueArgs = {
  // TEMP_TYPE: ITemp_Type;
  // value: ITempStorageInput;
};

export type IMutationCancelPaymentArgs = {
  cancelPaymentInput: ICancelPaymentInput;
};

export type IMutationCancelPointPaymentArgs = {
  paymentPointID: Scalars["String"];
};

export type IMutationCancelReportArgs = {
  reportID: Scalars["String"];
};

export type IMutationChangePrivateNovelIndexArgs = {
  novelIndexID: Scalars["String"];
};

export type IMutationComparePasswordArgs = {
  pwd: Scalars["String"];
};

export type IMutationCreateAnswerArgs = {
  createAnswerInput: ICreateAnswerInput;
  questionID: Scalars["String"];
};

export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};

export type IMutationCreateCommentArgs = {
  boardID: Scalars["String"];
  createCommentInput: ICreateCommentInput;
};

export type IMutationCreateEpisodeReviewArgs = {
  createEpisodeReviewInput: ICreateNovelIndexReviewInput;
};

export type IMutationCreateEventArgs = {
  createEventInput: ICreateEventInput;
};

export type IMutationCreateNoticeArgs = {
  createNoticeInput: ICreateNoticeInput;
};

export type IMutationCreateNovelArgs = {
  createNovelInput: ICreateNovelInput;
};

export type IMutationCreateNovelDonateArgs = {
  novelID: Scalars["String"];
};

export type IMutationCreateNovelIndexArgs = {
  input: ICreateNovelIndexInput;
};

export type IMutationCreateNovelLikeArgs = {
  novelID: Scalars["String"];
};

export type IMutationCreateNovelReviewArgs = {
  createReviewInput: ICreateNovelReviewInput;
  novel: Scalars["String"];
};

export type IMutationCreatePaymentArgs = {
  createPaymentInput: ICreatePaymentInput;
};

export type IMutationCreateQuestionArgs = {
  createQuestionInput: ICreateQuestionInput;
};

export type IMutationCreateReportArgs = {
  createReportInput: ICreateReportInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationCreateUserLikeArgs = {
  userID: Scalars["String"];
};

export type IMutationDeleteAnswerArgs = {
  answerID: Scalars["String"];
};

export type IMutationDeleteBoardArgs = {
  BoardID: Scalars["String"];
};

export type IMutationDeleteCommentArgs = {
  CommentID: Scalars["String"];
};

export type IMutationDeleteEpisodeReviewArgs = {
  ReviewID: Scalars["String"];
};

export type IMutationDeleteEventArgs = {
  eventID: Scalars["String"];
};

export type IMutationDeleteFileUploadArgs = {
  fileIDs: Array<Scalars["String"]>;
};

export type IMutationDeleteNoticeArgs = {
  noticeID: Scalars["String"];
};

export type IMutationDeleteNovelArgs = {
  novelID: Scalars["String"];
};

export type IMutationDeleteNovelDonateArgs = {
  novelDonateID: Scalars["String"];
};

export type IMutationDeleteNovelIndexArgs = {
  novelIndexID: Scalars["String"];
};

export type IMutationDeleteNovelLikeArgs = {
  novelLikeID: Scalars["String"];
};

export type IMutationDeleteNovelReviewArgs = {
  ReviewID: Scalars["String"];
};

export type IMutationDeleteQuestionArgs = {
  questionID: Scalars["String"];
};

export type IMutationDeleteUserLikeArgs = {
  userBlockID: Scalars["String"];
};

export type IMutationDonatePointArgs = {
  donateInput: IDonatePaymentPointInput;
};

export type IMutationPaidPointArgs = {
  novelIndexID: Scalars["String"];
};

export type IMutationRestoreAnswerArgs = {
  answerID: Scalars["String"];
};

export type IMutationRestoreEventArgs = {
  eventID: Scalars["String"];
};

export type IMutationRestoreNoticeArgs = {
  noticeID: Scalars["String"];
};

export type IMutationRestoreNovelArgs = {
  novelID: Scalars["String"];
};

export type IMutationRestoreNovelIndexArgs = {
  novelIndexID: Scalars["String"];
};

export type IMutationSwitchNovelLikeArgs = {
  novelID: Scalars["String"];
};

export type IMutationToggleBookmarkArgs = {
  createBookmarkInput: ICreateBookmarkDto;
};

export type IMutationUpdateAnswerArgs = {
  // updateAnswerInput: IUpdateAnswerInput;
};

export type IMutationUpdateBoardArgs = {
  // updateBoardInput: IUpdateBoardInput;
};

export type IMutationUpdateCommentArgs = {
  // updateCommentInput: IUpdateCommentInput;
};

export type IMutationUpdateEpisodeReviewArgs = {
  // updateEpisodeReviewInput: IUpdateNovelIndexReviewInput;
};

export type IMutationUpdateEventArgs = {
  // updateEventInput: IUpdateEventInput;
};

export type IMutationUpdateLoginUserArgs = {
  // updateInput: IUpdateUserInput;
};

export type IMutationUpdateNoticeArgs = {
  // updateNoticeInput: IUpdateNoticeInput;
};

export type IMutationUpdateNovelArgs = {
  // updateNovelInput: IUpdateNovelInput;
};

export type IMutationUpdateNovelIndexArgs = {
  // input: IUpdateNovelIndexInput;
};

export type IMutationUpdateNovelReviewArgs = {
  // updateNovelReviewInput: IUpdateNovelReviewInput;
};

export type IMutationUpdateQuestionArgs = {
  // updateQuestionInput: IUpdateQuestionInput;
};

export type IMutationUpdateUserPwdArgs = {
  pwd: Scalars["String"];
};

export type IMutationUploadFileArgs = {
  FILE_TYPE: IFile_Type;
  files: Array<Scalars["Upload"]>;
};

export type IMutationUploadFileWithThumbArgs = {
  FILE_TYPE: IFile_Type;
  files: Array<Scalars["Upload"]>;
};

/** 공지 Entity */
export type INoticeEntity = {
  __typename?: "NoticeEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  /** 상단 노출 여부 */
  isTop?: Maybe<Scalars["Boolean"]>;
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user?: Maybe<IUserEntity>;
};

/** 소설 카테고리 Entity */
export type INovelCategoryEntity = {
  __typename?: "NovelCategoryEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
};

/** 후원작 Entity */
export type INovelDonateEntity = {
  __typename?: "NovelDonateEntity";
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  // novel: INovelEntity;
  // user: IUserEntity;
};

/** 소설 Entity */
export type INovelEntity = {
  __typename?: "NovelEntity";
  /** 시작 시간 */
  createAt: Scalars["DateTime"];
  /** 연재 주기 */
  cycle: Scalars["String"];
  /** 설명 */
  description: Scalars["String"];
  files: Array<IFileEntity>;
  /** UUID */
  id: Scalars["ID"];
  /** 완결 여부 */
  isFinish: Scalars["Boolean"];
  /** 비공개 여부 */
  isPrivate: Scalars["Boolean"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  novelCategory: INovelCategoryEntity;
  // novelIndexs: Array<INovelIndexEntity>;
  // novelReviews: Array<INovelReviewEntity>;
  // novelTags: Array<INovelTagEntity>;
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
  /** 전체 조회수 */
  viewCount: Scalars["Int"];
};

/** NovelIndex Entity */
export type INovelIndexEntity = {
  __typename?: "NovelIndexEntity";
  /** 작가의 말 */
  authorText: Scalars["String"];
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 에피소드 UUID */
  id: Scalars["ID"];
  /** 몇 화 */
  index: Scalars["Int"];
  /** 완결 여부 */
  isFinish: Scalars["Boolean"];
  /** 공지 여부 */
  isNotice: Scalars["Boolean"];
  /** 비공개 여부 */
  isPrivate: Scalars["Boolean"];
  novel: INovelEntity;
  // novelIndexReviews: Array<INovelIndexReviewEntity>;
  /** 평균 별점 */
  star: Scalars["Float"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user?: Maybe<IUserEntitsy>;
  /** 조회수 */
  viewCount: Scalars["Int"];
};

/** 편당 리뷰 Entity */
export type INovelIndexReviewEntity = {
  __typename?: "NovelIndexReviewEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 싫어요 갯수 */
  dislikeCount: Scalars["Int"];
  /** UUID */
  id: Scalars["ID"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  novelIndex: INovelIndexEntity;
  /** 평점 */
  star: Scalars["Float"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

/** 선호작 Entity */
export type INovelLikeEntity = {
  __typename?: "NovelLikeEntity";
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  novel: INovelEntity;
  // user: IUserEntity;
};

/** 소설 리뷰 Entity */
export type INovelReviewEntity = {
  __typename?: "NovelReviewEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 싫어요 갯수 */
  dislikeCount: Scalars["Int"];
  /** UUID */
  id: Scalars["ID"];
  /** 좋아요 갯수 */
  likeCount: Scalars["Int"];
  novel: INovelEntity;
  /** 평점 */
  star: Scalars["Float"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

/** NovelTag Entity */
export type INovelTagEntity = {
  __typename?: "NovelTagEntity";
  /** UUID */
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  novels: Array<INovelEntity>;
};

/** 결제 Entity */
export type IPaymentEntity = {
  __typename?: "PaymentEntity";
  /** 결제 금액 */
  amount: Scalars["Int"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  /** 아임포트 UID */
  impUid: Scalars["String"];
  /** 아임포트 상품 UID */
  merchantUid: Scalars["String"];
  // product: IProductEntity;
  /** 취소 사유 */
  reason?: Maybe<Scalars["String"]>;
  // status: IPaymentStatusEntity;
  // user: IUserEntity;
};

/** 포인트 결제 Entity */
export type IPaymentPointEntity = {
  __typename?: "PaymentPointEntity";
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  novel?: Maybe<INovelEntity>;
  novelIndex?: Maybe<INovelIndexEntity>;
  /** 가격 */
  point: Scalars["Int"];
  // status?: Maybe<IPaymentPointStatusEntity>;
  // user?: Maybe<IUserEntity>;
};

/** 포인트 결제 상태 Entity */
export type IPaymentPointStatusEntity = {
  __typename?: "PaymentPointStatusEntity";
  /** 설명 */
  description: Scalars["String"];
  /** KEY */
  id: Scalars["String"];
};

/** 결제 상태 Entity */
export type IPaymentStatusEntity = {
  __typename?: "PaymentStatusEntity";
  /** 설명 */
  description: Scalars["String"];
  /** KEY */
  id: Scalars["String"];
};

/** 핸드폰 인증 Entity */
export type IPhoneEntity = {
  __typename?: "PhoneEntity";
  id: Scalars["ID"];
  /** 핸드폰 인증 여부 */
  isAuth: Scalars["Boolean"];
  /** 핸드폰 번호 */
  phone?: Maybe<Scalars["String"]>;
  /** 토큰 */
  token?: Maybe<Scalars["String"]>;
  /** 인증 완료 시간 */
  updateAt: Scalars["DateTime"];
  // user: IUserEntity;
};

export type IPhoneInput = {
  /** 핸드폰 번호 */
  phone?: InputMaybe<Scalars["String"]>;
  /** 토큰 */
  token?: InputMaybe<Scalars["String"]>;
};

/** 회원 조회용 Output Class */
export type IPhoneOutput = {
  __typename?: "PhoneOutput";
  /** 핸드폰 인증 여부 */
  isAuth: Scalars["Boolean"];
  /** 인증 완료 시간 */
  updateAt: Scalars["DateTime"];
};

/** 상품 Entity */
export type IProductEntity = {
  __typename?: "ProductEntity";
  /** 설명 */
  description: Scalars["String"];
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  /** 제공하는 포인트 */
  point: Scalars["Int"];
  /** 가격 */
  price: Scalars["Int"];
};

export type IQuery = {
  __typename?: "Query";
  /** 임시 저장된 데이터가 있는지 확인 */
  CheckTempStorageValid: Scalars["Boolean"];
  /** 임시 저장된 데이터 가져오기 */
  // GetTempStorageValue: ITempStorageOutput;
  /** 답변 단일 조회 */
  fetchAnswer: IAnswerEntity;
  /** 모든 답변 조회 */
  fetchAnswerAll: Array<IAnswerEntity>;
  /** 특정 게시글 조회 */
  fetchBoard: IBoardEntity;
  /** 게시글 전체 갯수 */
  fetchBoardAllCount: Scalars["Int"];
  /** 유저가 쓴 게시글 조회 */
  fetchBoards: Array<IBoardEntity>;
  /** 게시글 전체 조회 */
  fetchBoardsAll: Array<IBoardEntity>;
  /** 게시판 목록 조회 ( page ) */
  fetchBoardsPage: Array<IBoardEntity>;
  /** 북마크 목록 조회 */
  fetchBookmarksInUser: Array<IBookmarkEntity>;
  /** 특정 댓글 조회 */
  fetchComment: ICommentEntity;
  /** 유저가 쓴 댓글 조회 */
  fetchComments: Array<ICommentEntity>;
  /** 모든 댓글 조회  */
  fetchCommentsAll: Array<ICommentEntity>;
  /** 해당 게시글의 모든 댓글 조회 */
  fetchCommentsFromBoard: Array<ICommentEntity>;
  /** 후원 결제 목록 */
  fetchDonatePoints: Array<IPaymentPointEntity>;
  /** 에피소드 단일 조회 */
  fetchEpisodeDetail: INovelIndexEntity;
  /** 해당 에피소드의 리뷰 조회, Page */
  fetchEpisodeReviewPage: IFetchEpisodeReviewOutput;
  /** 모든 이벤트 조회 */
  fetchEventsAll: Array<IEventEntity>;
  /** 회원 단일 조회, Bearer JWT */
  // fetchLoginUser?: Maybe<IUserOutput>;
  /** 내가 쓴 소설 Detail 조회 */
  fetchMyNovelDetail: INovelEntity;
  /** 내가 쓴 소설 목록 조회, page */
  fetchMyNovels: IFetchNovelsOutput;
  /** 모든 공지사항 조회 */
  fetchNoticesAll: Array<INoticeEntity>;
  /** 소설 카테고리 전체 목록 조회 */
  fetchNovelCategorysAll: Array<INovelCategoryEntity>;
  /** 소설 Detail 조회 */
  fetchNovelDetail: INovelEntity;
  /** 후원작 목록 */
  fetchNovelDonateInUser: Array<INovelDonateEntity>;
  /** 선호작 목록 */
  fetchNovelLikeInUser: Array<INovelLikeEntity>;
  /** 소설 리뷰 조회, Page */
  fetchNovelReviewPage: IFetchNovelReviewsOutput;
  /** 태그로 소설 찾기 */
  fetchNovelTagsAll: Array<INovelTagEntity>;
  /** 작품 목록 조회 */
  fetchNovelsPage: IFetchNovelsOutput;
  /** 에피소드 ( 회차 ) 결제 목록 */
  fetchPaidPoints: Array<IPaymentPointEntity>;
  /** 회원 결제 목록, Pagenation */
  fetchPaymentsInUser: IFetchPaymentOutput;
  /** 모든 상품 목록 가져오기 */
  fetchProductsAll: Array<IProductEntity>;
  /** 문의사항 단일 조회 */
  // fetchQuestion: IQuestionEntity;
  /** 모든 문의 조회 */
  // fetchQuestionAll: Array<IQuestionEntity>;
  /** 키워드로 게시글 조회 */
  fetchTargetBoards: Array<IBoardEntity>;
  /** 차단 회원 목록 */
  // fetchUserBlockInUser: Array<IUserBlockEntity>;
  /** 선호 작가 목록 */
  // fetchUserLikeInUser: Array<IUserLikeEntity>;
  /** 유저가 쓴 소설 리뷰 조회 */
  fetchUserNovelReview: Array<INovelReviewEntity>;
};

export type IQueryCheckTempStorageValidArgs = {
  // TEMP_TYPE: ITemp_Type;
};

export type IQueryGetTempStorageValueArgs = {
  // TEMP_TYPE: ITemp_Type;
};

export type IQueryFetchAnswerArgs = {
  answerID: Scalars["String"];
};

export type IQueryFetchBoardArgs = {
  boardID: Scalars["String"];
};

export type IQueryFetchBoardsPageArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchCommentArgs = {
  commentID: Scalars["String"];
};

export type IQueryFetchCommentsFromBoardArgs = {
  boardID: Scalars["String"];
};

export type IQueryFetchDonatePointsArgs = {
  page: Scalars["Int"];
};

export type IQueryFetchEpisodeDetailArgs = {
  novelIndexID: Scalars["String"];
};

export type IQueryFetchEpisodeReviewPageArgs = {
  episodeID: Scalars["String"];
  page: Scalars["Int"];
};

export type IQueryFetchMyNovelDetailArgs = {
  novelID: Scalars["String"];
};

export type IQueryFetchMyNovelsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchNovelDetailArgs = {
  novelID: Scalars["String"];
};

export type IQueryFetchNovelReviewPageArgs = {
  novelID: Scalars["String"];
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchNovelsPageArgs = {
  fetchNovelInput: IFetchNovelInput;
  // searchInput?: InputMaybe<ISearchNovelInput>;
};

export type IQueryFetchPaidPointsArgs = {
  page: Scalars["Int"];
};

export type IQueryFetchPaymentsInUserArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchQuestionArgs = {
  questionID: Scalars["String"];
};

export type IQueryFetchTargetBoardsArgs = {
  keyword: Scalars["String"];
};

/** 문의 Entity */
export type IQuestionEntity = {
  __typename?: "QuestionEntity";
  answer: IAnswerEntity;
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** UUID */
  id: Scalars["ID"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  // user?: Maybe<IUserEntity>;
};

/** 신고 Type */
export enum IReport_Type {}
// Board = "BOARD",
// Comment = "COMMENT",
// Novel = "NOVEL",
// Novelindex = "NOVELINDEX",
// Novelindexreview = "NOVELINDEXREVIEW",
// Novelreview = "NOVELREVIEW",
// User = "USER",

/** Report Entity */
export type IReportEntity = {
  __typename?: "ReportEntity";
  /** 내용 */
  contents: Scalars["String"];
  /** 생성 시간 */
  createAt: Scalars["DateTime"];
  /** 신고 ENUM */
  // enum: IReportEnumEntity;
  /** UUID */
  id: Scalars["ID"];
  /** 신고 대상 UUID */
  reportUUID: Scalars["String"];
  /** 제목 */
  title: Scalars["String"];
  /** 수정 시간 */
  updateAt: Scalars["DateTime"];
  /** 신고한 회원 */
  // user: IUserEntity;
};

/** 신고 Enum Entity */
export type IReportEnumEntity = {
  __typename?: "ReportEnumEntity";
  /** 설명 */
  description: Scalars["String"];
  /** ID */
  id: Scalars["ID"];
  /** 테이블 이름 */
  table: Scalars["String"];
};

/** 결과 메세지 */
export type IResultMessage = {
  __typename?: "ResultMessage";
  /** 대상 ID */
  id?: Maybe<Scalars["String"]>;
  /** 성공 여부 */
  isSuccess: Scalars["Boolean"];
  /** Message */
  msg: Scalars["String"];
};

export type ISearchNovelInput = {
  keyword: Scalars["String"];
  // type?: InputMaybe<ISearchNovelType>;
};

/** 소설 검색 type */
export enum ISearchNovelType {}
// All = "ALL",
// Nickname = "NICKNAME",
// Tag = "TAG",
// Title = "TITLE",

/** 임시 저장 타입 ENUM */
export enum ITemp_Type {}
// Board = "BOARD",
// Novel = "NOVEL",

export type ITempStorageInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** 태그 */
  tags: Array<Scalars["String"]>;
  /** 제목 */
  title: Scalars["String"];
};

export type ITempStorageOutput = {
  __typename?: "TempStorageOutput";
  /** 내용 */
  contents: Scalars["String"];
  /** 태그 */
  tags: Array<Scalars["String"]>;
  /** 제목 */
  title: Scalars["String"];
};

/** 회원 조회용 Output Class */
export type IToUserOutput = {
  __typename?: "ToUserOutput";
  /** 이메일 */
  email: Scalars["String"];
  id: Scalars["ID"];
  /** 닉네임 */
  nickName: Scalars["String"];
};

export type IUpdateAnswerInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 원본 답변 UUID */
  id: Scalars["String"];
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateBoardInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 파일 URLs */
  fileURLs?: InputMaybe<Array<Scalars["String"]>>;
  /** 원본 UUID */
  id: Scalars["String"];
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateCommentInput = {
  /** 대댓글 */
  children?: InputMaybe<Array<Scalars["String"]>>;
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 원본 UUID */
  id: Scalars["String"];
  /** 댓글 */
  parent?: InputMaybe<Scalars["String"]>;
};

export type IUpdateEventInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 이벤트 종료 시간 */
  endAt?: InputMaybe<Scalars["DateTime"]>;
  /** 원본 이벤트 UUID */
  id: Scalars["String"];
  /** 이벤트 진행 여부 */
  isEvent?: InputMaybe<Scalars["Boolean"]>;
  /** 이벤트 시작 시간 */
  startAt?: InputMaybe<Scalars["DateTime"]>;
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateNoticeInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 원본 공지사항 UUID */
  id: Scalars["String"];
  /** 상단 노출 여부 */
  isTop?: InputMaybe<Scalars["Boolean"]>;
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateNovelIndexInput = {
  /** 작가의 말 */
  authorText?: InputMaybe<Scalars["String"]>;
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 에피소드 UUID */
  id?: InputMaybe<Scalars["ID"]>;
  /** 완결 여부 */
  isFinish?: InputMaybe<Scalars["Boolean"]>;
  /** 공지 여부 */
  isNotice?: InputMaybe<Scalars["Boolean"]>;
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateNovelIndexReviewInput = {
  /** 내용 */
  contents: Scalars["String"];
  /** UUID */
  id: Scalars["ID"];
  /** 평점 */
  star: Scalars["Float"];
};

export type IUpdateNovelInput = {
  /** 소설 카테고리 ID. (UUID) */
  categoryID?: InputMaybe<Scalars["String"]>;
  /** 연재 주기. ex. [MON, THU, WED, ...] or [FREE] */
  cycles?: InputMaybe<Array<ICycle_Type>>;
  /** 설명 */
  description?: InputMaybe<Scalars["String"]>;
  /** 파일 URLs */
  fileURLs?: InputMaybe<Array<Scalars["String"]>>;
  /** UUID */
  id: Scalars["String"];
  /** 태그 목록. ex. ['#태그 1', '#태그 2'] */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateNovelReviewInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 리뷰 UUID  */
  id: Scalars["String"];
  /** 평점 */
  star?: InputMaybe<Scalars["Float"]>;
};

export type IUpdateQuestionInput = {
  /** 내용 */
  contents?: InputMaybe<Scalars["String"]>;
  /** 원본 문의 UUID */
  id: Scalars["String"];
  /** 제목 */
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUserInput = {
  /** 이메일 */
  email?: InputMaybe<Scalars["String"]>;
  /** 이름 */
  name?: InputMaybe<Scalars["String"]>;
  /** 닉네임 */
  nickName?: InputMaybe<Scalars["String"]>;
};

/** 차단 회원 Entity */
export type IUserBlockEntity = {
  __typename?: "UserBlockEntity";
  /** 등록한 시간 */
  createAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** 대상 회원 */
  // to: IUserEntity;
};

/** 회원 조회용 Output Class */
export type IUserBlockOutput = {
  __typename?: "UserBlockOutput";
  /** 등록한 시간 */
  createAt: Scalars["DateTime"];
  /** 대상 회원 정보 */
  to: IToUserOutput;
};

/** 회원 등급 Entity */
export type IUserClassEntity = {
  __typename?: "UserClassEntity";
  /** KEY */
  id: Scalars["String"];
};

/** 회원 조회용 Output Class */
export type IUserClassOutput = {
  __typename?: "UserClassOutput";
  /** KEY */
  id: Scalars["String"];
};

/** 유저 Entity */
export type IUserEntity = {
  __typename?: "UserEntity";
  authEmail: IEmailEntity;
  authPhone: IPhoneEntity;
  boards: Array<IBoardEntity>;
  /** 이메일 */
  email: Scalars["String"];
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  /** 닉네임 */
  nickName: Scalars["String"];
  novelDonates: Array<INovelDonateEntity>;
  novelLikes: Array<INovelLikeEntity>;
  paymentPoints: Array<IPaymentPointEntity>;
  payments: Array<IPaymentEntity>;
  /** 핸드폰 번호 */
  phone?: Maybe<Scalars["String"]>;
  /** 포인트 */
  point: Scalars["Int"];
  userBlocks: Array<IUserBlockEntity>;
  userClass: IUserClassEntity;
  // userLikes: Array<IUserLikeEntity>;
};

/** 선호 작가 Entity */
export type IUserLikeEntity = {
  __typename?: "UserLikeEntity";
  /** 등록한 시간 */
  createAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** 대상 회원 */
  to: IUserEntity;
};

/** 회원 조회용 Output Class */
export type IUserLikeOutput = {
  __typename?: "UserLikeOutput";
  /** 등록한 시간 */
  createAt: Scalars["DateTime"];
  /** 대상 회원 정보 */
  to: IToUserOutput;
};

/** 회원 조회용 Output Class */
export type IUserOutput = {
  __typename?: "UserOutput";
  /** 이메일 인증 */
  authEmail: IEmailOutput;
  /** 핸드폰 인증 */
  authPhone: IPhoneOutput;
  /** 작성한 게시글 목록 */
  boards: Array<IBoardOutput>;
  /** 이메일 */
  email: Scalars["String"];
  /** 회원 UUID */
  id: Scalars["ID"];
  /** 이름 */
  name: Scalars["String"];
  /** 닉네임 */
  nickName: Scalars["String"];
  /** 핸드폰 번호 */
  phone: Scalars["String"];
  /** 소지 금액 */
  point: Scalars["Int"];
  /** 차단 회원 목록 */
  userBlocks: Array<IUserBlockOutput>;
  /** 회원 등급 */
  userClass: IUserClassOutput;
  /** 선호 작가 목록 */
  userLikes: Array<IUserLikeOutput>;
};
