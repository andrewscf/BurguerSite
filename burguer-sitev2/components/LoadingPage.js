import Footer from '../components/Footer';
import Menu from '../components/Menu'
import DisplayMenu from '../components/DisplayMenu';
import '../components/DisplayMenu.css'
import { Fragment } from 'react';
import { useState, useEffect } from 'react'
import { storeBActions } from '../store/storeB-slice'
import { useDispatch } from 'react-redux/es/exports'
import Image from 'next/image';
import logo from '../assets/simbolo.jpg'

function LoadingPage(){
    const [carregado, setCarregado] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchDados = async () => {
           const response = await fetch('/api/dados')
           const data = await response.json()
   
           dispatch(storeBActions.loadStore(data))
           setCarregado(true)
   
        }
        fetchDados()
       }, [])
    if (carregado){
    return<Fragment>

        <Menu carregado= {carregado}/>
        
        <DisplayMenu/>
        <Footer/>
    </Fragment>}else{
        return<div className='h-screen bg-white grid place-content-center'>
            <Image height={600} src={logo} alt='Logo'/>
        </div>
    }

}

export default LoadingPage