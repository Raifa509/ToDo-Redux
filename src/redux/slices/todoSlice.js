import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:{
        tasks:[],
        nextId:1
    },
    reducers:{
        //add task
        addTask:(state,action)=>{
            state.tasks.push({
                id:state.nextId,
                text:action.payload,
                completed:false
            })
            state.nextId++
        },

        //delete task
        removeTask:(state,action)=>{
            state.tasks= state.tasks.filter(item=>item.id!=action.payload)
        },
        //edit task

        editTask:(state,action)=>{
            const {id,text}=action.payload
            const task=state.tasks.find(item=>item.id==id)
            if(task)
            {
                task.text=text
            }
        },
        //check completed task
        toggleTask:(state,action)=>{
            const task=state.tasks.find(item=>item.id==action.payload)
            if(task)
            {
                task.completed=!task.completed
            }
        }

    }
})

export const {addTask,removeTask,editTask,toggleTask}=todoSlice.actions
export default todoSlice.reducer