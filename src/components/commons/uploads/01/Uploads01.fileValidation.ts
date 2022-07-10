// 이미지 검증하기

export const checkFileValidation = (file?: File) => {
  // 이미지 파일의 사이즈가 없으면 경고 띄워주고 리턴시켜버리기
  if (!file?.size) {
    alert("파일이 없어요!");
    return false;
  }
  // 파일 사이즈가 5MB가 넘으면 경고 띄워주고 리턴시켜버리기
  if (file.size > 5 * 1024 * 1024) {
    alert("5MB 이하의 파일만 업로드 가능합니다");
    return false;
  }
  // 이미지 확장자가 png, jpeg 가 아니면 경고띄워주고 리턴시켜버리기
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return file;
};
