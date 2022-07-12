import React from "react";
import Button01 from "../../commons/buttons/01";
import Button02 from "../../commons/buttons/02";
import Uploads01 from "../../commons/uploads/01/Uploads01.container";
import * as S from "./NovelWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function NovelWritePresenter(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.WrapHeader>
          <S.WrapTitleWarning>
            <S.MainTitle>새 작품 쓰기</S.MainTitle>
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
            <S.TitleLabel
              type="text"
              placeholder="작품 제목"
              {...props.register("title")}
            />
            <S.Error>{props.formState.errors.title?.message}</S.Error>
          </S.WrapTitle>
        </S.WrapperLavel>
        <S.WrapperLavel>
          <S.WrapGenreCycle>
            <S.WrapGenre>
              <S.Label>장르</S.Label>
              <S.WrapSelect isSelect={props.isSelect}>
                <S.WrapGenreSelect>
                  <S.GenreLabel>
                    {!props.genre ? "장르 선택" : props.genre}
                  </S.GenreLabel>
                  <S.SelectButton
                    src="/novelWrite/arrow_down.png"
                    onClick={props.onClickSelectGenre}
                  />
                </S.WrapGenreSelect>
                <S.WrapGenreList>
                  {props.isSelect && (
                    <>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categotyData.fetchNovelCategorysAll[0].id}
                      >
                        라이트노벨
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categotyData.fetchNovelCategorysAll[1].id}
                      >
                        무협
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categotyData.fetchNovelCategorysAll[2].id}
                      >
                        로맨스
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categotyData.fetchNovelCategorysAll[3].id}
                      >
                        판타지
                      </S.List>
                      {/* <S.List onClick={props.onClickGenre} id="소소한">
                        소소한
                      </S.List> */}
                    </>
                  )}
                </S.WrapGenreList>
              </S.WrapSelect>
            </S.WrapGenre>
            <S.WrapCycle>
              <S.Label>연재 주기</S.Label>
              <S.WrapCheck>
                <S.WrapChange>
                  <S.CheckButton
                    onClick={props.onClickCycleButton}
                    src={
                      props.isClickPre
                        ? "/novelWrite/check_box_fill.png"
                        : "/novelWrite/check_box_blank.png"
                    }
                  />
                  <S.CycleLabel>자유연재</S.CycleLabel>
                  <S.CheckButton
                    onClick={props.onClickCycleButton}
                    src={
                      props.isClickDay
                        ? "/novelWrite/check_box_fill.png"
                        : "/novelWrite/check_box_blank.png"
                    }
                  />
                  <S.CycleLabel>요일연재</S.CycleLabel>
                </S.WrapChange>
                <S.WrapCycleButton>
                  <S.CycleButton>월</S.CycleButton>
                  <S.CycleButton>화</S.CycleButton>
                  <S.CycleButton>수</S.CycleButton>
                  <S.CycleButton>목</S.CycleButton>
                  <S.CycleButton>금</S.CycleButton>
                  <S.CycleButton>토</S.CycleButton>
                  <S.CycleButton>일</S.CycleButton>
                </S.WrapCycleButton>
              </S.WrapCheck>
            </S.WrapCycle>
          </S.WrapGenreCycle>
        </S.WrapperLavel>
        <S.WrapperLavel>
          <S.WrapCoverImage>
            <S.Label>표지 이미지</S.Label>
            <S.WrapImage>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.WrapImage>
            <S.CoverImage src="/novelWrite/cover_image.png" />
          </S.WrapCoverImage>
        </S.WrapperLavel>
        <S.WrapIntroduce>
          <S.Label>작품소개</S.Label>
          <S.IntroduceInput
            type="text"
            placeholder="소개글을 작성해주세요"
            {...props.register("description")}
          />
          <S.Error>{props.formState.errors.description?.message}</S.Error>
        </S.WrapIntroduce>
        <S.WrapSubmitButton>
          <Button02 title="취소" />
          <Button01 title="저장" />
        </S.WrapSubmitButton>
      </S.Wrapper>
    </form>
  );
}
