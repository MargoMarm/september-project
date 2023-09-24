export const getCurrentDate = () => {
  const dateNow = new Date();
  const day = dateNow.getUTCDate();
  const month = dateNow.getUTCMonth() + 1;
  const year = dateNow.getUTCFullYear();
  const date = `${day.toString().length > 1 ? day : '0' + day}-${
    month.toString().length > 1 ? month : '0' + month
  }-${year}`;
  return date;
};
