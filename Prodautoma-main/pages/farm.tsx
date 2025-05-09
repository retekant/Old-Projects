import Link from "next/link";
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import { render } from "react-dom";




const Home: NextPage = () => {
  //const [icon,setIcon] = useState('farm');
    const[timer,setTimer] = useState(0);
    const[boost, setBoost] = useState(0);
    const [calctime, setCalctime] = useState(0);
    const [time, setTime] = useState("");
    const [level,setLevel] = useState(1);
    const [xp,setXp] = useState(0);
    const [xpgain, setXpgain] = useState(0);
  {/* didnt want to touch this.state and this happened */}
    
   useEffect(() =>{
    let zeros = 0;
    if(calctime>0 ){

      setTimeout(() => setCalctime(calctime-1),1000);
      
      setTime(Math.floor(calctime/60) + ":" + calctime % 60);
      
       if(calctime == 1 ){
       
        setXp(xpgain + xp);
        
        
        
        setCalctime(calctime -1);
       } 
    }

    
   },[calctime])
    
    
  

  return (

    <div className='space-y-20 flex w-full flex-row h-screen  space-x-20 justify-center bg-cream'>
   
      <Toolbar     />

        



       


        
            <div className="p-1 mt-72 ml-24 h-1/2 w-1/3 rounded-xl bg-black bg-opacity-20 items-ceneter flex flex-col items-center space-y-3">
              
              {calctime ? <h1 className=" text-9xl text-white">{time} </h1> : 
              <div>
              <h1 className=" mt-10 text-9xl text-white text-center">Start</h1> 
              <audio src="/ring.mp3"> </audio> </div>
              }
              
              <input
                  onChange={(s) => setTimer(parseInt(s.target.value))}
                  className="w-1/2 h-10 rounded-sm bg-white bg-opacity-20 text-center" 
                  placeholder="Time (In Minutes)"
                  onKeyDown={(s)=> {
                    if(xp >= 100*level){
                      setLevel(level+1);
                    }
                    if (s.key =="Enter"){
                      setCalctime(timer * 60);
                      if(boost == 1){
                        setXpgain(timer * 125);
                      }

                      else {setXpgain(timer * 100);}
                     // setRunning(true);  
                     // console.log(calctime);

                    }
                  }}
                />
                
                <button
                className="w-1/2 bg-white bg-opacity-20 h-10 rounded-sm"
                onClick={() => {setCalctime(timer * 60); 
                 
                  if(boost == 1){
                    setXpgain(timer * 125);
                  } else{setXpgain(timer * 100);}
                
                if(xp >= 100*level){
                  setLevel(level+1);
                }} }
                
                > Start </button>
                <button
                className="w-1/2 bg-white bg-opacity-20 h-10 rounded-sm"
                onClick={() => {location.reload()}}
                > Reset</button>
                </div>
            


            <div className="bg-red-900 bg-opacity-20 w-1/3 h-1/2  flex flex-col rounded-xl items-center">
                <h1 className="mt-10 text-5xl text-white text-center">Level: {level}</h1>
                <h1 className="mt-10 text-3xl text-white text-center">Exp: {xp}</h1>
                <select
                  value={boost}

                  onChange={(s) => setBoost(parseInt(s.target.value))}
                  className="mt-5 emerald-600 rounded-md">
                  <option value={0}> None </option>
                  <option value={1}> * Xp Boost </option>

                </select>
                <h1>{boost}</h1>
            </div>




      </div>

 
  )
}



    
  export default Home
    
 

    function Toolbar({}) {

      return (
      
      <div className="fixed flex flex-row mt-0 ml-0 h-16 w-full text-right bg-farm">
        <div className="flex flex-rows justify-center align-middle h-full">
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 hover:bg-green-600 hover:bg-opacity-10">Home</a></Link>
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 bg-green-600 bg-opacity-15">Farm</a></Link>
        <Link href="/" ><a className="text-3xl p-3 text-emerald-900 text-opacity-70 hover:bg-green-600 hover:bg-opacity-10">Mine</a></Link>

              </div>
      <div className="ml-auto flex flex-row"><h1 className="text-3xl  text-emerald-900 text-opacity-70 p-3">Prodautoma</h1>
        <div className='mr-10 mt-2 bg-green-500 w-20 h-12 p-2 rounded-lg flex justify-center '>
          <Image src={`/icon_farm.png`}
           alt="asdf"
            width={35} 
            height={10} 
            /></div></div>
        
        
        </div>);
    }

   
          