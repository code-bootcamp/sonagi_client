import Button01 from "../../commons/buttons/01";
import Button02 from "../../commons/buttons/02";
import * as S from "./NovelDetail.Styles";
import DOMPurify from "dompurify";
import { getDateDay } from "../../../commons/libraries/utils";

export default function NovelDetailPresenter(props) {
  return (
    <div>
      <div>
        <S.FlexWrapper>
          <S.NovelImage
            src={`https://storage.googleapis.com/code-camp-main-project/${props.detailData?.fetchNovelDetail.files[0].url}`}
          />

          <S.ColumnWrapper>
            <S.Genre>
              <S.TopFont>장르</S.TopFont>
              {/* <S.SmallArrow src="/novelDetail/Polygon.png" /> */}
              <S.Arrow>{">"}</S.Arrow>
              <S.TopFont>
                {props.detailData?.fetchNovelDetail.novelCategory.name}
              </S.TopFont>
            </S.Genre>

            <S.NovelTitle>
              {props.detailData?.fetchNovelDetail.title}
            </S.NovelTitle>
            <S.ProfileWrapper>
              <S.WrapWriter>
                <S.WriterImg src="/novelDetail/profile.jpg" />
                <S.WriterFont>
                  {props.detailData?.fetchNovelDetail.user.nickName}
                </S.WriterFont>
              </S.WrapWriter>
              <S.Flexs>
                <S.Divs>
                  총{" "}
                  {String(
                    props.detailData?.fetchNovelDetail.novelIndexs.length
                  ).padStart(2, "0")}
                  화
                </S.Divs>
                <S.Divs>|</S.Divs>
                <S.Divs>
                  {props.detailData?.fetchNovelDetail.novelIndexs.isFinish
                    ? "완결"
                    : "연재중"}
                </S.Divs>
              </S.Flexs>
            </S.ProfileWrapper>
            <S.StarWrapper>
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.StarImg src="/novelDetail/star.png" />
              <S.Score>5점</S.Score>
              <S.Count>
                {props.detailData?.fetchNovelDetail.viewCount} 명
              </S.Count>
            </S.StarWrapper>

            <S.Line />

            <div>후원할 금액</div>
            <input type="text" onChange={props.onChangeDonate} />
          </S.ColumnWrapper>
        </S.FlexWrapper>
        <S.ButtonWrapper>
          <S.HeartWrapper onClick={props.onClickLike}>
            <S.HeartImg src="/novelDetail/HeartImg.png" />
            <S.HeartCount>
              {props.detailData?.fetchNovelDetail.likeCount}
            </S.HeartCount>
          </S.HeartWrapper>
          <S.LookButtonWrapper>
            <Button02 title="첫화보기" />
            {/* <Button01 title="이어보기" /> */}
            <Button01 onClick={props.onClickDonate} title="후원하기" />
          </S.LookButtonWrapper>
        </S.ButtonWrapper>
        <div>
          <S.TableLine />
          <S.TableTop>
            <S.Borrow>대여하기</S.Borrow>
            <S.Get>소장하기</S.Get>
          </S.TableTop>
        </div>
        <S.TableLineWrapper>
          <S.WrapFirst>
            <S.Square type="checkbox" />
            <S.SelectAll>전체선택</S.SelectAll>
            <S.SortButton>
              <S.ArrowImg src="/novelDetail/Arrow 1.png" />
              <S.ArrowImg src="/novelDetail/Arrow 2.png" />
              <S.New>신간부터</S.New>
            </S.SortButton>
          </S.WrapFirst>
          <S.MarginWrapper>
            <S.All>총 0화</S.All>
            <S.Sum>0원</S.Sum>
            <S.Cart>카트</S.Cart>
            <S.Borrows>선택대여</S.Borrows>
          </S.MarginWrapper>
        </S.TableLineWrapper>
        {/* <S.TableDottedLine /> */}

        {props.detailData?.fetchNovelDetail.novelIndexs.map((el) => (
          <S.TableLineWrapper key={el.id}>
            <S.WrapFirst>
              <S.Square type="checkbox" />
              <S.TableSonWrapper>
                <S.Title>
                  {el.index}화: {el.title}
                </S.Title>
                <S.WrapDate>
                  <S.Date>{getDateDay(el.createAt)}</S.Date>
                  <S.Date>{el.viewCount}명</S.Date>
                  <S.VerticalLine />
                  <S.SumCharacter>약 {el.contents.length}자</S.SumCharacter>
                </S.WrapDate>
              </S.TableSonWrapper>
            </S.WrapFirst>
            <S.LookBtn id={el.id} onClick={props.onClickIndexDelete}>
              삭제
            </S.LookBtn>
            <S.LookBtn id={el.id} onClick={props.onClickPayment}>
              구매
            </S.LookBtn>
            <S.LookBtn id={el.id} onClick={props.onClickMoveToRead}>
              보기
            </S.LookBtn>
            <div
              id={el.id}
              // checkedChildren="공개"
              // unCheckedChildren="비공개"
              // defaultChecked
              onClick={props.onClickPrivate}
            >
              공개
            </div>
          </S.TableLineWrapper>
        ))}
        <S.Margin />
        <S.FooterLabel>소설 키워드</S.FooterLabel>
        <S.TagsWrapper>
          {props.detailData?.fetchNovelDetail.novelTags
            ?.filter((el) => el)
            .map((el) => (
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

        <div
          style={{ color: "white", backgroundColor: "blue" }}
          onClick={props.onClickMoveToVolumeWrite}
        >
          회차 쓰러가기
        </div>

        <img
          src="/comment/delete.png"
          style={{ width: "30px", height: "30px" }}
          onClick={props.onClickDelete}
        />
        <img
          src="/comment/edit.png"
          style={{ width: "30px", height: "30px" }}
          onClick={props.onClickEdit}
        />
      </div>
    </div>
  );
}
