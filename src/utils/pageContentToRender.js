const pageContentToRender = (page, data) => {
  const content =
    page === 'product'
      ? {
          subtitle: 'DIET',
          title: data.title,
          button: 'Add',
          text1: 'Calories:',
          text2: 'Category:',
          text3: 'Weight:',
          subText1: data.calories,
          subText2: data.category,
          subText3: data.weight,
        }
      : {
          subtitle: 'WORKOUT',
          title: data.name,
          button: 'Start',
          text1: 'Burned calories:',
          text2: 'Body part:',
          text3: 'Target:',
          subText1: data.burnedCalories,
          subText2: data.bodyPart,
          subText3: data.target,
        };

  return content;
};

export default pageContentToRender;
