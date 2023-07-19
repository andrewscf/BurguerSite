import classico from '../assets/classico.png'
import duplo from '../assets/duplo.png'
import triplo from '../assets/triplo.png'
import kids from '../assets/kids.png'
import hotsimples from '../assets/hotsimples.png'
import hotduplo from '../assets/hotduplo.png'
import hotcalabresa from '../assets/hotcalabresa.png'
import hotmisto from '../assets/hotmisto.png'
import './DisplayMenu.css'
import Image from 'next/image'
import DisplayBebidas from './DisplayBebidas'
import { useState } from 'react'


function DisplayMenu(props){
    

    const dadosBurguer = [
        {
            key: 'B1',
            nome: 'Clássico',
            descrição: 'Hamburguer de gado, alface, tomate, queijo mussarela, picles, cebola agridoce, bacon, molho e fritas',
            img: classico,
            valor: 21.50
        },
        {
            key: 'B2',
            nome: 'Duplo',
            descrição: 'Hamburguer de gado, hamburguer de frango, alface, tomate, queijo mussarela, picles, cebola agridoce, bacon, molho e fritas',
            img: duplo,
            valor: 26.50
        },
        {
            key: 'B3',
            nome: 'Triplo',
            descrição: '3 hamburgueres de gado, alface, tomate, 3 fatias de queijo mussarela, aneis de cebola, picles, cebola agridoce, bacon e fritas',
            img: triplo,
            valor: 34.50
        },
        {
            key: 'B4',
            nome: 'Kids',
            descrição: 'Hamburguer de gado, alface, tomate, queijo mussarela, picles, cebola agridoce, bacon molho, fritas e um refrigerante 200ml',
            img: kids,
            valor: 18.50
        }
    ]

    const dadosDog =[
        {
            key: 'H1',
            nome: 'Hot Dog Simples',
            descrição: 'Salsicha, alface, tomate, milho, ervilha, batata palha, mostarda, catchup e molho',
            img: hotsimples,
            valor: 16
        },
        {
            key: 'H2',
            nome: 'Hot Dog Duplo',
            descrição: '2 salsichas, alface, tomate, milho, ervilha, batata palha, mostarda, catchup e molho',
            img: hotduplo,
            valor: 18.50
        },
        {
            key: 'H3',
            nome: 'Hot Dog Calabresa',
            descrição: 'Calabresa, alface, tomate, milho, ervilha, batata palha, mostarda, catchup e molho',
            img: hotcalabresa,
            valor: 19
        },
        {
            key: 'H4',
            nome: 'Hot Dog Misto',
            descrição: 'Salsicha, calabresa, alface, tomate, milho, ervilha, batata palha, mostarda, catchup e molho',
            img: hotmisto,
            valor: 20
        }

    ]

    if (props.valorMenu === 'dog'){
        return(<div className='m-2 flex flex-col gap-3'>
        <h2 className='ml-3 text-2xl text-left font-serif'>Hot Dogs</h2>
        <ul>
        {dadosDog.map(item => <li key={item.key}><div className='aplicar-css m-2 h-40 grid grid-cols-3 border-solid border rounded-3xl drop-shadow-md bg' >
            <div className='flex items-end bg-amareloP rounded-l-3xl'>
          
            
                <Image className='absolute left-2 top-6' src={item.img} width={110} height= "auto" alt='Imagem'/>
                <p className='ml-4 mb-4 font-bold'>{`R$${item.valor.toFixed(2)}`}</p>
          
            </div>
            <div></div>
            <div className='flex flex-col justify-between text-end mb-3 mr-3'>
                <h3 className='font-bold mt-3'>{item.nome}</h3>
                <p className='text-xs'>{item.descrição}</p>
                <div><button className='rounded-2xl bg-amareloP border border-solid w-24'>Adicionar</button></div>
          </div>
         
            
            
          
        </div > </li>)}
        </ul>
        
        
      </div>)
    }

    if (props.valorMenu==='bebidas'){
        return(
            <DisplayBebidas/>
        )
    }
    

    return <div className='m-2 flex flex-col gap-3'>
    <h2 className='ml-3 text-2xl text-left font-serif'>Burguers</h2>
    <ul>
        {dadosBurguer.map(item => <li key={item.key}><div className='aplicar-css m-2 h-40 grid grid-cols-3 border-solid border rounded-3xl drop-shadow-md' >
            <div className='flex items-end bg-amareloP rounded-l-3xl'>
          
            
                <Image className='absolute left-2 top-6' width={110} height= "auto" src={item.img} alt='Imagem'/>
                <p className='ml-4 mb-4 font-bold'>{`R$${item.valor.toFixed(2)}`}</p>
          
            </div>
            <div></div>
            <div className='flex flex-col justify-between text-end mb-3 mr-3'>
                <h3 className='font-bold mt-3'>{item.nome}</h3>
                <p className='text-xs'>{item.descrição}</p>
                <div><button className='rounded-2xl bg-amareloP border border-solid w-24' onClick={props.onClickAdicionar}>Adicionar</button></div>
          </div>
         
            
            
          
        </div > </li>)}
        </ul>
    
    
  </div>
}

export default DisplayMenu