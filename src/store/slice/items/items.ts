
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface Iitem {
    name: string;
    cost: string;
    img: string;
    description: string;
    id: string;
}
export interface Iitems {
    items: Iitem[],
    currentItems:Iitem
    modalcard:boolean
    modalAddCard:boolean
    modalCart:boolean
}
const initialState: Iitems = {
    items: [],
    currentItems:{  name: " ",
                    cost: "",
                    img: "",
                    description: "",
                    id: "1"},
    modalcard:false,
    modalAddCard:false,
    modalCart:false
}
export const fetchitem = createAsyncThunk(
    'items/fetchById',
    async () => {
        const response = await fetch(`https://64c4f6cdc853c26efada577e.mockapi.io/item`)
        console.log(response);
        return (await response.json())
    }
)
export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    setCurrnetItem: (state, action) => {     
            state.currentItems=action.payload
            state.modalcard=true
    },
    resetCurrnetItem: (state) => {     
        state.currentItems={  name: " ",
        cost: "",
        img: "",
        description: "",
        id: "1"}
        state.modalcard=false

    },   
    toogleModalAddItem: (state) => {     
        state.modalAddCard=!state.modalAddCard
    },  
    toogleModalCart: (state) => {     
        state.modalCart=!state.modalCart
    },
addNewItem: (state,action) => {     
    state.items.push(action.payload)
}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchitem.fulfilled, (state, { payload }) => {
            state.items = payload
        })
        builder.addCase(fetchitem.pending, () => {
            console.log("загрузка");

        })
        builder.addCase(fetchitem.rejected, () => {
            console.log("error");
        })
    },
})
export const {setCurrnetItem,resetCurrnetItem,addNewItem,toogleModalAddItem ,toogleModalCart} = itemsSlice.actions

export default itemsSlice.reducer