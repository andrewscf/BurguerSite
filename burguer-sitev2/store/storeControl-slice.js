import { createSlice } from "@reduxjs/toolkit";

const storeControlSlice = createSlice({
    name: 'storeControl',
    initialState:{
        valorMenu: '',
        displayAdicionar: [false, 0]
    },

    reducers:{
        alterValorMenu(state, action){
            state.valorMenu = action.payload
        },
        alterDisplayAdicionar(state, action){ 
            state.displayAdicionar= action.payload}
    }
})

export const storeControlActions = storeControlSlice.actions
export default storeControlSlice