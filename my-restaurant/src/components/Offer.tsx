import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black text-white flex flex-col  items-center justify-center  md:flex-row md:bg-[url("/offerBg.png")] md:h-[70vh] '>
  {/*offer text*/}
  <div className='flex-1 flex flex-col gap-8 justify-center text-center p-6'>
    <h1 className='text-5xl text-white font-bold xl:text-6xl'> Delicious burger and free</h1>
    <p className='text-sm text-white xl:text-xl'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ratione, cumque nam rem placeat similique nobis natus fugit libero recusandae mollitia eius dolor eaque expedita!</p>
    <CountDown/>
    <button className='bg-red-500 py-3 px-6 rounded:md text-white'> Order now</button>
   </div>
  {/*offer image*/}
  <div className='flex-1 w-full relative md:h-full'>
    <Image src="/offerProduct.png" alt="offer" fill className='object-contain ' />
     </div>

    </div>
  )
}

export default Offer