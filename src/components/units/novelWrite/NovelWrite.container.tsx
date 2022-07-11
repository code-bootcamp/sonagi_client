// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import NovelWritePresenter from "./NovelWrite.presenter";
// import * as yup from "yup";
// import { useMutation } from "@apollo/client";
// import { CREATE_NOVEL } from "./NovelWrite.queries";

// const schema = yup.object({
//   title: yup.string().required("필수"),
//   subtitle: yup.string().required("필수"),
//   description: yup.string().required("필수"),
// });

// export default function NovelWriteContainer() {
//   const [isClickPre, setIsClickPre] = useState(false);
//   const [isClickDay, setIsClickDay] = useState(true);

//   const [createNovel] = useMutation(CREATE_NOVEL);

//   const { register, handleSubmit, formState } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const onClickCycleButton = () => {
//     setIsClickPre((prev) => !prev);
//     setIsClickDay((prev) => !prev);
//   };

//   return (
//     <NovelWritePresenter
//       onClickCycleButton={onClickCycleButton}
//       isClickPre={isClickPre}
//       isClickDay={isClickDay}
//       // yup
//       register={register}
//       handleSubmit={handleSubmit}
//       formState={formState}
//       onClickSubmit={onClickSubmit}
//     />
//   );
// }
