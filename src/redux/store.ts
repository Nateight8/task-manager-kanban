import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/taskSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux"


export const store = configureStore({
    reducer: {
        storeTasks: taskReducer

    }
})

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;