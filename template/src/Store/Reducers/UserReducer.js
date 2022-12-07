import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //some data
  userData: null,
};
const userSlice = createSlice({
  name: 'Writing',
  initialState,
  reducers: {
    setStateW: (state, action) => {
      state.userData = action.payload;
    },
    resetStateW: () => {
      return initialState;
    },
  },
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
