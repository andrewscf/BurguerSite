import { Plus, Minus } from 'lucide-react';


function BotaoAdicionais(props){

    if(props.lista.includes(props.index)){
        console.log(true)
        return(
        <button type='button' id={props.index} className="grid place-items-center w-10 h-10 bg-red-500 rounded-tl-2xl rounded-br-2xl" onClick={props.onClickAddHandler}>
            <Minus stroke='white'/>
        </button>

        )
    }else{
        return(
        <button type='button' id={props.index} className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl" onClick={props.onClickAddHandler}>
                <Plus stroke='white'/>
        </button>
        )}

}

export default BotaoAdicionais