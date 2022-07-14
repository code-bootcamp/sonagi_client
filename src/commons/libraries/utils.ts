export const getDate = (value) => {
  // const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const date = new Date(value);
  date.setHours(date.getHours() + 9);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const hh = date.getHours();
  const MM = ("0" + date.getMinutes()).slice(-2);

  return `${yyyy}-${mm}-${dd} ${hh}:${MM}`;
};
