import * as S from "./MyNovel.styles";
export default function MyNovelPresenter() {
  return (
    <S.Wrapper>
      <div>
        <S.MyNovel>내 작품</S.MyNovel>
        <S.Box>
          <div>
            <S.Flex>
              <img src="myNovel/Rectangle.png" />
              <S.InnerFlex>
                <S.Column>
                  <S.Title>글 제목</S.Title>
                  <S.GenreFlex>
                    <S.Genre>장르</S.Genre>
                    <S.Time>작성 시간</S.Time>
                  </S.GenreFlex>
                </S.Column>
                <S.BoxFlex>
                  <S.Button1>작품 정보 수정</S.Button1>
                  <S.Button2>회차/공지</S.Button2>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.Flex>
          </div>
        </S.Box>
        <S.Box>
          <div>
            <S.Flex>
              <img src="myNovel/Rectangle.png" />
              <S.InnerFlex>
                <S.Column>
                  <S.Title>글 제목</S.Title>
                  <S.GenreFlex>
                    <S.Genre>장르</S.Genre>
                    <S.Time>작성 시간</S.Time>
                  </S.GenreFlex>
                </S.Column>
                <S.BoxFlex>
                  <S.Button1>작품 정보 수정</S.Button1>
                  <S.Button2>회차/공지</S.Button2>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.Flex>
          </div>
        </S.Box>
      </div>
    </S.Wrapper>
  );
}
