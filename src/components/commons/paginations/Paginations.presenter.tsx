import { Page } from "./Paginations.styles";
export default function PaginationsUI(props: any) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {/* 숫자 1부터 10까지 클릭하는것 나타나게 map함수 이용 */}
      {/* 인덱스는 0부터 시작함 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
