import axios from 'axios';
import { toast } from 'react-toastify';

export const addToDiary = async exercise => {
  try {
    const { data } = await axios.post('/api/diary/add-exercise', exercise);
    return data;
  } catch (error) {
    toast.error('Oops... Something went wrong! Try again!');
    console.log(error);
  }
};
