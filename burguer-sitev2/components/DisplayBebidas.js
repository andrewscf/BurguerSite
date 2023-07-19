import { Plus } from 'lucide-react'
import Image from 'next/image'
import cocadl from '../assets/guarana600.png'


function DisplayBebidas(){
    return(
        <div className='bg-white m-2'>
            <h2 className='ml-3 mb-5 text-2xl text-left font-serif'>Bebidas</h2>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-s bg-white">
                    <div className="aplicar-css3 w-48 h-48 bg-slate-100 border  rounded-2xl shadow">
                        <div className='flex justify-center'><div>
                            <Image height={120} src={cocadl}/>
                        </div></div>
                        <div>Guaraná 1L</div>
                        <div className="grid grid-cols-2">
                            <p className="ml-3 flex items-center">R$7,00</p>
                            <div className="grid items-end justify-items-end">
                                <div className="grid place-items-center w-10 h-10 bg-amareloP rounded-tl-2xl rounded-br-2xl">
                                    <Plus stroke='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisplayBebidas