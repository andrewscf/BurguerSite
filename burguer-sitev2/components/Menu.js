'user client'

import burguerIcon from '../assets/BurguerIcon.jpg'
import bebidasIcon from '../assets/BebidasIcon.jpg'
import friesIcon from '../assets/FriesIcon.jpg'
import hotIcon from '../assets/HotIcon.jpg'
import invHotIcon from '../assets/InvHotIcon.jpg'
import invBebidasIcon from '../assets/InvBebidasIcon.jpg'
import invBurguerIcon from '../assets/InvBurguerIcon.jpg'
import invFriesIcon from '../assets/InvFriesIcon.jpg'
import Image from 'next/image'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { storeControlActions } from '../store/storeControl-slice'
import { ChevronLeft } from 'lucide-react'
import { Lilita_One } from 'next/font/google'
import { CarouselDefault } from './CarouselDefault'

const black = Lilita_One({
  subsets: ['latin'],
  weight: ['400']
})

function Menu(props){
    const dispatch = useDispatch()
    let valorMenu = ''
    if (props.carregado){
     valorMenu = useSelector(state => state.storeControl.valorMenu)}
    

    function onClickBurguerHandler(){
      dispatch(storeControlActions.alterValorMenu('burguer'))
    }
    function onClickDogHandler(){
      dispatch(storeControlActions.alterValorMenu('dog'))
    }
    function onClickPorcaoHandler(){
      dispatch(storeControlActions.alterValorMenu('porcao'))
    }
    function onClickBebidasHandler(){
      dispatch(storeControlActions.alterValorMenu('bebidas'))
    }
    function onClickVoltarHandler(){
      dispatch(storeControlActions.alterValorMenu(''))
    }
    
    return <div className=' bg-amber-50'>
      {(valorMenu === '') && <CarouselDefault carregado={props.carregado}/>}
      
    {(valorMenu === '') ? <h2 className='mt-2 ml-5 text-2xl text-left font-serif'><strong>Menu</strong></h2>: <header className='z-10 bg-white sticky top-0 h-10'>
            <div className='absolute text-amareloP' onClick={onClickVoltarHandler} ><ChevronLeft height={40}/></div>
            <div className='text-amareloP text-center text-xl grid place-items-center h-10'><p className={black.className}>Menu</p></div>
        </header>}
    <div className='flex overflow-x-scroll pb-10 hide-scroll-bar gap-5'>
      <div className=' flex flex-nowrap '>
        
        <div className={('burguer' === valorMenu) ? 'flex-col m-3 h-22 w-28 bg-amareloP rounded-xl shadow ': 'flex-col m-3 h-22 w-28 bg-white rounded-xl shadow '} onClick={onClickBurguerHandler} >
          <Image className='relative rounded-xl ml-1.5' priority={true} width={100} src={('burguer' === valorMenu) ? invBurguerIcon : burguerIcon} alt='Imagem'/>
          <p className={('burguer' === valorMenu ? 'whitespace-nowrap text-white drop-shadow': 'whitespace-nowrap text-amareloP drop-shadow')}><strong>Burguers</strong></p>

        </div>
        <div className={('dog' === valorMenu) ? 'flex-col m-3 h-22 w-28 bg-amareloP rounded-xl shadow ': 'flex-col m-3 h-22 w-28 bg-white rounded-xl shadow '} onClick={onClickDogHandler}>
          <Image className='relative rounded-xl ml-1.5'  width={100} src={('dog' === valorMenu) ? invHotIcon : hotIcon} alt='Imagem'/>
          <p className={('dog' === valorMenu ? 'whitespace-nowrap text-white drop-shadow': 'whitespace-nowrap text-amareloP drop-shadow')}><strong>Hot Dogs</strong></p>
        </div>
        <div className={('porcao' === valorMenu) ? 'flex-col m-3 h-22 w-28 bg-amareloP rounded-xl shadow ': 'flex-col m-3 h-22 w-28 bg-white rounded-xl shadow '} onClick={onClickPorcaoHandler}>
          <Image className='relative rounded-xl ml-1.5' width={100} src={('porcao' === valorMenu) ? invFriesIcon : friesIcon} alt='Imagem'/>
          <p className={('porcao' === valorMenu ? 'whitespace-nowrap text-white drop-shadow': 'whitespace-nowrap text-amareloP drop-shadow')}><strong>Porções</strong></p>
        </div>
        <div className={('bebidas' === valorMenu) ? 'flex-col m-3 h-22 w-28 bg-amareloP rounded-xl shadow ': 'flex-col m-3 h-22 w-28 bg-white rounded-xl shadow '} onClick={onClickBebidasHandler}>
          <Image className='relative rounded-xl ml-1.5' width={100} src={('bebidas' === valorMenu) ? invBebidasIcon : bebidasIcon} alt='Imagem'/>
          <p className={('bebidas' === valorMenu ? 'whitespace-nowrap text-white drop-shadow': 'whitespace-nowrap text-amareloP drop-shadow')}><strong>Bebidas</strong></p>
        </div>
      </div>
    </div>
  </div>
}

export default Menu