'use client'
import '../components/DisplayMenu.css'
import { Provider } from 'react-redux';
import store from '../store/index'
import { Fragment } from 'react';

import LoadingPage from './LoadingPage';


function Main(){
    
    return<Fragment>
        <Provider store={store}>

        <LoadingPage/>
        </Provider>
    </Fragment>



}

export default Main