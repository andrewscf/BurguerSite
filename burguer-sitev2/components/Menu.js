'user client'

import burguerIcon from '../assets/BurguerIcon.jpg'
import bebidasIcon from '../assets/BebidasIcon.jpg'
import friesIcon from '../assets/FriesIcon.jpg'
import hotIcon from '../assets/HotIcon.jpg'
import invHotIcon from '../assets/InvHotIcon.jpg'
import invBebidasIcon from '../assets/InvBebidasIcon.jpg'
import invBurguerIcon from '../assets/InvBurguerIcon.jpg'
import invFriesIcon from '../assets/InvFriesIcon.jpg'
import { useState } from 'react';
import Image from 'next/image'

function Menu(props){
    const [esteClick, setEsteClick] = useState('burguer')

    function onClickBurguerHandler(){
        props.getValorMenu('burguer')
        setEsteClick('burguer')
        console.log(esteClick)

    }
    function onClickDogHandler(){
        props.getValorMenu('dog')
        setEsteClick('dog')
        console.log(esteClick)
    }
    function onClickPorcaoHandler(){
        props.getValorMenu('porcao')
        setEsteClick('porcao')
        console.log(esteClick)
    }
    function onClickBebidasHandler(){
        props.getValorMenu('bebidas')
        setEsteClick('bebidas')
        console.log(esteClick)
    }



    return <div>
    <h2 className='ml-5 text-2xl text-left font-serif'>Menu</h2>
    <div className='flex overflow-x-scroll pb-10 hide-scroll-bar gap-5'>
      <div className=' flex flex-nowrap gap-0.1'>
        
        <div className='m-1.5 h-30 w-32 bg-slate-50 ' onClick={onClickBurguerHandler} >
          <Image className='relative left-3 rounded-xl border-amareloP border' src={('burguer' === esteClick) ? invBurguerIcon : burguerIcon} alt='Imagem'/>
          <p>Burguers</p>

        </div>
        <div className='flex-col m-1.5 h-30 w-32 bg-slate-50' onClick={onClickDogHandler}>
          <Image className='relative left-3 rounded-xl border-amareloP border' src={('dog' === esteClick) ? invHotIcon : hotIcon} alt='Imagem'/>
          <p>Hot Dogs</p>
        </div>
        <div className='flex-col m-1.5 h-30 w-32 bg-slate-50' onClick={onClickPorcaoHandler}>
          <Image className='relative left-3 rounded-xl border-amareloP border' src={('porcao' === esteClick) ? invFriesIcon : friesIcon} alt='Imagem'/>
          <p>Porções</p>
        </div>
        <div className='flex-col m-1.5 h-30 w-32 bg-slate-50' onClick={onClickBebidasHandler}>
          <Image className='relative left-3 rounded-xl border-amareloP border' src={('bebidas' === esteClick) ? invBebidasIcon : bebidasIcon} alt='Imagem'/>
          <p>Bebidas</p>
        </div>
      </div>
    </div>
  </div>
}

export default Menu