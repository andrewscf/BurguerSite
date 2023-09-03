import { Plus } from 'lucide-react'
import Image from 'next/image'
import cocalata from '../assets/cocalata.png'
import cocazerolata from '../assets/cocazerolata.png'
import guaranalata from '../assets/guaranalata.png'
import pepsilata from '../assets/pepsilata.png'
import fantalaranjalata from '../assets/fantalaranjalata.png'
import guaranazerolata from '../assets/guaranazerolata.png'
import coca600 from '../assets/coca600.png'
import fantalaranja600 from '../assets/fantalaranja600.png'
import fantauva600 from '../assets/fantauva600.png'
import guarana600 from '../assets/guarana600.png'
import pepsi1l from '../assets/pepsi1l.png'
import coca2l from '../assets/coca2l.png'
import guarana2l from '../assets/guarana2l.png'
import fantalaranja2l from '../assets/fantalaranja2l.png'
import sprite2l from '../assets/sprite2l.png'
import original from '../assets/original.png'
import brahma from '../assets/brahma.png'
import budweiser from '../assets/budweiser.png'
import skol from '../assets/skol.png'
import pepsi2l from '../assets/pepsi2lC.png'
import { useDispatch } from 'react-redux';
import { storeSacolaActions } from '../store/storeSacola-slice';
import { Cherry_Bomb_One } from 'next/font/google'


const cherry = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: ['400']
})




function DisplayBebidas(props){
    const dispatch = useDispatch()

    const imagensBebidas = [cocalata, cocazerolata, guaranalata, pepsilata, fantalaranjalata, guaranazerolata, coca600, fantalaranja600, fantauva600, guarana600, pepsi1l, coca2l, guarana2l, pepsi2l, fantalaranja2l, sprite2l, original, brahma, budweiser, skol]

    for (let i = 0; i < props.dadosAPI.length; i++){ props.dadosAPI[i].imagem = imagensBebidas[i] }

    function onSubmitHandler(event){
        event.preventDefault()
        console.log(event.target[0].id)
        const index = Number(event.target[0].id)
        const numero = 1
        
    
        dispatch(storeSacolaActions.addSacola({
          id: Math.random(),
          nome: props.dadosAPI[index].nome,
          multiplicador: 1,
          extras: [],
          removidos: [],
          observaçao: '',
          preço: Number.parseFloat((Number(props.dadosAPI[index].preço)))
    
        }))
        dispatch(storeSacolaActions.addItem(numero))
    }


    return(
            <div className='bg-amber-50 m-2'>
                <h2 className='ml-3 mb-5 text-2xl text-left font-serif'><strong>Bebidas</strong></h2>
                <div className="grid grid-cols-2 gap-3">
                    {props.dadosAPI.map((item, index) =>

                        <form 
                        onSubmit={onSubmitHandler}
                        key={index}>
                            <div className="flex justify-center w-s bg-amber-50">
                                <div className="aplicar-css3 w-48 h-48 bg-white border  rounded-2xl shadow">
                                    <div className='flex justify-center'><div>
                                        <Image height={120} src={item.imagem}
                                        alt='Imagem'/>
                                    </div></div>
                                    <div>{item.nome}</div>
                                    <div className="grid grid-cols-2">
                                        <div className="ml-3 flex items-center text-red-600"><p className={cherry.className}>R${item.preço}</p></div>
                                        <div className="grid items-end justify-items-end">
                                            <button type='submit' className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl"
                                            id={index}>
                                                <Plus stroke='white'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>)}
            
                </div>
            </div>
    )
}

export default DisplayBebidas