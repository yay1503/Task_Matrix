import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./Boardslice" 

const store  = configureStore({
    reducer : {
        board : boardSlice
    }
})

export default store