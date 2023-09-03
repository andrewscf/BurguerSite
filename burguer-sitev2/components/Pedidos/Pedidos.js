import { useEffect } from "react"
import { useState } from "react"


function Pedidos(){
  const [dados, setDados] = useState('oi') 
    useEffect(()=>{
        const fetchDados = async () => {
           const response = await fetch('/api/user')
           const data = await response.json()
           setDados(data)

   
   
        }
        fetchDados()
       }, [])
    
    console.log(dados)
    return <div>
        {(dados != 'oi') && dados.pedido.map(item => 
            <div>
                <hr></hr>
                <h2>{item.tipo.toUpperCase()}</h2>
                <h3>{item.modo.nome}</h3>
                <h3>Total: R${item.total.toFixed(2)}</h3>
                {(item.tipo === 'agendar') && <div>
                    <h3>Hora da retirada: {item.modo.hora}</h3>
                </div>}
                {(item.tipo === 'entregar') && <div>
                    <h3>{item.modo.endereço},{item.modo.numero}</h3>
                    <h3>{item.modo.bairro}</h3>
                    <h3>Método:{item.modo.metodo}</h3>
                    <h3>Troco para: {item.modo.troco}</h3>
                </div>}
                <h3>Observação: {item.modo.observaçao}</h3>
                
                {item.pedido.map(item2 =><div>
                    <hr></hr>
                    <p>{item2.multiplicador}x<span>{item2.nome}</span></p>
                    {item2.extras.map(item3=> <ul>
                        <li>{item3} extra</li>
                    </ul>)}
                    {item2.removidos.map(item3=> <ul>
                        <li>Remover {item3}</li>
                    </ul>)}
                    <p>Observação: {item2.observaçao}</p>
                    <p>Preço: R${item2.preço.toFixed(2)}</p> 

                    </div>)}
                <hr></hr>
                <br></br>
                <br></br>
            </div>   
            )}
    </div>
    
}
export default Pedidos