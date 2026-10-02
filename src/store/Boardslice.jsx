import { createSlice } from "@reduxjs/toolkit"; 

const intialState = {

    activeBoard : {
        id : "b1",
        title : "Dashboard",
        columnIds : ["c1","c2","c3"]

    },

    columns : {
        "c1" : {
            id : "c1",
            title : "To-Do",
            taskIds : []
        },
        "c2" : {
            id : "c2",
            title : "In-Progress",
            taskIds : []
        },
        "c3" : {
            id : "c3",
            title : "Done",
            taskIds : []
        },

        tasks : []
    }

}

const boardSlice = createSlice({
    name : "dashBoard",
    intialState,
    reducers : {
        addTask : (state,action) => {},
        moveTask : (state,action) => {},
    }

})

export const {addTask, moveTask} = boardSlice.actions

export default boardSlice.reducer