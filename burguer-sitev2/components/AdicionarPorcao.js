import { ArrowLeft } from 'lucide-react';
import '../components/DisplayMenu.css'
import molho from '../assets/molho.jpg'
import cheddar from '../assets/cheddar.jpg'
import Image from 'next/image'
import BotaoAdicionar from './BotaoAdicionar';
import { useState } from 'react';
import BotaoAdicionais from './BotaoAdicionais';
import { useDispatch } from 'react-redux';
import { storeSacolaActions } from '../store/storeSacola-slice';
import { Cherry_Bomb_One } from 'next/font/google'


const cherry = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: ['400']
})




function AdicionarPorcao(props){
  const [addPreço, setAddPreço] = useState(0)
  const listaDeAdicionais = [2,0]
  const listaDeNomes = ['creme cheddar', 'molho']
  const [listaAdicionados, setListaAdicionados] = useState([])
  const [numero, setNumero] = useState(1)
  const dispatch = useDispatch()

  function onClickAddHandler(e){
    const ind = e.currentTarget.id

    if (listaAdicionados.includes(ind)){
      const i = listaAdicionados.indexOf(ind)
      let listvar = [...listaAdicionados]
      listvar.splice(i, 1)
      setListaAdicionados(listvar)
      console.log(ind, i , listaAdicionados.splice(i, 1))
      setAddPreço(addPreço - listaDeAdicionais[ind-1])
    }else{
      setListaAdicionados([...listaAdicionados, ind])
      setAddPreço(addPreço + listaDeAdicionais[ind-1])
    }
  }
  
  function onSubmitHandler(event){
    event.preventDefault()
    let listaDeRemovidos = []
    

    dispatch(storeSacolaActions.addSacola({
      id: Math.random(),
      nome: props.dadosAPI2[0].porcao[Number(props.menuId)-1].nome,
      multiplicador: numero,
      extras: listaAdicionados.map(item => listaDeNomes[Number(item) -1]),
      removidos: listaDeRemovidos,
      observaçao: event.target.about.value,
      preço: Number.parseFloat(numero*(Number(props.dadosAPI2[0].porcao[Number(props.menuId)-1].preço) + addPreço))

    }))
    dispatch(storeSacolaActions.addItem(numero))
    props.onClickVoltar()
  }

  function pegarNumero(valor){
    setNumero(valor)
  }
  

    return(

      <form onSubmit={onSubmitHandler}>
      <div className=" text-start">
       <div className='relative h-80 aplicar-css6 grid place-items-center rounded-2xl -m-3'>
         <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={props.onClickVoltar}><ArrowLeft /></div>
         <div>
           <Image src={props.imagens.Porcao[Number(props.menuId)-1]}/>
         </div>
         <div className='absolute left-80 bottom-2 p-1 bg-white rounded-full text-center'>Ver imagem real</div>
       </div>
       <div className='aplicar-css4 h-28 mt-3'>
         <div>
           <h2 className=' text-xl mt-2 mb-2'><strong>{props.dadosAPI2[0].porcao[Number(props.menuId)-1].nome}</strong></h2>
           <p className=' text-sm'>{props.dadosAPI2[0].porcao[Number(props.menuId)-1].descri}</p>
         </div>
         <div className='flex justify-end mr-3 mt-2 text-xl'><strong>R${props.dadosAPI2[0].porcao[Number(props.menuId)-1].preço}</strong></div>
         </div>
       <div className='h-50'>
         <h2 className='mt-4 mb-2'>Adicionais</h2>
         <div className='flex overflow-x-scroll pb-10 hide-scroll-bar'>
           <div className=' flex flex-nowrap gap-2'>
               <div className="flex justify-center w-s bg-white">
               <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                       <div className='flex justify-center rounded-t-2xl'><div>
                         <Image src={cheddar}/>
                       </div></div>
      
                       <div className="grid grid-cols-2 rounded-b-2xl shadow">
                           <p className="ml-3 flex items-center text-sm "><strong>R$2,00</strong></p>
                           <div className="grid items-end justify-items-end">
                           <BotaoAdicionais onClickAddHandler={onClickAddHandler} lista= {listaAdicionados} index={'1'}/>
                           </div>
                       </div>
                       <div className='flex justify-center text-sm'>Creme cheddar</div>
                   </div>
      
               </div>
               <div className="flex justify-center w-s bg-white">
               <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                       <div className='flex justify-center rounded-t-2xl'><div>
                         <Image src={molho}/>
                       </div></div>
      
                       <div className="grid grid-cols-2 rounded-b-2xl shadow">
                           <p className="ml-3 flex items-center text-sm "><strong>R$0,00</strong></p>
                           <div className="grid items-end justify-items-end">
                           <BotaoAdicionais onClickAddHandler={onClickAddHandler} lista= {listaAdicionados} index={'2'}/>
                           </div>
                       </div>
                       <div className='flex justify-center '>Molho</div>
                   </div>
      
               </div>
               
           </div>
      
         </div>
      
       </div>
       
       <div className='h-30'>
         <h2 className='mt-7'>Observações</h2>
         <div class="m-2">
               <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
             </div>
         </div>
       <footer className='border h-28 sticky bottom-0 grid grid-cols-2 bg-white'>
       <BotaoAdicionar pegarNumero={pegarNumero}/>
         <div className='grid place-items-center'>
           <button type='submit' className=' bg-amareloP rounded-2xl p-1 text-center shadow text-gray-900'><p className={cherry.className}>Adicionar ao carrinho <br></br> R${Number.parseFloat(numero*(Number(props.dadosAPI2[0].porcao[Number(props.menuId)-1].preço) + addPreço)).toFixed(2)}</p></button>
           </div>
         </footer>
            </div>
    </form>
     
     )
}

export default AdicionarPorcao