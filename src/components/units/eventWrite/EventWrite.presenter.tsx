import Button01 from "../../commons/buttons/01";
import Uploads01 from "../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./EventWrite.styles";

export default function EventWritePresenter(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickEventWrite)}>
      <S.Wrapper>
        <S.RowWrap>
          <S.MainTitle>이벤트</S.MainTitle>
          <S.TitleLine></S.TitleLine>
        </S.RowWrap>
        <S.SubTitle>제목</S.SubTitle>
        <S.InputTitle
          placeholder="제목을 입력해주세요"
          {...props.register("title")}
        ></S.InputTitle>
        <S.SubTitle> 내용</S.SubTitle>
        <S.InputContents
          placeholder="내용을 입력하세요"
          {...props.register("contents")}
        ></S.InputContents>
        <S.SubTitle>사진첨부</S.SubTitle>
        <S.UploadBox>
          {props.fileUrls.map((el: any, index: any) => (
            <Uploads01
              key={uuidv4()}
              fileUrl={el}
              index={index}
              // fileId={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.UploadBox>
        <S.ButtonWrapper>
          <Button01 title="등록" />
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
