// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://power-pulse-rest-api.onrender.com';

// export const addProduct = createAsyncThunk(
//   'addProduct',
//   async (productDetails, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         '/api/diary/add-product',
//         productDetails,
//       );
//       console.log(data);
//     } catch (error) {
//       toast.error('Oops... Something went wrong! Try again!');
//       return rejectWithValue('Oops... Something went wrong!');
//     }
//   },
// );
