'use client'

import Footer from '../components/Footer';
import Menu from '../components/Menu'
import DisplayMenu from '../components/DisplayMenu';
import '../components/DisplayMenu.css'
import { Provider } from 'react-redux';
import store from '../store/index'
import { Fragment } from 'react';


function Main(){

    return<Fragment>
        <Provider store={store}>

        <Menu/>
        
        <DisplayMenu/>
        <Footer/>
        </Provider>
    </Fragment>

}

export default Main