import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;
