'use client'


import './DisplayMenu.css'
import Image from 'next/image'
import DisplayBebidas from './DisplayBebidas'
import { useState, useEffect } from 'react'
import { storeBActions } from '../store/storeB-slice'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import AdicionarBurguer from './AdicionarBurguer'
import AdicionarDog from './AdicionarDog'
import AdicionarPorcao from './AdicionarPorcao'
import Modal from './Modal'
import { Cherry_Bomb_One } from 'next/font/google'
import PaginaInicial from './PaginaInicial'
import { TimerResetIcon } from 'lucide-react'


const cherry = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: ['400']
})



function DisplayMenu(props){
    const dispatch = useDispatch()
    const [menuId, setMenuId] = useState(0)

    const [isValid, setIsValid] = useState(true)
      function clickAdicionarHandler(e){
          
          setMenuId(Number(e.currentTarget.id))
          console.log(menuId)
          setIsValid(false)
  
      }
      function clickVoltarHandler(){
        setIsValid(true)
        console.log(isValid)
    }

    

    
    const valorMenu = useSelector(state => state.storeControl.valorMenu)
    const dadosAPI2 = useSelector(state => state.storeB.items)
    const imagens = useSelector(state => state.storeB.imagens)
    
    if (valorMenu === 'burguer' && !isValid){
        return(
          
        <Modal>
            <AdicionarBurguer onClickVoltar={clickVoltarHandler} menuId= {menuId} dadosAPI2={dadosAPI2} imagens={imagens}/>
        </Modal>
        )
      }
      if (valorMenu === 'porcao' && !isValid){
        return(
          
        <Modal>
            <AdicionarPorcao onClickVoltar={clickVoltarHandler} menuId= {menuId} dadosAPI2={dadosAPI2} imagens={imagens}/>
        </Modal>
        )
      }
    
      if (valorMenu === 'dog' && !isValid){
        return(
          
        <Modal>
            <AdicionarDog onClickVoltar={clickVoltarHandler} menuId= {menuId} dadosAPI2={dadosAPI2} imagens={imagens}/>
        </Modal>
        )
      }
    
    
    
    if (valorMenu === 'dog' && isValid){


        let novoDogs = dadosAPI2[0].dogs.map((item) => 
        Object.assign({}, item, {selected:false})
        )


        return(<div className='m-2 flex flex-col gap-3'>
        <h2 className='ml-3 text-2xl text-left font-serif'><strong>Hot Dogs</strong></h2>
        <ul>
        {novoDogs.map(item => <li key={item.id}><div className='aplicar-css m-2 h-40 grid grid-cols-3 border-solid border rounded-3xl drop-shadow-md bg-white' >
            <div className='flex items-end  rounded-l-3xl'>
          
            
                <Image className='absolute -left-2 top-6' src={imagens.Dogs[Number(item.id)-1]} width={150} height= "auto" alt='Imagem'/>
                <div className='ml-4 mb-4 font-bold text-red-600 text-xl '><p className={cherry.className}>{`R$${item.preço}`}</p></div>
          
            </div>
            <div></div>
            <div className='flex flex-col  text-end mb-3 mr-3 justify-evenly' id={item.id} onClick={clickAdicionarHandler}>
                <h3 className='font-bold mt-3 pb-3  drop-shadow'>{item.nome}</h3>
                <p className='text-xs'>{item.descri}</p>
                <div className='aplicar-css8 place-items-end text-green-500 text-sm'><TimerResetIcon/> <p> 10 min</p></div>
                
          </div>
         
            
            
          
        </div > </li>)}
        </ul>
        
        
      </div>)
    }

    if (valorMenu==='bebidas' && isValid){
        let novoBebidas = dadosAPI2[0].bebidas.map((item) => 
        Object.assign({}, item, {selected:false})
        )
        return(
            <DisplayBebidas dadosAPI = {novoBebidas}/>
        )
    }
    
    
    if (valorMenu==='burguer' && isValid){

        let novoBurguer = dadosAPI2[0].burguer.map((item) => 
        Object.assign({}, item, {selected:false})
        )


    
    return <div className='m-2 flex flex-col gap-3'>
    <h2 className='ml-3 text-2xl text-left font-serif'><strong>Burguers</strong></h2>
    <ul>
    {novoBurguer.map(item => <li key={item.id}><div className='aplicar-css m-2 h-40 grid grid-cols-3 border-solid border rounded-3xl drop-shadow-md bg-white' >
            <div className='flex items-end  rounded-l-3xl'>
          
            
                <Image className='absolute -left-2 top-6' src={imagens.Burguer[Number(item.id)-1]} width={200} height= "auto" alt='Imagem'/>
                <div className='ml-4 mb-4 font-bold text-red-600 text-xl drop-shadow'><p className={cherry.className}>{`R$${item.preço}`}</p></div>
          
            </div>
            <div></div>
            <div className='flex flex-col  text-end mb-3 mr-3 justify-evenly' id={item.id} onClick={clickAdicionarHandler}>
                <h3 className='font-bold mt-3 pb-3  drop-shadow'>{item.nome}</h3>
                <p className='text-xs'>{item.descri}</p>
                <div className='aplicar-css8 place-items-end text-green-500 text-sm'><TimerResetIcon/> <p> 20 min</p></div>
                
          </div>
         
            
            
          
        </div > </li>)}
        </ul>
    
    
  </div>}
  if (valorMenu==='porcao' && isValid){

    let novoBurguer = dadosAPI2[0].porcao.map((item) => 
    Object.assign({}, item, {selected:false})
    )



    return <div className='m-2 flex flex-col gap-3'>
    <h2 className='ml-3 text-2xl text-left font-serif'>Porções</h2>
    <ul>
    {novoBurguer.map(item => <li key={item.id}><div className='aplicar-css m-2 h-40 grid grid-cols-3 border-solid border rounded-3xl drop-shadow-md bg-white' >
            <div className='flex items-end  rounded-l-3xl'>
          
            
                <Image className='absolute -left-2 top-3' src={imagens.Porcao[Number(item.id)-1]} width={150} height= "auto" alt='Imagem'/>
                <div className='ml-4 mb-4 font-bold text-red-600 text-xl drop-shadow'><p className={cherry.className}>{`R$${item.preço}`}</p></div>
          
            </div>
            <div></div>
            <div className='flex flex-col  text-end mb-3 mr-3 justify-evenly' id={item.id} onClick={clickAdicionarHandler}>
                <h3 className='font-bold mt-3 pb-3  drop-shadow'>{item.nome}</h3>
                <p className='text-xs'>{item.descri}</p>
                <div className='aplicar-css8 place-items-end text-green-500 text-sm'><TimerResetIcon/> <p> 20 min</p></div>
                
          </div>
         
            
            
          
        </div > </li>)}
    </ul>


    </div>} else{

  return <PaginaInicial/>}

}



export default DisplayMenu