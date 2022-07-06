import * as S from "./NovelDetail.Styles";
export default function NovelDetailPresenter() {
  return (
    <div>
      <div>
        <S.FlexWrapper>
          <S.NovelImage src="/novelDetail/image.jpg" />
          <S.ColumnWrapper>
            <S.Genre>
              <S.TopFont>장르</S.TopFont>
              <S.SmallArrow src="/novelDetail/Polygon.png" />
              <S.TopFont>소설장르</S.TopFont>
            </S.Genre>

            <S.NovelTitle>kick off</S.NovelTitle>
            <S.StarWrapper>
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.StarImg src="novelDetail/star.png" />
              <S.Score>5점</S.Score>
            </S.StarWrapper>
            <S.ProfileWrapper>
              <S.WriterImg src="novelDetail/profile.jpg" />
              <S.WriterFont>작가</S.WriterFont>
              <S.Divs>10화</S.Divs>
            </S.ProfileWrapper>
            <S.NovelRemarks>소설 요약</S.NovelRemarks>
          </S.ColumnWrapper>

          <S.Line />
        </S.FlexWrapper>

        <S.ButtonWrapper>
          <S.HeartWrapper>
            <S.HeartImg src="novelDetail/heart.png" />
            <S.HeartCount>3,000</S.HeartCount>
          </S.HeartWrapper>
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
            <S.TableButton>카트</S.TableButton>
            <S.TableButton>선택대여</S.TableButton>
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
          <S.Look>보기</S.Look>
        </S.TableLineWrapper>
        <S.Line />

        <S.TableLineWrapper>
          <S.Square />
          <S.TableSonWrapper>
            <S.Title>소설제목</S.Title>
            <S.Date>2022.07.05</S.Date>
          </S.TableSonWrapper>
          <S.VerticalLine />

          <S.SumCharacter>약 000 천자</S.SumCharacter>
          <S.Look>보기</S.Look>
        </S.TableLineWrapper>
        <S.Line />

        <S.TableLineWrapper>
          <S.Square />
          <S.TableSonWrapper>
            <S.Title>소설제목</S.Title>
            <S.Date>2022.07.05</S.Date>
          </S.TableSonWrapper>
          <S.VerticalLine />

          <S.SumCharacter>약 000 천자</S.SumCharacter>
          <S.Look>보기</S.Look>
        </S.TableLineWrapper>
        <S.Line />
        <S.Margin />
      </div>
    </div>
  );
}
