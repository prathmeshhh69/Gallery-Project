import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import {ArrowRight} from 'lucide-react'
import {ArrowLeft} from 'lucide-react'


const App = () => {
 
  const [image,setImage]=useState([])
  const [index, setIndex]=useState(1)
  async function getdata(){
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setImage(response.data)

  }
  useEffect(function(){
    getdata()
  }, [index])
  let printimage=<h2 className='text-thin font-bold text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading......</h2>
  if(image.length>0){
    printimage=image.map(function(elem, idx){
      return<div key={idx}> 
       <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto  text-white p-4 '>
     
      <div className='flex flex-wrap gap-5.5'>
        {printimage}
      </div>
      <div className='flex justify-center gap-6 p-4 mt-6 '>
        <button onClick={()=>{
          if(index>1){
           setIndex(index-1)
           setImage([])
          }
        }} style ={{opacity: index==1?0.5:1}} className='bg-amber-300 text-black text-xl w-30 h-14 px-6 py-2 rounded cursor-pointer active:scale-95'> <ArrowLeft />Prev</button>
        <h3 className='mt-4'>Page {index}</h3>
        <button onClick={()=>{
          setImage([])
          setIndex(index+1)
        }}style={{opacity: index==30?0.5:1}} className='bg-amber-300 text-black text-xl w-30 h-14 px-6 py-1 rounded cursor-pointer active:scale-95'>Next <ArrowRight /></button>
      </div>
     
    </div>
  )
}

export default App
