import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //some data
  employee: [],
};
const emplyeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    getEmployee:(state, action)=>{},
    clearEmployeeData: () => {
      return initialState;
    },
  },
});
export const emplyeeSliceActions = emplyeeSlice.actions;
export default emplyeeSlice.reducer;
