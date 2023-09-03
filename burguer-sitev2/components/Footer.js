
import { ShoppingBag, UserCircle, Home } from 'lucide-react';
import Image from 'next/image'
import './DisplayMenu.css'
import { useState } from 'react';
import ModalSacola from './ModalSacola';
import Sacola from './Sacola/Sacola';
import { Provider } from 'react-redux';
import store from '../store';
import { ChevronLeft } from 'lucide-react'
import { useSelector } from 'react-redux';
import { Lilita_One } from '@next/font/google'
import Modal from './Modal';
import whatsappIcon from '../assets/whatsapp.png'

const black = Lilita_One({
  subsets: ['latin'],
  weight: ['400']
})

function Footer(){
    const [loadStore, setLoadStore] = useState('false')

    const numero = useSelector(state => state.storeSacola.numeroItens)

    function onClickEnviarHandler(){
      setLoadStore('envio')
    }

    function onClickSacolaHandler(){
      setLoadStore('sacola')
    }

    function onClickVoltarHandler(){
      setLoadStore('false')
    }

    if (loadStore==='sacola'){
      return(
        <ModalSacola>
          <header className=' bg-white sticky top-0 h-10'>
            <div className='absolute text-amareloP' onClick={onClickVoltarHandler}><ChevronLeft height={40}/></div>
            <div className='text-amareloP text-center text-xl grid place-items-center h-10'><p className={black.className}>Sacola</p></div>
        </header>
          <Provider store={store}><Sacola onClickEnviarHandler={onClickEnviarHandler}/></Provider>
        </ModalSacola>
      )
    }
    if (loadStore==='envio'){
      return(
        <Modal>
          <div>
            <p className=' text-2xl m-5'>Seu pedido foi enviado!</p>
            <p>Estamos em fase de testes, confirme o recebimento do seu pedido pelo whatsapp</p>
            <div className='grid place-items-center'><a className='bg-green-500 w-40 p-4 my-7 rounded-xl grid grid-cols-3 shadow' href='http://wa.me/51992935657' onClick={onClickVoltarHandler}>
            <Image height={35} src={whatsappIcon} alt='Imagem'/>
              <p className=' text-sm grid'><strong>Enviar mensagem</strong></p>
            </a></div>

          </div>
          
        </Modal>
      )
    } else{

    return <footer className='sticky bottom-0'>
      <div className='flex justify-evenly p-4 bg-white'>
        <div><Home stroke='#3B3F43'/></div>
        <div className='relative rounded-full ' onClick={onClickSacolaHandler}>
          <ShoppingBag stroke='rgb(220 38 38)'/>
          <div className='absolute text-xs bottom-5 left-5 font-bold text-red-600 rounded-full  p-0.5'>
              {numero}
            </div>
        </div>
        <div><UserCircle stroke='#3B3F43'/></div>

      </div>
  </footer>}
}

export default Footer

/*
<div>
      <div className='aplicar-css2 absolute rounded-full bg-slate-50 top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute bottom-2 left-2 bg-amber-100 rounded-full h-16 w-16 ' onClick={onClickSacolaHandler}>
          <div className='absolute top-5 left-5 flex justify-center'>
            <ShoppingBag stroke='#f2bc57'/>
            <div className='absolute text-xs bottom-5 left-5 font-bold text-amareloP'>
              {numero}
            </div>
          </div>
          <div className='absolute right-32 top-12'>
            <Home stroke='#3B3F43'/>
          </div>
          <div className='absolute left-32 top-12'>
            <UserCircle stroke='#3B3F43'/>
          </div>
      </div>
      
      </div>
    
    </div>

*/