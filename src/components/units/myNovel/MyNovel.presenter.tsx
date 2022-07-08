import * as S from "./MyNovel.styles";
export default function MyNovelPresenter() {
  return (
    <S.Wrapper>
      <div>
        <S.MyPageFont>마이 페이지</S.MyPageFont>
        <S.MyNovel>나의 작품</S.MyNovel>
        <S.Box>
          <div>
            <S.Flex>
              <S.Img src="../myNovel/Rectangle.png" />
              <S.InnerFlex>
                <S.Column>
                  <S.Title>소설 제목</S.Title>
                  <S.GenreFlex>
                    <S.Genre>OO화</S.Genre>
                    <S.Time>회차 제목</S.Time>
                  </S.GenreFlex>
                </S.Column>
                <S.BoxFlex>
                  <S.Button1>연재작품 쓰기</S.Button1>
                  <S.Button2>공지사항</S.Button2>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.Flex>
          </div>
        </S.Box>
        <S.Box>
          <div>
            <S.Flex>
              <S.Img src="../myNovel/Rectangle.png" />
              <S.InnerFlex>
                <S.Column>
                  <S.Title>글 제목</S.Title>
                  <S.GenreFlex>
                    <S.Genre>OO화</S.Genre>
                    <S.Time>회차 제목</S.Time>
                  </S.GenreFlex>
                </S.Column>
                <S.BoxFlex>
                  <S.Button1>연재작품 쓰기</S.Button1>
                  <S.Button2>공지사항</S.Button2>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.Flex>
          </div>
        </S.Box>
      </div>
    </S.Wrapper>
  );
}
