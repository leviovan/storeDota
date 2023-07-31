import { Iitem } from './../items/items';
import { createSlice } from "@reduxjs/toolkit"






export interface Iitems {
    items: Iitem[],
    sum:number
}

const initialState: Iitems ={
    items: [],
    sum:0
    }



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemIncard:(state,action)=>{
            state.items.push(action.payload)
            state.sum+=action.payload.cost
        },
        removeItemIncard:(state,action)=>{

            state.sum=state.sum-+state.items[action.payload].cost 
            state.items.splice(action.payload,1); 
           
        }
    }
})
export const {addItemIncard,removeItemIncard} = cartSlice.actions

export default cartSlice.reducer