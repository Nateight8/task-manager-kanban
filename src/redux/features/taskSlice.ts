import { Board, Column, Task } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Board = {
  name: "Hello world",
  columns: [
    { name: "Todo", tasks: [] },
    { name: "Doing", tasks: [] },
    { name: "Complete", tasks: [] },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(action.payload.status);

      if (action.payload.status == "Doing") {
        // console.log("On Going");
        state.columns[1].tasks.push(action.payload);
      } else if (action.payload.status === "Complete") {
        // console.log("completed task");
        state.columns[2].tasks.push(action.payload);
      } else {
        // console.log("todo");
        state.columns[0].tasks.push(action.payload);
      }
    },
    updateTask: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
