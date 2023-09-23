const formatDate = date => {
  const dateObject = date;
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1; // Months are 0-based, so add 1
  const year = dateObject.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  const formatted_date = day + '-' + month + '-' + year;
  return formatted_date;
};

export default formatDate;