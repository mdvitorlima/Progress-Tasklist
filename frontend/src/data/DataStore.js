import { createStore, applyMiddleware } from "redux";
import { TaskReducer } from "./TaskReducer";
import { asyncActions } from "./AsyncMiddleware";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore
    = createStore(CommonReducer(TaskReducer), applyMiddleware(asyncActions));
