import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface INovelWriteContainerProps {
  editData?: any;
  isEdit: boolean;
}

export interface INovelWritePresenterProps {
  Day: string[];
  onClickPreButton: () => void;
  onClickDayButton: () => void;
  onClickDayDiv: any;
  isDay: any;
  isClickPre: boolean;
  isClickDay: boolean;
  onChangeDescription: any;
  editorRef: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: any;
  onClickSelectGenre: () => void;
  setGenre: Dispatch<SetStateAction<string>>;
  onClickGenre: any;
  isSelect: boolean;
  genre: string;
  name: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  categoryData?: any;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  onClickUpdate: any;
  isEdit: boolean;
  editData?: any;
}

export interface IonClickUpdate {
  title: string;
  description: string;
  categoryID: string;
  fileURLs: string[];
  id: string;
  cycles: string[];
}

export interface INovelWriteStyles {
  isClickDay?: boolean;
  isDay?: any;
  el?: any;
  isSelect?: boolean;
}
