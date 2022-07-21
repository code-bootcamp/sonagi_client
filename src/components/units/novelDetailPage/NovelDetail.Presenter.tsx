import Button01 from "../../commons/buttons/01";
import * as S from "./NovelDetail.Styles";
import DOMPurify from "dompurify";
import { getDateDay } from "../../../commons/libraries/utils";
import DetailCommentWriteContainer from "../novelDetailComment/commentWrite/CommentWrite.container";
import DetailCommentListContainer from "../novelDetailComment/commentList/CommentList.container";
import DonatePage from "../../commons/modal/donatePayments";
import { INovelDetailPresenterProps } from "./NovelDetail.types";
import Button04 from "../../commons/buttons/04";
import Button02 from "../../commons/buttons/02";
const myImg = /^.*[.(jpg | svg | png | jpeg | gif  | webp)]$/g;
export default function NovelDetailPresenter(
  props: INovelDetailPresenterProps
) {
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
                <S.TopFont>장르</S.TopFont>
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
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.Score>{props.detailData?.fetchNovelDetail.star}점</S.Score>
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
                <S.Divs>|</S.Divs>
                <S.Divs>
                  총{" "}
                  {String(
                    props.detailData?.fetchNovelDetail.novelIndexs.length
                  ).padStart(2, "0")}
                  화
                </S.Divs>
                <S.Divs>|</S.Divs>
                <S.Divs>
                  {props.detailData?.fetchNovelDetail.novelIndexs[0]?.isFinish
                    ? "완결"
                    : "연재중"}
                </S.Divs>
              </S.Flexs>
            </S.ProfileWrapper>
            <S.Line />
            {props.detailData?.fetchNovelDetail.user.id ===
            props.LoginData?.fetchLoginUser.id ? (
              <S.LookButtonWrapper>
                <Button02
                  title="삭제하기"
                  onClick={props.onClickDelete}
                ></Button02>
                <Button04 title="수정하기" onClick={props.onClickEdit} />
                <Button01
                  title="회차작성"
                  onClick={props.onClickMoveToVolumeWrite}
                />
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
                // onChange={props.onClickCheckAll}
                // checked={props.checkList.length === props.dataList?.length}
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
              <S.All>총 0화</S.All>
              <S.Sum>0원</S.Sum>
              {/* <S.Cart>카트</S.Cart> */}
              <S.Borrows>선택대여</S.Borrows>
            </S.MarginWrapper>
          </S.TableLineWrapper>
          {/* <S.TableDottedLine /> */}
          {props.isFirst ? (
            <>
              {props.detailData?.fetchNovelDetail.novelIndexs
                .map((el: any) => (
                  <S.TableLineWrapper key={el.id}>
                    <S.WrapFirst>
                      <S.Square
                        // id={props.detailData?.fetchNovelDetail.novelIndexs.index}
                        type="checkbox"
                        // onChange={() => props.onCheckedItem(props.list)}
                        // checked={props.isChecked(props.list)}
                      />
                      <S.TableSonWrapper>
                        <S.Title>
                          {el.index}화: {el.title}
                        </S.Title>
                        <S.WrapDate>
                          <S.Date>{getDateDay(el.createAt)}</S.Date>
                          <S.Date>{el.viewCount}명</S.Date>
                          <S.VerticalLine />
                          <S.SumCharacter>
                            약 {el.contents.length}자
                          </S.SumCharacter>
                        </S.WrapDate>
                      </S.TableSonWrapper>
                    </S.WrapFirst>
                    <S.LookWrapper>
                      {props.detailData?.fetchNovelDetail.user.id ===
                      props.LoginData?.fetchLoginUser.id ? (
                        <>
                          <S.LookBtn
                            id={el.id}
                            onClick={props.onClickIndexDelete}
                          >
                            삭제
                          </S.LookBtn>
                          <S.LookBtn
                            id={el.id}
                            onClick={props.onClickMoveToRead}
                          >
                            보기
                          </S.LookBtn>
                        </>
                      ) : (
                        ""
                      )}
                      {el.isBuy || Number(el.index) < 4 ? (
                        <S.LookBtn id={el.id} onClick={props.onClickMoveToRead}>
                          보기
                        </S.LookBtn>
                      ) : (
                        <S.LookBtn id={el.id} onClick={props.onClickPayment}>
                          구매
                        </S.LookBtn>
                      )}
                      {props.detailData?.fetchNovelDetail.user.id ===
                      props.LoginData?.fetchLoginUser.id ? (
                        <S.LookContent
                          id={el.id}
                          // checkedChildren="공개"
                          // unCheckedChildren="비공개"
                          // defaultChecked
                          onClick={props.onClickPrivate}
                        >
                          공개
                        </S.LookContent>
                      ) : (
                        ""
                      )}
                    </S.LookWrapper>
                  </S.TableLineWrapper>
                ))
                .reverse()}
            </>
          ) : (
            <>
              {props.detailData?.fetchNovelDetail.novelIndexs.map((el: any) => (
                <S.TableLineWrapper key={el.id}>
                  <S.WrapFirst>
                    <S.Square
                      // id={props.detailData?.fetchNovelDetail.novelIndexs.index}
                      type="checkbox"
                      // onChange={() => props.onCheckedItem(props.list)}
                      // checked={props.isChecked(props.list)}
                    />
                    <S.TableSonWrapper>
                      <S.Title>
                        {el.index}화: {el.title}
                      </S.Title>
                      <S.WrapDate>
                        <S.Date>{getDateDay(el.createAt)}</S.Date>
                        <S.Date>{el.viewCount}명</S.Date>
                        <S.VerticalLine />
                        <S.SumCharacter>
                          약 {el.contents.length}자
                        </S.SumCharacter>
                      </S.WrapDate>
                    </S.TableSonWrapper>
                  </S.WrapFirst>
                  <S.LookWrapper>
                    {props.detailData?.fetchNovelDetail.user.id ===
                    props.LoginData?.fetchLoginUser.id ? (
                      <>
                        <S.LookBtn
                          id={el.id}
                          onClick={props.onClickIndexDelete}
                        >
                          삭제
                        </S.LookBtn>
                        <S.LookBtn id={el.id} onClick={props.onClickMoveToRead}>
                          보기
                        </S.LookBtn>
                      </>
                    ) : (
                      ""
                    )}
                    {el.isBuy || Number(el.index) < 4 ? (
                      <S.LookBtn id={el.id} onClick={props.onClickMoveToRead}>
                        보기
                      </S.LookBtn>
                    ) : (
                      <S.LookBtn id={el.id} onClick={props.onClickPayment}>
                        구매
                      </S.LookBtn>
                    )}
                    {props.detailData?.fetchNovelDetail.user.id ===
                    props.LoginData?.fetchLoginUser.id ? (
                      <S.LookContent
                        id={el.id}
                        // checkedChildren="공개"
                        // unCheckedChildren="비공개"
                        // defaultChecked
                        onClick={props.onClickPrivate}
                      >
                        공개
                      </S.LookContent>
                    ) : (
                      ""
                    )}
                  </S.LookWrapper>
                </S.TableLineWrapper>
              ))}
            </>
          )}
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
          <DetailCommentWriteContainer />
          <DetailCommentListContainer />
        </S.WrapFooter>
      </S.Wrapper>
    </div>
  );
}
