
import { useDispatch, useSelector } from 'react-redux'
import '../DisplayMenu.css'
import { Trash2 } from 'lucide-react'
import DisplaySacola from './DisplaySacola'
import { Fragment } from 'react'
import { storeSacolaActions } from '../../store/storeSacola-slice'
import '../DisplayMenu.css'
import { Lilita_One } from '@next/font/google'
import { useRef } from 'react'
import { useState } from 'react'




const black = Lilita_One({
  subsets: ['latin'],
  weight: ['400']
})



function Sacola(props){
    const sacola = useSelector(state => state.storeSacola.sacola)
    const dispatch = useDispatch()

    const [ receber, setReceber ] = useState('')
    const [ taxaEntrega, setTaxaEntrega ] = useState(0)

    const retirarNome = useRef()
    const retirarObc = useRef()
    const entregarNome = useRef()
    const entregarObc = useRef()
    const entregarEndereço = useRef()
    const entregarNumero = useRef()
    const entregarBairro = useRef()
    const entregarMetodo = useRef()
    const entregarTroco = useRef()
    const agendarNome = useRef()
    const agendarObc = useRef()
    const agendarHora = useRef()




    function onRemoveHandler(e){
       const id = Number(e.currentTarget.id)
       dispatch(storeSacolaActions.removeSacola(id))
    }
    let total = 0 + taxaEntrega
    let modo = {}
    sacola.map(item => total = total+ item.preço)

    async function onEnviarHandler(event) {
        event.preventDefault()
        let troco = 0
        try{
            troco = entregarTroco.current.value
        } catch(error){

        }
        


        if (receber == 'retirar'){
            setTaxaEntrega(0)
             modo = {
                nome: retirarNome.current.value ?? '',
                observaçao: retirarObc.current.value ?? ''
            }
        }
        if (receber == 'entregar'){
             modo = {
                nome: entregarNome.current.value ?? '',
                observaçao: entregarObc.current.value ?? '',
                endereço: entregarEndereço.current.value ?? '',
                bairro: entregarBairro.current.value ?? '',
                numero: entregarNumero.current.value ?? '',
                metodo: entregarMetodo.current.value ?? '',
                troco: troco
            }
        }
        if (receber == 'agendar'){
            setTaxaEntrega(0)
             modo = {
                nome: agendarNome.current.value ?? '',
                observaçao: agendarObc.current.value ?? '',
                hora: agendarHora.current.value ?? ''
            }
        }
        

        const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({
            tipo: receber,
            modo: modo,
            pedido: sacola,
            total: total
          })
        
        
        });

        const data = await response.json();

        console.log(data)
        props.onClickEnviarHandler()
      }


    return (
    
    <Fragment>
        
        <main className="text-center bg-amber-50 h-screen"><form onSubmit={onEnviarHandler}>
            
                <p className='text-start p-5 pl-7 shadow text-stone-800'><strong>Seu pedido</strong></p>
                <section className=" bg-white shadow">
                    {sacola.map(item => <Fragment>
            
                        <div className="aplicar-css7 text-start p-2">
                            <div className='ml-5'>
                                <p><strong>{`${item.multiplicador}x ${item.nome}`}</strong></p>
                                <ul>{item.extras.map(item2 => <li className=' text-gray-500 text-sm' key={Math.random}>{`${item2} extra`}</li>)}</ul>
                                <hr></hr>
                                <ul>{item.removidos.map(item2 => <li className=' text-gray-500 text-sm' key={Math.random}>{`Sem ${item2}`}</li>)}</ul>
                                <p className='text-gray-500 text-sm'>{item.observaçao}</p>
                                <p>{`R$${item.preço.toFixed(2)}`}</p>
                            </div>
                            <div id={item.id} className='grid place-items-center' onClick={onRemoveHandler}>
                                <Trash2 />
                            </div>
            
                        </div>
                        <hr></hr>
                    </Fragment>)}
            
            
                    <div className='aplicar-css7 text-start p-7 border border-dotted border-amareloP'>
                            <p><strong>Total</strong></p>
                            <p><strong>{`R$${total.toFixed(2)}`}</strong></p>
                    </div>
                </section>
                <p className='text-start p-5 pl-7 shadow'><strong>Escolha como recerber</strong></p>
                <section className='shadow'>
                    <DisplaySacola 
                        retirarNome={retirarNome} 
                        retirarObc={retirarObc}
                        entregarNome={entregarNome}
                        entregarObc={entregarObc}
                        entregarEndereço={entregarEndereço}
                        entregarBairro={entregarBairro}
                        entregarNumero={entregarNumero}
                        entregarMetodo={entregarMetodo}
                        entregarTroco={entregarTroco}
                        agendarNome={agendarNome}
                        agendarObc={agendarObc}
                        agendarHora={agendarHora}
                        receber={receber}
                        setReceber={setReceber}
                        taxaEntrega={taxaEntrega}
                        setTaxaEntrega={setTaxaEntrega}
                        />
                </section>
                <footer className='sticky bottom-8 bg-white p-5 grid place-content-center'><div className={black.className}>
            
                        <button type='submit' className=' w-14 bg-white text-amareloP p-3 pl-20 pr-20 rounded shadow-lg border border-amareloP grid place-content-center' >Enviar pedido</button>
                </div>
                </footer>
        </form>
        
        </main>
    </Fragment>
    )

}

export default Sacola