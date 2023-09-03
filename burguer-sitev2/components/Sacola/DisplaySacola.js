'use client'
import { ShoppingBag, Bike, AlarmClock } from 'lucide-react'
import Retirar from './Retirar'
import { Fragment } from 'react'
import Agendar from './Agendar'
import Entregar from './Entregar'



function DisplaySacola(props){
    
    

    if (props.receber === 'retirar'){
        return(
            <Fragment>
                <div className='grid grid-cols-3 place-items-center bg-white pt-10 pb-10'>
                        <div className='grid grid-rows-2  place-items-center p-5 rounded w-28 shadow bg-amareloP'>
                            <ShoppingBag/>
                            <p>Retirar</p>
                        </div >
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('entregar')}}>
                            <Bike/>
                            <p>Entregar</p>
                        </div>
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('agendar')}}>
                            <AlarmClock/>
                            <p>Agendar</p>
                        </div>
                </div>
                <hr></hr>
                <Retirar 
                retirarNome={props.retirarNome} 
                retirarObc={props.retirarObc}/>
            </Fragment>
    
        )

    }

    if (props.receber === 'entregar'){
        return(
            <Fragment>
                <div className='grid grid-cols-3 place-items-center bg-white pt-10 pb-10'>
                        <div className='grid grid-rows-2  place-items-center p-5 rounded w-28 shadow' onClick={()=>{props.setReceber('retirar')}}>
                            <ShoppingBag/>
                            <p>Retirar</p>
                        </div >
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28 bg-amareloP'>
                            <Bike/>
                            <p>Entregar</p>
                        </div>
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('agendar')}}>
                            <AlarmClock/>
                            <p>Agendar</p>
                        </div>
                </div>
                <hr></hr>
                <Entregar
                 entregarNome={props.entregarNome}
                 entregarObc={props.entregarObc}
                 entregarEndereço={props.entregarEndereço}
                 entregarBairro={props.entregarBairro}
                 entregarNumero={props.entregarNumero}
                 entregarMetodo={props.entregarMetodo}
                 entregarTroco={props.entregarTroco}
                 taxaEntrega={props.taxaEntrega}
                 setTaxaEntrega={props.setTaxaEntrega}
                />
            </Fragment>
    
        )

    }

    if (props.receber === 'agendar'){
        props.setTaxaEntrega(0)
        return(
            <Fragment>
                <div className='grid grid-cols-3 place-items-center bg-white pt-10 pb-10'>
                        <div className='grid grid-rows-2  place-items-center p-5 rounded w-28 shadow' onClick={()=>{props.setReceber('retirar')}}>
                            <ShoppingBag/>
                            <p>Retirar</p>
                        </div >
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('entregar')}}>
                            <Bike/>
                            <p>Entregar</p>
                        </div>
                        <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28 bg-amareloP'>
                            <AlarmClock/>
                            <p>Agendar</p>
                        </div>
                </div>
                <hr></hr>
                <Agendar
                    agendarNome={props.agendarNome}
                    agendarObc={props.agendarObc}
                    agendarHora={props.agendarHora}
                />
            </Fragment>
    
        )

    }
    else{


    return(
        <Fragment>
            <div className='grid grid-cols-3 place-items-center bg-white pt-10 pb-10'>
                    <div className='grid grid-rows-2  place-items-center p-5 rounded w-28 shadow' onClick={()=>{props.setReceber('retirar')}}>
                        <ShoppingBag/>
                        <p>Retirar</p>
                    </div >
                    <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('entregar')}}>
                        <Bike/>
                        <p>Entregar</p>
                    </div>
                    <div className='grid grid-rows-2 shadow place-items-center p-5 rounded w-28' onClick={()=>{props.setReceber('agendar')}}>
                        <AlarmClock/>
                        <p>Agendar</p>
                    </div>
            </div>
            <hr></hr>
        </Fragment>

    )}
}

export default DisplaySacola