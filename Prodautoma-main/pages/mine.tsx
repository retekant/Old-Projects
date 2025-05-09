import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react';





const Home: NextPage = () => {
  //const [icon,setIcon] = useState('farm');

 
  return (

    <div className='space-y-20 flex w-full h-full'>
   
      <div className="fixed flex mt-0 ml-0 h-16 w-full text-right bg-slate-800 justify-end">

        <h1 className="text-3xl  text-rose-500 text-opacity-70 p-3">Prodautoma</h1>
        <div className='mr-10 mt-2 bg-indigo-700 w-20 h-12 p-2 rounded-lg flex justify-center '>
          <Image src={`/icon_mine.png`} alt="asdf" width={35} height={10} /></div>
        
        </div>




        <div className="justify-center items-center w-full flex h-10 flex-col"> 
            <h1 className="text-6xl text-black">tk</h1>
            </div>
      </div>

 
  )
}
/*<h1 className="text-xl text-emerald-900">{icon}</h1>
          <button className="bg-blue-900 w-10" onClick={() => {setIcon('mine')}}> mine</button>
          <button className="bg-emerald-500" onClick={() => {setIcon('farm')}}> farm</button> */


    
  export default Home
    