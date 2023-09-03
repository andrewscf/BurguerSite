import { configureStore } from "@reduxjs/toolkit";

import storeBSlice from './storeB-slice'
import storeControlSlice from './storeControl-slice'
import storeSacolaSlice from "./storeSacola-slice";
import storePedidosSlice from './storePedidos-slice'

const store = configureStore({
    reducer: {storeB: storeBSlice.reducer, storeControl: storeControlSlice.reducer, storeSacola: storeSacolaSlice.reducer, storePedidos: storePedidosSlice.reducer}
})

export default store