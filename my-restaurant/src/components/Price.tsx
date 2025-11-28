"use client"
import React from 'react'
import { useState,useEffect } from 'react'

type Props  = {
price: number;
id: number;
 options?: { title: string; additionalPrice: number }[];
} 

const Price = ({price,id,options}:Props) => {
  const [total,setTotal] = useState(price);
  const [quantity,setQuantity] = useState(1);
  const [selected,setSelected] = useState(0); 

  useEffect(()=>{
  setTotal(quantity * (price + (options ?price + options[selected].additionalPrice : price)));
  },[quantity,selected,options,price]) 

  return (
    <div className='flex flex-col gap-4'>
       <h2 className='text-2xl font-bold'>${total.toFixed(2)} </h2>
       {/*options container */}
   <div className='flex gap-4'>
{options?.map((option,index)=>(
    <button 
    key={option.title} 
    className='min-w-[6r] m-2 ring-1 ring-red-500 p-2 rounded-md'
    style={{
      background:selected === index ? "red" : "white",
      color:selected === index ? "white" : "red"
    }}
    onClick={()=>{
      setSelected(index);
      const optionPrice = option.additionalPrice;
      setTotal(price + optionPrice);
    } }
    >
    {option.title}
     </button>
))}
   </div>
       {/*quantity and add button container*/}
       <div className='flex justify-between items-center'> 
      <div className='flex justify-between gap-3 w-full p-3 ring-1 ring-red-500'>
        <span>Quantity:</span>
        <div className='flex gap-3 items-center'>
            <button onClick={()=>setQuantity(prev=>(prev>1 ? prev-1 :1))}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={()=> setQuantity(prev=>(prev<9 ? prev+1 :9)) }>{">"}</button>
        </div>
      </div>
      {/*add to cart button*/}
      <button className='uppercase w-56 bg-red-500 text-white p-2 ring-1 ring-red-400 px-4 rounded-md'>
        Add to Cart
      </button>
       </div>
        </div>
  )
}

export default Price