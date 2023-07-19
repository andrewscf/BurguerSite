import footerImg from '../assets/footer.png'
import { ShoppingBag, UserCircle, Home } from 'lucide-react';
import Image from 'next/image'
import './DisplayMenu.css'

function Footer(){
    return <footer className='sticky bottom-0'>
    <div className='relative'>
      <div
      className='flex flex-col'>
        <Image className='w-screen' src={footerImg}/>
      </div>
      <div className='aplicar-css2 absolute rounded-full bg-slate-50 top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute bottom-2 left-2 bg-amber-100 rounded-full h-16 w-16 '>
          <div className='absolute top-5 left-5 flex justify-center'>
            <ShoppingBag stroke='#f2bc57'/>
            <div className='absolute text-xs bottom-5 left-5 font-bold text-amareloP'>
              2
            </div>
          </div>
          <div className='absolute right-32 top-12'>
            <Home stroke='#3B3F43'/>
          </div>
          <div className='absolute left-32 top-12'>
            <UserCircle stroke='#3B3F43'/>
          </div>
      </div>
      
      </div>
    
    </div>
  </footer>
}

export default Footer