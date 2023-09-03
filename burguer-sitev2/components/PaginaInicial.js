import { Megaphone, Vegan, ArrowBigUp, Table, Clock5,ChevronLeft, ArrowLeft } from 'lucide-react'
import whatsappIcon from '../assets/whatsapp.png'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'
import { Lilita_One } from '@next/font/google'

const black = Lilita_One({
  subsets: ['latin'],
  weight: ['400']
})

function PaginaInicial(){
    const [ pagina, setPagina ] = useState('')

    if (pagina == 'promoçao'){

        return <Modal>
            <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={()=> setPagina('')}><ArrowLeft /></div>
             <div ></div>
            <div>
                <h2 className=' text-2xl'>Promoções do dia</h2>
                <div className='flex h-screen justify-center place-items-center'>
                    Sem promoções no momento
                </div>

            </div>
        </Modal>
    }
    if (pagina == 'taxas'){

        return <Modal>
        <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={()=> setPagina('')}><ArrowLeft /></div>
         <div ></div>
        <div>
            <h2 className=' text-2xl'>Taxas de Entrega</h2>
            
            <div className='grid grid-cols-2 gap-5 mt-10 mb-10'>
                <p>Bela vista</p>
                <p>R$ 7,00</p>
                <p>Centro</p>
                <p>R$ 7,00</p>
                <p>Cidade Alta</p>
                <p>R$ 7,00</p>
                <p>Cidade Baixa</p>
                <p>R$ 7,00</p>
                <p>Centro</p>
                <p>R$ 7,00</p>
                <p>Poço 5</p>
                <p>R$ 7,00</p>
                <p>Vila Julieta</p>
                <p>R$ 7,00</p>
                <p>Vila Motta</p>
                <p>R$ 7,00</p>
                <p>Vila Nova</p>
                <p>R$ 7,00</p>
                <p>Charrua</p>
                <p>R$ 8,00</p>
                <p>São josé</p>
                <p>R$ 8,00</p>
                <p>Regilney</p>
                <p>R$ 8,00</p>
                <p>Santo Antônio</p>
                <p>R$ 12,00</p>


            </div>
            

        </div>
    </Modal>
    }
    if (pagina == 'vege'){

        return <Modal>
        <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={()=> setPagina('')}><ArrowLeft /></div>
         <div ></div>
        <div>
            <h2 className=' text-2xl'>Opções Vegetarianas</h2>
            <div className='flex h-screen justify-center place-items-center'>
                Em breve
            </div>

        </div>
    </Modal>
    }
    if (pagina == 'horas'){

        return <Modal>
        <div className='absolute top-10 left-5 h-10 w-10 rounded-full bg-white grid place-items-center' onClick={()=> setPagina('')}><ArrowLeft /></div>
         <div ></div>
        <div>
            <h2 className=' text-2xl'>Horários de atendimento</h2>
            
            <div className='grid grid-cols-2 gap-5 mt-10 mb-10'>
                <p>Segunda</p>
                <p>-</p>
                <p>Terça</p>
                <p>17:00 - 23:30</p>
                <p>Quarta</p>
                <p>17:00 - 23:30</p>
                <p>Quinta</p>
                <p>17:00 - 23:30</p>
                <p>Sexta</p>
                <p>17:00 - 23:30</p>
                <p>Sábado</p>
                <p>17:00 - 23:30</p>
                <p>Domingo</p>
                <p>17:00 - 23:30</p>


            </div>
            

        </div>
    </Modal>
    }
    if(pagina === ''){

    return <div className='h-4/5'>
    <div className='grid grid-rows-2 bg-amareloP'><div className='flex justify-center'><ArrowBigUp/><ArrowBigUp/><ArrowBigUp/></div><p>Acesse o menu</p></div> 
  
  <div className='grid grid-cols-2 h-72 m-3 gap-3'>
      <div className='grid grid-rows-2 border border-blue-100 place-items-center bg-red-500' onClick={() => setPagina('promoçao')}><div className='flex justify-center'><Megaphone stroke='white' width="35" height="35"/></div><p className='text-white'>Promoções do dia</p>
      </div>
      <div className='grid grid-rows-2 border border-blue-100 place-items-center bg-green-500' onClick={() => setPagina('vege')}><div><Vegan stroke='white' width="35" height="35"/></div><p className='text-white'>Opções vegetarianas</p></div>
      <div className='grid grid-rows-2 border border-blue-100 place-items-center bg-cyan-400' onClick={() => setPagina('taxas')}><div><Table stroke='white' width="35" height="35"/></div><p className='text-white'>Taxas de entrega</p></div>
      <div className='grid grid-rows-2 border border-blue-100 place-items-center bg-blue-400' onClick={() => setPagina('horas')}><div><Clock5 stroke='white' width="35" height="35"/></div><p className='text-white'>Horários de atendimento</p></div>
  </div>
  <div className='mt-5'>
    <p>Redes sociais</p>
    <div className='flex justify-evenly m-5'>
        <a href="http://wa.me/51992935657">
            <Image height={50} src={whatsappIcon} alt='Imagem'/>
        </a>
        <a href="http://">
            <Image height={50} src={facebookIcon} alt='Imagem'/>
        </a>
        <a href="">
            <Image height={50} src={instagramIcon} alt='Imagem'/>
        </a>
    </div>
  </div>
  </div>}

}

export default PaginaInicial