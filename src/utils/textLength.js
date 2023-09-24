const textLength = (name, windowWidth) => {
  let maxLength = 24;

  if (windowWidth < 768) {
    maxLength = 23;
  } else if (windowWidth < 1440) {
    maxLength = 19;
  }

  return name.length <= maxLength ? name : name.substring(0, maxLength) + '...';
};

export default textLength;
