import * as S from "./NovelDetail.Styles";
import DOMPurify from "dompurify";
import { getDateDay } from "../../../commons/libraries/utils";
import DetailCommentWriteContainer from "../novelDetailComment/commentWrite/CommentWrite.container";
import DetailCommentListContainer from "../novelDetailComment/commentList/CommentList.container";
import DonatePage from "../../commons/modal/donatePayments";
import { INovelDetailPresenterProps, INovelEl } from "./NovelDetail.types";

const myImg = /^.*[.(jpg | svg | png | jpeg | gif  | webp)]$/g;
export default function NovelDetailPresenter(
  props: INovelDetailPresenterProps
) {
  const Writer =
    props.detailData?.fetchNovelDetail.user.id ===
    props.LoginData?.fetchLoginUser.id;

  return (
    <div>
      <S.Wrapper>
        <S.FlexWrapper>
          {/* <S.WrapImage> */}
          <S.NovelImage
            src={
              new RegExp(myImg, "i").test(
                props.detailData?.fetchNovelDetail.files[0].url
              )
                ? `https://storage.googleapis.com/code-camp-main-project/${props.detailData?.fetchNovelDetail.files[0].url}`
                : "/novelList/noImage.png"
            }
          />
          {/* </S.WrapImage> */}
          <S.ColumnWrapper>
            <S.Genre>
              <S.LeftWrapper>
                <S.TopFont>장르.</S.TopFont>
                {/* <S.SmallArrow src="/novelDetail/Polygon.png" /> */}
                <S.Arrow>{">"}</S.Arrow>
                <S.TopFont>
                  {props.detailData?.fetchNovelDetail.novelCategory.name || ""}
                </S.TopFont>
              </S.LeftWrapper>
              <S.HeartWrapper
                disabled={props.isSubmitting === true}
                onClick={props.onClickLike}
              >
                <S.HeartImg
                  src={
                    props.Heart
                      ? "/novelDetail/heart.png"
                      : "/novelRead/heart.png"
                  }
                />
                <S.HeartCount>
                  {props.detailData?.fetchNovelDetail.likeCount}
                </S.HeartCount>
              </S.HeartWrapper>
            </S.Genre>
            <S.NovelTitle>
              {props.detailData?.fetchNovelDetail.title}
            </S.NovelTitle>
            <S.StarWrapper>
              <S.Star
                allowHalf
                value={props.detailData?.fetchNovelDetail.star}
                disabled
              />
              <S.Score>
                {Number(props.detailData?.fetchNovelDetail.star).toFixed(2)}점
              </S.Score>
              <S.Count>
                {props.detailData?.fetchNovelDetail.viewCount} 명
              </S.Count>
            </S.StarWrapper>
            <S.ProfileWrapper>
              <S.Flexs>
                <S.WrapWriter>
                  <S.WriterImg src="/novelDetail/profile.jpg" />
                  <S.WriterFont>
                    {props.detailData?.fetchNovelDetail.user.nickName}
                  </S.WriterFont>
                </S.WrapWriter>
                <S.WrapDiv>
                  <S.Divsl>|</S.Divsl>
                  <S.Divs>
                    총{" "}
                    {String(
                      props.detailData?.fetchNovelDetail.novelIndexs.length
                    ).padStart(2, "0")}
                    화
                  </S.Divs>
                  <S.Divs>|</S.Divs>
                  <S.Divs>
                    {props.detailData?.fetchNovelDetail.isFinish
                      ? "완결"
                      : "연재중"}
                  </S.Divs>
                </S.WrapDiv>
              </S.Flexs>
            </S.ProfileWrapper>
            <S.Line />
            {Writer ? (
              <S.LookButtonWrapper>
                <S.Button2 onClick={props.onClickDelete}>삭제하기</S.Button2>
                <S.Button5 onClick={props.onClickEdit}>수정하기</S.Button5>
                <S.Button1 onClick={props.onClickMoveToVolumeWrite}>
                  회차작성
                </S.Button1>
              </S.LookButtonWrapper>
            ) : (
              <S.LookButtonWrapper2>
                <S.Button4 onClick={props.onClickFirstView}>첫화보기</S.Button4>
                {/* <Button01 title="이어보기" /> */}
                <S.Button1 onClick={props.onClickDonate}>후원하기</S.Button1>
                {props.isDonate && (
                  <DonatePage
                    novelID={props.novelID}
                    setIsDonate={props.setIsDonate}
                  />
                )}
              </S.LookButtonWrapper2>
            )}
          </S.ColumnWrapper>
        </S.FlexWrapper>
        <S.WrapBody>
          <div>
            <S.TableLine />
          </div>
          <S.TableLineWrapper>
            <S.WrapFirst>
              <S.Square
                onChange={props.onClickCheckAll}
                checked={props.checkList.length === props.buyList?.length}
                type="checkbox"
              />
              <S.SelectAll>전체선택</S.SelectAll>
              <S.SortButton>
                <S.ArrowImg src="/novelDetail/Arrow 1.png" />
                <S.ArrowImg src="/novelDetail/Arrow 2.png" />
                <S.New onClick={props.onClickFirst}>
                  {props.isFirst ? "신간부터" : "1권 부터"}
                </S.New>
              </S.SortButton>
            </S.WrapFirst>
            <S.MarginWrapper>
              <S.All>총 {props.checkList.length}화</S.All>
              <S.Sum>{props.checkList.length * 100}원</S.Sum>
              {/* <S.Cart>카트</S.Cart> */}
              <S.Borrows onClick={props.onClickSelectPayment}>
                선택구매
              </S.Borrows>
            </S.MarginWrapper>
          </S.TableLineWrapper>
          {/* <S.TableDottedLine /> */}
          <S.WrapEpisode isFirst={props.isFirst}>
            {props.detailData?.fetchNovelDetail.novelIndexs.map(
              (el: INovelEl) => (
                <S.TableLineWrapper key={el.id}>
                  <S.WrapFirst>
                    <S.Square
                      // id={props.detailData?.fetchNovelDetail.novelIndexs.index}
                      type="checkbox"
                      onChange={() => props.onCheckedItem(el)}
                      checked={props.isChecked(el)}
                      disabled={el.isBuy || el.index <= 3 || el.isNotice}
                    />
                    <S.TableSonWrapper>
                      <S.Title>
                        {el?.isNotice ? "[공지]: " : `${el.index}화: `}
                        {el.title}
                      </S.Title>
                      <S.WrapDate>
                        <S.Date>{getDateDay(el.createAt)}</S.Date>
                        <S.Date>{el.viewCount}명</S.Date>
                        <S.VerticalLine />
                        <S.SumCharacter>
                          약{" "}
                          {el.contents
                            ?.replace(/<[^>]*>?/g, "")
                            .length.toLocaleString("ko-KR")}
                          자
                        </S.SumCharacter>
                      </S.WrapDate>
                    </S.TableSonWrapper>
                  </S.WrapFirst>
                  <S.LookWrapper>
                    {Writer && (
                      <S.Wrap>
                        <S.LookBtn
                          id={el.id}
                          onClick={props.onClickIndexDelete}
                        >
                          삭제
                        </S.LookBtn>
                        <S.LookBtn id={el.id} onClick={props.onClickMoveToRead}>
                          보기
                        </S.LookBtn>
                        <S.LookBtn
                          id={el.id}
                          onClick={props.onClickEditEpisode}
                        >
                          수정
                        </S.LookBtn>
                      </S.Wrap>
                    )}
                    {Writer || (
                      <>
                        {el.isBuy || Number(el.index) <= 3 || el.isNotice ? (
                          <S.LookBtn
                            id={el.id}
                            onClick={props.onClickMoveToRead}
                          >
                            보기
                          </S.LookBtn>
                        ) : (
                          <S.LookBtn id={el.id} onClick={props.onClickPayment}>
                            구매
                          </S.LookBtn>
                        )}
                      </>
                    )}
                  </S.LookWrapper>
                </S.TableLineWrapper>
              )
            )}
          </S.WrapEpisode>
        </S.WrapBody>
        <S.Margin />
        <S.WrapFooter>
          <S.FooterLabel>소설 키워드</S.FooterLabel>
          <S.TagsWrapper>
            {props.detailData?.fetchNovelDetail.novelTags
              ?.filter((el: any) => el)
              .map((el: any) => (
                <S.Tags key={el}># {el.name}</S.Tags>
              ))}
          </S.TagsWrapper>

          <S.FooterLabel>작품 소개</S.FooterLabel>

          <S.NovelRemarks>
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.detailData?.fetchNovelDetail.description
                  ),
                }}
              ></div>
            ) : (
              ""
            )}
          </S.NovelRemarks>
          <S.FooterLabel>리뷰</S.FooterLabel>
          <DetailCommentWriteContainer
            setIsEdit={undefined}
            isEdit={undefined}
          />
          <DetailCommentListContainer />
        </S.WrapFooter>
      </S.Wrapper>
    </div>
  );
}
