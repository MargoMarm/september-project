const pageContentToRender = (page, data) => {
	const content = page === 'product'
    ? {
        key: data._id.$oid,
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
        key: data.title,
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

	return content
}

export default pageContentToRender