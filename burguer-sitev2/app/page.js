'use client'


import '../components/DisplayMenu.css'
import { Fragment } from 'react';
import Main from '../components/Main';
import Head from 'next/head';
import { Kavoon } from '@next/font/google'




const black = Kavoon({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home(props) {

  return (
    <Fragment>
      <Head>
    
      </Head>
      <div className="flex justify-center" id='overlay'></div>
      <div className="mx-auto text-center max-w-2xl bg-amber-50">
        <div id='overlays'></div>
        <Main/>
        
      
      </div>
    </Fragment>
  )


  }
