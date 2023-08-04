import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CakesReducer, IceCreamsReducer } from "./ProductReducer";

const StoreReducer = combineReducers({ cake: CakesReducer, icecream: IceCreamsReducer })

const Store = configureStore({ reducer: StoreReducer })
export default Store