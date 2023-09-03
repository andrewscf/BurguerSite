import { useState } from "react"
import { Fragment } from "react"

function Entregar(props){
  const [troco, setTroco] = useState('')
  
  function onChangeHandler(event){
    console.log(event.target.value)
    if (event.target.value === 'Dinheiro'){
      setTroco('troco')
    }
    else{
      setTroco('')
    }
  }

  function onChangeTaxaHandler(event){
    let valor = event.target.value
    if (valor === 'Centro' || valor === 'Cidade Baixa' || valor === 'Cidade Alta'){
      props.setTaxaEntrega(7)
    }
    if (valor === 'Charrua'){
      props.setTaxaEntrega(8)
    }
    if(valor === 'R1'){
      props.setTaxaEntrega(10)
    }
    if(valor === '-'){
      props.setTaxaEntrega(0)
    }
  }

    return(<Fragment>
        
            <div className="text-start bg-white pb-5">
        
                <div className=" gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4 p-5">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="nome"
                        ref={props.entregarNome}
                      />
                    </div>
                  </div>
                </div>
                <div className="aplicar-css8">
                <div className="w-50 pl-5 pr-5">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Endereço
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ref={props.entregarEndereço}
                    />
                  </div>
                </div>
                <div className="w-20 pr-5">
                  <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                    Número
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ref={props.entregarNumero}
                    />
                  </div>
                </div>
                </div>
                <div className="aplicar-css8 pl-5 pr-5">
                    <div className="sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Bairro
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          ref={props.entregarBairro}
                          onChange={onChangeTaxaHandler}
                        >
                          <option>-</option>
                          <option>Centro</option>
                          <option>Cidade Baixa</option>
                          <option>Cidade Alta</option>
                          <option>Charrua</option>
                          <option>R1</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-6 text-gray-900 justify-evenly text-center w-20">
                        <p>Valor</p>
                        <p>R${props.taxaEntrega.toFixed(2)}</p>
                    </div>
                </div>
        
        
                
                </div>
        
            </div>
            <div className='text-start p-5 pl-7 bg-amber-50 shadow-inner'>
                <p><strong>Escolha como pagar</strong></p>
            </div>
            <div className="text-start bg-white pt-2">
            <div className="pl-5 pr-5 mt-5">
                    <div className="sm:col-span-3">
                      <label htmlFor="country2" className="block text-sm font-medium leading-6 text-gray-900">
                        Método
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={onChangeHandler}
                          id="country2"
                          name="country2"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          ref={props.entregarMetodo}
                        >
                          <option>Cartão</option>
                          <option>Dinheiro</option>
                          <option>Pix</option>
                        </select>
                      </div>
                    </div>

                    {(troco === 'troco') && <div className="w-32 pr-5">
                      <label htmlFor="troco" className="block text-sm font-medium leading-6 text-gray-900">
                      Troco para:
                      </label>
                      <div className="mt-2">
                      <input
                      type="text"
                      name="troco"
                      id="troco"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ref={props.entregarTroco}
                      />
                      </div>
                  </div>} 
                    
                    
                </div>
        
        
                <div className="col-span-full p-5">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Observação
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                      ref={props.entregarObc}
                    />
                  </div>
        
                </div>
                

            </div>

    </Fragment>
    )
}

export default Entregar