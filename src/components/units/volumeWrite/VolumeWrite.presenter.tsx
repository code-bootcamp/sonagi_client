import React from "react";
import * as S from "./VolumeWrite.styles";

export default function VolumeWritePresenter() {
  return (
    <S.Wrapper>
      <S.WrapHeader>
        <S.WrapTitleWarning>
          <S.MainTitle>회차/공지 쓰기</S.MainTitle>
          <S.WarningText>
            저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은
            이용약관 및 관련 법률에 의하여 제재를 받을 수 있습니다.
            <br /> 작품 및 회차 연재 시 운영원칙에 동의한 것으로 간주합니다.
            성인물, 폭력물 등 운영원칙에 위배되는 작품은 통보 없이 삭제될 수
            있습니다.
          </S.WarningText>
        </S.WrapTitleWarning>
        <S.WriteImage src="/novelWrite/write_image.png" />
      </S.WrapHeader>
      <S.WrapperLavel>
        <S.WrapTitle>
          <S.TitleLabel>Kick off</S.TitleLabel>
        </S.WrapTitle>
      </S.WrapperLavel>
      <S.WrapperLavel>
        <S.WrapSellect>
          <S.WrapNotice>
            <S.SelectButton>제목</S.SelectButton>
            <S.SelectButton>회차</S.SelectButton>
          </S.WrapNotice>
          <S.WrapCheckButton>
            <S.CheckButton src="/novelWrite/check_box_fill.png" />
            <S.CheckLabel>공지</S.CheckLabel>
            <S.CheckButton src="/novelWrite/check_box_blank.png" />
            <S.CheckLabel>휴재</S.CheckLabel>
            <S.CheckButton src="/novelWrite/check_box_blank.png" />
            <S.CheckLabel>감사</S.CheckLabel>
            <S.CheckButton src="/novelWrite/check_box_blank.png" />
            <S.CheckLabel>기타</S.CheckLabel>
          </S.WrapCheckButton>
        </S.WrapSellect>
      </S.WrapperLavel>
      <S.WrapperLavel>
        <S.WrapTitle>
          <S.NoticeLabel type="text" placeholder="제목" />
        </S.WrapTitle>
      </S.WrapperLavel>
      <S.WrapIntroduce>
        <S.Label>내용</S.Label>
        <S.IntroduceInput type="text" />
      </S.WrapIntroduce>
      <S.WrapperWriterSay>
        <S.Label>작가의 말</S.Label>
        <S.WriteSay type="text" />
      </S.WrapperWriterSay>
      <S.WrapperRule>
        <S.WrapRule>
          <S.CheckButtonFoot src="/novelWrite/check_box_fill.png" />
          <S.RuleText>완결 (작품페이지에 완결로 노출됩니다.)</S.RuleText>
        </S.WrapRule>
        <S.WrapRule>
          <S.CheckButtonFoot src="/novelWrite/check_box_blank.png" />
          <S.WrapRuleText>
            <S.RuleText>운영원칙에 동의합니다</S.RuleText>
            <S.MoveRule> 운영원칙보기</S.MoveRule>
          </S.WrapRuleText>
        </S.WrapRule>
      </S.WrapperRule>
      <S.WrapSubmitButton>
        <S.ClickButton>취소</S.ClickButton>
        <S.ClickButton>임시저장</S.ClickButton>
        <S.ClickButton>저장</S.ClickButton>
      </S.WrapSubmitButton>
    </S.Wrapper>
  );
}
