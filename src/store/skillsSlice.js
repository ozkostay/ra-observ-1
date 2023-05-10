import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SkillssArr: [],
}

export const skillsSlice = createSlice({
  name: 'skillsReducer',
  initialState,
  reducers: {
    updateSkills: (state, action) => {
      state.SkillssArr(action.payload);
    }
  }
}) 

export const { updateSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
