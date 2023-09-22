import axios from 'axios';

export const addToDiary = async exercise => {
  try {
    const data = await axios.post('/api/diary/add-exercises', exercise);
    return data;
  } catch (error) {
    console.log(error);
  }
};
