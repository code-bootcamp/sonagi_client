import React from "react";
import Button01 from "../../commons/buttons/01";
import Button02 from "../../commons/buttons/02";
import Uploads01 from "../../commons/uploads/01/Uploads01.container";
import * as S from "./NovelWrite.styles";
import { v4 as uuidv4 } from "uuid";

import dynamic from "next/dynamic";
import Tags from "../../commons/tags";
import { INovelWritePresenterProps } from "./NovelWrite.types";

const ToastUi = dynamic(() => import("../../commons/toastUI"), {
  ssr: false,
});

export default function NovelWritePresenter(props: INovelWritePresenterProps) {
  console.log(props.isDay);
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <S.Wrapper>
        <S.WrapHeader>
          <S.WrapTitleWarning>
            <S.MainTitle>
              {props.isEdit ? "작품 수정" : "새 작품 쓰기"}{" "}
            </S.MainTitle>
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
            <S.Label>제목</S.Label>
            <S.TitleLabel
              type="text"
              placeholder="작품 제목을 입력해주세요"
              {...props.register("title")}
              defaultValue={props.editData?.fetchNovelDetail.title}
            />
          </S.WrapTitle>
        </S.WrapperLavel>

        <S.WrapperLavel>
          <S.WrapGenreCycle>
            <S.WrapGenre>
              <S.Label>장르</S.Label>
              <S.WrapSelect isSelect={props.isSelect}>
                <S.WrapGenreSelect>
                  <S.GenreLabel>
                    {!props.genre ? "장르 선택" : props.name}
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
                        id={props.categoryData?.fetchNovelCategorysAll[0].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[0].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[1].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[1].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[2].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[2].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[3].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[3].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[4].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[4].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[5].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[5].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[6].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[6].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[7].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[7].name}
                      </S.List>
                      <S.List
                        onClick={props.onClickGenre}
                        id={props.categoryData?.fetchNovelCategorysAll[8].id}
                      >
                        {props.categoryData?.fetchNovelCategorysAll[8].name}
                      </S.List>
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
                    type="radio"
                    name="click"
                    onClick={props.onClickPreButton}
                  />
                  <S.CycleLabel>자유연재</S.CycleLabel>
                  <S.CheckButton
                    onClick={props.onClickDayButton}
                    type="radio"
                    name="click"
                  />
                  <S.CycleLabel>요일연재</S.CycleLabel>
                </S.WrapChange>
                {props.isClickPre ? (
                  <S.WrapCycleButton isClickDay={props.isClickDay}>
                    {props.Day.map((el: any) => (
                      <S.CycleButton2
                        onClick={props.onClickDayDiv(el)}
                        key={el.length}
                      >
                        {el}
                      </S.CycleButton2>
                    ))}
                  </S.WrapCycleButton>
                ) : (
                  <S.WrapCycleButton isClickDay={props.isClickDay}>
                    {props.Day.map((el: any) => (
                      <S.CycleButton1
                        onClick={props.onClickDayDiv(el)}
                        key={el.length}
                        el={el}
                        isDay={props.isDay}
                      >
                        {el}
                      </S.CycleButton1>
                    ))}
                  </S.WrapCycleButton>
                )}
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
                  fileUrl={el}
                  index={index}
                  // fileId={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.WrapImage>

            {/* <S.CoverImage src="/novelWrite/cover_image.png" /> */}
          </S.WrapCoverImage>
        </S.WrapperLavel>
        <S.Error>{props.formState.errors.fileURLs?.message}</S.Error>

        <S.WrapIntroduce>
          <S.Label2>작품소개</S.Label2>
          {/* <S.IntroduceInput
            type="text"
            placeholder="소개글을 작성해주세요"
            {...props.register("description")}
          /> */}
          <ToastUi
            onChangeDescription={props.onChangeDescription}
            editorRef={props.editorRef}
            initialValue={props.editData?.fetchNovelDetail.description}
          />
          <S.Error>{props.formState.errors.description?.message}</S.Error>
        </S.WrapIntroduce>
        <S.WrapperLavel>
          <S.Label>태그 입력</S.Label>
          <S.WrapTags>
            <Tags tags={props.tags} setTags={props.setTags} />
          </S.WrapTags>
        </S.WrapperLavel>
        <S.ButtonWrapper>
          <S.WrapSubmitButton>
            <Button02 title="취소" />
            <Button01 title={props.isEdit ? "수정" : "등록"} />
          </S.WrapSubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
