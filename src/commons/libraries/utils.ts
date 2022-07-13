export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const hh = ("0" + date.getHours()).slice(-2);
  const MM = ("0" + date.getMinutes()).slice(-2);

  return `${yyyy}-${mm}-${dd} ${hh}:${MM}`;
};
