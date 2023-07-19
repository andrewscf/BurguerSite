import { ArrowLeft, Plus, Minus } from 'lucide-react';
import classico from '../assets/classico2.png'
import '../components/DisplayMenu.css'
import batata from '../assets/batata.png'
import Image from 'next/image'
import BotaoAdicionar from './BotaoAdicionar';

function Adicionarv2(props){

    return(

        <div className=" bg-white m-3">
         <div className='relative h-80 aplicar-css6 grid place-items-center rounded-2xl -m-3'>
           <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={props.onClickVoltar}><ArrowLeft /></div>
           <div >
             <Image src={classico}/>
           </div>
           <div className='absolute left-80 bottom-2 p-1 bg-white rounded-full'>Ver imagem real</div>
         </div>
         <div className='aplicar-css4 h-28 mt-3 '>
           <div>
             <h2 className=' text-xl mt-2 mb-2'><strong>Clássico</strong></h2>
             <p className=' text-sm'>Hamburguer de gado, alface, tomate, queijo mussarela, picles, cebola agridoce, bacon, molho e fritas</p>
           </div>
           <div className='flex justify-end mr-3 mt-2 text-xl'><strong>R$ 21,50</strong></div>
           </div>
         <div className='h-50'>
           <h2 className='mt-4 mb-2'>Adicionais</h2>
           <div className='flex overflow-x-scroll pb-10 hide-scroll-bar'>
             <div className=' flex flex-nowrap gap-2'>
             <div className="flex justify-center w-s bg-white">
                 <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                         <div className='flex justify-center rounded-t-2xl'><div>
                           <Image src={batata}/>
                         </div></div>
                         
                         <div className="grid grid-cols-2 rounded-b-2xl shadow">
                             <p className="ml-3 flex items-center text-sm "><strong>R$5,00</strong></p>
                             <div className="grid items-end justify-items-end">
                                 <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                     <Plus stroke='white'/>
                                 </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>Batatas</div>
                     </div>
                     
                 </div>
     
                 <div className="flex justify-center w-s bg-white">
                 <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                         <div className='flex justify-center rounded-t-2xl'><div>
                           <Image src={batata}/>
                         </div></div>
                         
                         <div className="grid grid-cols-2 rounded-b-2xl shadow">
                             <p className="ml-3 flex items-center text-sm "><strong>R$5,00</strong></p>
                             <div className="grid items-end justify-items-end">
                                 <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                     <Plus stroke='white'/>
                                 </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>Batatas</div>
                     </div>
                     
                 </div>
     
                 <div className="flex justify-center w-s bg-white">
                 <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                         <div className='flex justify-center rounded-t-2xl'><div>
                           <Image src={batata}/>
                         </div></div>
                         
                         <div className="grid grid-cols-2 rounded-b-2xl shadow">
                             <p className="ml-3 flex items-center text-sm "><strong>R$5,00</strong></p>
                             <div className="grid items-end justify-items-end">
                                 <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                     <Plus stroke='white'/>
                                 </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>Batatas</div>
                     </div>
                     
                 </div>
     
                 <div className="flex justify-center w-s bg-white">
                 <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                         <div className='flex justify-center rounded-t-2xl'><div>
                           <Image src={batata}/>
                         </div></div>
                         
                         <div className="grid grid-cols-2 rounded-b-2xl shadow">
                             <p className="ml-3 flex items-center text-sm "><strong>R$5,00</strong></p>
                             <div className="grid items-end justify-items-end">
                                 <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                     <Plus stroke='white'/>
                                 </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>Batatas</div>
                     </div>
                     
                 </div>
     
                 <div className="flex justify-center w-s bg-white">
                 <div className="aplicar-css5 w-28 h-40  rounded-t-2xl">
                         <div className='flex justify-center rounded-t-2xl'><div>
                           <Image src={batata}/>
                         </div></div>
                         
                         <div className="grid grid-cols-2 rounded-b-2xl shadow">
                             <p className="ml-3 flex items-center text-sm "><strong>R$5,00</strong></p>
                             <div className="grid items-end justify-items-end">
                                 <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                     <Plus stroke='white'/>
                                 </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>Batatas</div>
                     </div>
                     
                 </div>
                 
                 
                 
                 
     
             </div>
             
           </div>
           
         </div>
         <div>
           <h2 className='mb-4'>Remover ingredientes</h2>
           <div className='grid grid-cols-2 m-2'>
             <div class="flex items-center mb-4">
               <input id="default-checkbox1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Alface</label>
             </div>
             <div class="flex items-center mb-4">
               <input id="default-checkbox2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Tomate</label>
             </div>
             <div class="flex items-center mb-4">
               <input id="default-checkbox3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Queijo</label>
             </div>
             <div class="flex items-center mb-4">
             <input  id="default-checkbox5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Cebola</label>
             </div>
             <div class="flex items-center mb-4">
               <input  id="default-checkbox5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Bacon</label>
             </div>
             <div class="flex items-center mb-4">
               <input id="default-checkbox6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-black">Remover Molho</label>
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
           <BotaoAdicionar/>
           <div className='grid place-items-center'>
             <div className=' bg-amareloP rounded-2xl p-1 text-center'>Adicionar ao carrinho <br></br> R$21,50</div>
             </div>
           </footer>
      </div>
     
     )
}

export default Adicionarv2