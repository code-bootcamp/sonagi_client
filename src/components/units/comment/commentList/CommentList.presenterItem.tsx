import * as S from "./CommentList.styles";

export default function CommentListPresenterItem() {
  return (
    <S.Wrapper>
      <S.WrapperUserInfo>
        <S.WrapBestIcon>
          <S.BestComment>Best</S.BestComment>
        </S.WrapBestIcon>
        <S.WrapInfo>
          <S.ProfileIcon src="/comment/profile_icon.png" />
          <S.WrapCommentInfo>
            <S.Comment>너무 재미있아요!!! 최고최고</S.Comment>
            <S.WrapUserInfo>
              <S.Name>Name</S.Name>
              <S.Date>2022.07.04</S.Date>
              <S.UpIcon src="/comment/thumb_up.png" />
              <S.UpCount>325</S.UpCount>
            </S.WrapUserInfo>
          </S.WrapCommentInfo>
          <S.WrapIcon>
            <S.EditIcon src="/comment/edit.png" />
            <S.DeleteIcon src="/comment/delete.png" />
          </S.WrapIcon>
        </S.WrapInfo>
      </S.WrapperUserInfo>
    </S.Wrapper>
  );
}
