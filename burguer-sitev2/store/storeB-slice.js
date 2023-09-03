import { createSlice } from "@reduxjs/toolkit";

import classico from '../assets/classico.png'
import duplo from '../assets/duplo.png'
import triplo from '../assets/triplo.png'
import kids from '../assets/kids.png'
import hotsimples from '../assets/hotsimples.png'
import hotduplo from '../assets/hotduplo.png'
import hotcalabresa from '../assets/hotcalabresa.png'
import hotmisto from '../assets/hotmisto.png'
import lamb from '../assets/lamborghini.png'
import frango from '../assets/frango.png'
import calabresa from '../assets/calabresa.png'
import coraçao from '../assets/coracao.png'
import duchefe from '../assets/duchefe.png'
import porcaoP from '../assets/porçaoP.png'
import porcaoM from '../assets/porçaoM.png'
import porcaoG from '../assets/porçaoG.png'
import especialM from '../assets/especialM.png'
import especialG from '../assets/especialG.png'

const storeBSlice = createSlice({
    name: 'storeB',
    initialState:{
        items: [],
        imagens: {
            Burguer: [classico, duplo, triplo, kids, lamb, frango, calabresa, coraçao, duchefe],
            Dogs : [hotsimples, hotduplo, hotcalabresa, hotmisto],
            Porcao: [porcaoP, porcaoM, porcaoG, especialM, especialG]
            }
    },

    reducers:{
        loadStore(state, action){
            state.items.push(action.payload)
        }
       
    }
})

export const storeBActions = storeBSlice.actions
export default storeBSlice