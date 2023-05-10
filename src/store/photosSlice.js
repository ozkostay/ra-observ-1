import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photosArr: [],
}

export const photosSlice = createSlice({
  name: 'photosReducer',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photosArr.unshift(action.payload);
    }
  }
}) 

export const { addPhoto } = photosSlice.actions;
export default photosSlice.reducer;
