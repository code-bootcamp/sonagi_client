import * as S from "./NovelDetail.Styles";
export default function NovelDetailPresenter() {
  return (
    <div>
      <div>
        <S.FlexWrapper>
          <S.NovelImage src="/novelDetail/Mask.png" />
          <S.ColumnWrapper>
            <S.Genre>
              <S.TopFont>장르</S.TopFont>
              {/* <S.SmallArrow src="/novelDetail/Polygon.png" /> */}
              <S.Arrow>{">"}</S.Arrow>
              <S.TopFont>소설장르</S.TopFont>
            </S.Genre>

            <S.NovelTitle>kick off</S.NovelTitle>
            <S.ProfileWrapper>
              <S.WriterImg src="novelDetail/profile.jpg" />
              <S.WriterFont>작가</S.WriterFont>
              <S.Flexs>
                <S.Divs>총 00화</S.Divs>
                <S.Divs>|</S.Divs>
                <S.Divs>연재중</S.Divs>
              </S.Flexs>
            </S.ProfileWrapper>
            <S.StarWrapper>
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.Score>5점</S.Score>
              <S.Count>(0,000 명)</S.Count>
            </S.StarWrapper>

            <S.NovelRemarks>
              소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다소설요약입니다
            </S.NovelRemarks>
            <S.Line />
          </S.ColumnWrapper>
        </S.FlexWrapper>

        <S.ButtonWrapper>
          <S.HeartWrapper>
            <S.HeartImg src="novelDetail/HeartImg.png" />
            <S.HeartCount>3,000</S.HeartCount>
          </S.HeartWrapper>
          <S.LookButtonWrapper>
            <S.LookFirstBtn>첫화보기</S.LookFirstBtn>
            <S.Buttons>이어보기</S.Buttons>
            <S.Buttons>찜하기</S.Buttons>
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
          <S.Square />
          <S.SelectAll>전체선택</S.SelectAll>
          <S.SortButton>
            <S.ArrowImg src="novelDetail/Arrow 1.png" />
            <S.ArrowImg src="novelDetail/Arrow 2.png" />
            <S.New>신간부터</S.New>
          </S.SortButton>
          <S.MarginWrapper>
            <S.All>총 0화</S.All>
            <S.Sum>0원</S.Sum>
            <S.Cart>카트</S.Cart>
            <S.Borrows>선택대여</S.Borrows>
          </S.MarginWrapper>
        </S.TableLineWrapper>
        <S.TableDottedLine />
        <S.TableLineWrapper>
          <S.Square />
          <S.TableSonWrapper>
            <S.Title>소설제목</S.Title>
            <S.Date>2022.07.05</S.Date>
          </S.TableSonWrapper>
          <S.VerticalLine />

          <S.SumCharacter>약 000 천자</S.SumCharacter>
          <S.LookBtn>보기</S.LookBtn>
        </S.TableLineWrapper>
        <S.TableInnerLine />

        <S.TableLineWrapper>
          <S.Square />
          <S.TableSonWrapper>
            <S.Title>소설제목</S.Title>
            <S.Date>2022.07.05</S.Date>
          </S.TableSonWrapper>
          <S.VerticalLine />

          <S.SumCharacter>약 000 천자</S.SumCharacter>
          <S.LookBtn>보기</S.LookBtn>
        </S.TableLineWrapper>
        <S.TableInnerLine />

        <S.TableLineWrapper>
          <S.Square />
          <S.TableSonWrapper>
            <S.Title>소설제목</S.Title>
            <S.Date>2022.07.05</S.Date>
          </S.TableSonWrapper>
          <S.VerticalLine />

          <S.SumCharacter>약 000 천자</S.SumCharacter>
          <S.LookBtn>보기</S.LookBtn>
        </S.TableLineWrapper>
        <S.TableInnerLine />
        <S.Margin />
      </div>
    </div>
  );
}
