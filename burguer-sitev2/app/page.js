'use client'

import headerLogo from '../assets/header.png'
import Footer from '../components/Footer';
import Menu from '../components/Menu'
import DisplayMenu from '../components/DisplayMenu';
import { useState } from 'react';
import Image from 'next/image'
import '../components/DisplayMenu.css'
import Adicionarv2 from '@/components/Adicionarv2';


export default function Home() {
  const [valorMenu, setValorMenu] = useState('burguer')

  const [isValid, setIsValid] = useState(true)
    function clickAdicionarHandler(){
        setIsValid(false)
        console.log(isValid)
    }
    function clickVoltarHandler(){
      setIsValid(true)
      console.log(isValid)
  }

  if (!isValid){
    return(
    <Adicionarv2 onClickVoltar={clickVoltarHandler}/>)
  }
  else{
  return (
    <div className="mx-auto text-center max-w-2xl bg-slate-50">
      <Image className='absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={headerLogo}/>
      <h1 className='m-10 text-2xl drop-shadow font-serif'>BATATÃO'S BURGUER & <br/> HOT DOG FOODTRUCK</h1>
      <Menu getValorMenu={setValorMenu}/>
      <DisplayMenu valorMenu={valorMenu} onClickAdicionar={clickAdicionarHandler}/>
      <Footer/>
    </div>
  )
  }
}
