import React from 'react'
import Image from 'next/image'


const CartPage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-red-500  gap-8  lg:flex-row '>
      {/*Products Container*/}
      <div className='h-1/2 p-4 overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/*single item container*/}
        <div className='flex items-center justify-between mb-4 '>
          
            <Image src="/temporary/p1.png" alt="nkar" width={100} height={100} />
         <div>
          <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
          <span>Large</span>
        
          </div> 
           <h2 className='text-xl font-bold'>Price $1.2</h2>
           <span className='cursor-pointer'>x</span>
        </div>
        <div className='flex items-center justify-between mb-4 '>
          
            <Image src="/temporary/p1.png" alt="nkar" width={100} height={100} />
         <div>
          <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
          <span>Large</span>
        
          </div> 
           <h2 className='text-xl font-bold'>Price $1.2</h2>
           <span className='cursor-pointer'>x</span>
        </div>
        <div className='flex items-center justify-between mb-4 '>
          
            <Image src="/temporary/p1.png" alt="nkar" width={100} height={100} />
         <div>
          <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
          <span>Large</span>
        
          </div> 
           <h2 className='text-xl font-bold'>Price $1.2</h2>
           <span className='cursor-pointer'>x</span>
        </div>
      </div>

      {/*paymants Container*/}
       <div className='h-1/2 p-4 bg-fuchsia-50 flex mt-4 flex-col gap-4  justify-center lg:1/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
       <div className='flex justify-between'>
        <span>Subtotal (3 items)</span>
        <span>10.92</span>
        </div>
        <div className='flex justify-between'>
        <span>Service cost (3 items)</span>
        <span>$00.00</span>
        </div>
        <div className='flex justify-between'>
        <span>Delivery Cost</span>
        <span className='text-green-400'>FREE!</span>
        </div>
        <hr  className='my-2'/>
        <div className='flex justify-between'>
        <span>Delivery Cost</span>
        <span className='font-bold'>FREE!</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-[300px] self-end'> Check out</button>
       </div>
      </div>
  )
}

export default CartPage