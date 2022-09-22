import { createSlice } from "@reduxjs/toolkit";
import { createReducer, createAction, current } from '@reduxjs/toolkit'
// const initialState ={
//     toopings: ['olive'],
//     gluten: true, 
//     value: '',
    
// }

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState:{ 
        posts: [],
     },
    reducers:{
        addPosts: (state, action) => {
            state.posts = [...state.posts, action.payload];
          },
   

    },
})

export const { addPosts } = pizzaSlice.actions
export default pizzaSlice.reducer