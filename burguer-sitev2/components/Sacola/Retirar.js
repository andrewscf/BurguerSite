
function Retirar(props){

    return(
        <div className="text-start bg-white">

            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                    autoComplete="first-name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="nome"
                    ref={props.retirarNome}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full p-5">
              <label htmlFor="retirarObc" className="block text-sm font-medium leading-6 text-gray-900">
                Observação
              </label>
              <div className="mt-2">
                <textarea
                  id="retirarObc"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  ref={props.retirarObc}
                />
              </div>
              
            </div>
            </div>


        </div>
    )
}

export default Retirar