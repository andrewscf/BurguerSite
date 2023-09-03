import { createSlice } from "@reduxjs/toolkit";
const storePedidosSlice = createSlice({
    name: 'storePedidos',
    initialState:{
        items: []
    },

    reducers:{
        loadStore(state, action){
            state.items.push(action.payload)
        }
       
    }
})

export const storePedidosActions = storePedidosSlice.actions
export default storePedidosSlice