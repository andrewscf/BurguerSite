import { useState } from "react"
import { ArrowLeft, Plus, Minus } from 'lucide-react';

function BotaoAdicionar(){
    const [numero, setNumero] = useState(1)
    function aumentar(){
        setNumero(numero+1)
    }

    function diminuir(){
        setNumero(numero-1)
    }

    return(
        <div className='grid place-items-center'>
             <div className='h-10 w-32 bg-white flex justify-between border border-black pt-1.5 rounded-xl'>
               <div onClick={diminuir}><Minus/></div>
               <div><strong>{numero}</strong></div>
               <div onClick={aumentar}><Plus/></div>
             </div>
           </div>
    )
}

export default BotaoAdicionar