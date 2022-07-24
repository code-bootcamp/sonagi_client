import { ChangeEvent } from "react";

export interface ISearchbarsProps {
  refetch: (variables: any) => void;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbarsUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
