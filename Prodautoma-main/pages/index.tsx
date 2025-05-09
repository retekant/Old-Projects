import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  const [icon,setIcon] = useState('farm');

 
  return (

    <div className=' min-h-screen w-full bg-indigo-900'>

   <Topbar     />




          {/* When it becomes larger make each section own function asnd salfkj;kljadsf;lkjasdkl;jdasfk;jlds;flajk */}
        <div className="  w-full h-screen flex flex-rows justify-center bg-white bg-opacity-10 space-x-10"> 

            <div className="mt-24 h-2/3 w-1/3 bg-opacity-20 rounded-md shadow-lg text-center p-10 bg-red-100">
              <Link href="/farm" >
                <a className="rounded-xl text-6xl mb-10 text-indigo-900 hover:text-indigo-700 hover:bg-opacity-10">
                  Farming
                </a>

              </Link>
              <div className="bg-slate-900 bg-opacity-20 max-w-20 rounded-2xl"><Image src={`/icon_farm.png`} alt="asdf" width={300} height={300}/></div>
              <h1 className="text-3xl text-indigo-900 "> Level: 0</h1>
              </div> 

              <div className="mt-24 h-2/3 w-1/3 bg-opacity-20 rounded-md shadow-lg text-center p-10 bg-red-100">
              <Link href="/mine" >
                <a className=" rounded-xl text-6xl mb-10 text-indigo-900 hover:text-indigo-700 hover:bg-opacity-10">
                  Mining
                </a>

              </Link>
              <div className="bg-slate-900 rounded-2xl bg-opacity-20 max-w-20"><Image src={`/icon_mine.png`} alt="asdf" width={300} height={300}/></div>
                <h1 className="text-3xl">tk</h1>
              </div> 

            </div>
      </div>

 
  )
}



    
  export default Home
    


    function Topbar({}) {
      return (<div className="mt-0 ml-0 w-full flex flex-rows bg-slate-900">

  <div className="ml-5 p-1 rounded-lg bg-teal-900 bg-opacity-80 h-14 mt-4 space-x-11 flex flex-rows">
    <Image src={`/icon_farm.png`} alt="asdf" width={50} height={50} />
      <Image src={`/icon_mine.png`} alt="asdf" width={50} height={50} />
  
   </div>
   

      <div className=" flex justify-end ml-auto">
        <h1 className="text-7xl text-contrast-50 p-3 text-indigo-800">Prodautoma</h1>
        </div>

        </div>);
    }
        