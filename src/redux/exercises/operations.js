// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

// export const addExercise = createAsyncThunk(
//   'addExercise',
//   async (exerciseDetails, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         '/api/diary/add-exercise',
//         exerciseDetails,
//       );
//       console.log(data);
//     } catch (error) {
//       toast.error('Oops... Something went wrong! Try again!');
//       return rejectWithValue('Oops... Something went wrong!');
//     }
//   },
// );
