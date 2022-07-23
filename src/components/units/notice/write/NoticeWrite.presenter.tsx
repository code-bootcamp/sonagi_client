import Button01 from "../../../commons/buttons/01";
import Button02 from "../../../commons/buttons/02";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./NoticeWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { INoticeWritePresenterProps } from "./NoticeWritetypes";

export default function NoticeWritePresenter(
  props: INoticeWritePresenterProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickNoticeSubmit)}>
      <S.Wrapper>
        <S.RowWrap>
          <S.MainTitle>공지사항</S.MainTitle>
          <S.TitleLine></S.TitleLine>
        </S.RowWrap>
        <S.SubTitle>제목</S.SubTitle>
        <S.InputTitle
          placeholder="제목을 입력해주세요"
          {...props.register("title")}
        ></S.InputTitle>
        <S.SubTitle>내용</S.SubTitle>
        <S.InputContents
          placeholder="내용을 입력하세요"
          {...props.register("contents")}
        ></S.InputContents>
        <S.SubTitle>사진첨부</S.SubTitle>
        <S.UploadBox>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              fileUrl={el}
              key={uuidv4()}
              index={index}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.UploadBox>
        <S.ButtonWrapper>
          <Button02 onClick={props.onClickList} title="취소" type="button" />
          <Button01 title="등록" />
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
