import { createSlice } from "@reduxjs/toolkit";

const storeSacolaSlice = createSlice({
    name: 'storeSacola',
    initialState:{
        sacola: [],
        numeroItens: 0
    },

    reducers:{
        addSacola(state, action){
            state.sacola.push(action.payload)
        },
        removeSacola(state, action){ 
            let lista = [...state.sacola]
            lista.map((item, index) =>
                {if (item.id === action.payload){
                    state.numeroItens = state.numeroItens - lista[index].multiplicador
                    delete lista[index]
                }}
            )
            
            state.sacola = lista.filter(elm => elm)
        },
        addItem(state, action){
            state.numeroItens = state.numeroItens + action.payload
        }
    }
})

export const storeSacolaActions = storeSacolaSlice.actions
export default storeSacolaSlice