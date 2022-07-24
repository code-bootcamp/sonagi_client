import * as S from "./Paginations.styles";
export default function PaginationsUI(props: any) {
  return (
    <div>
      <S.Arrow onClick={props.onClickPrevPage} src="../notice/leftArrow.svg" />
      {new Array(5).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}
      <S.Arrow onClick={props.onClickNextPage} src="../notice/rightArrow.svg" />
    </div>
  );
}
