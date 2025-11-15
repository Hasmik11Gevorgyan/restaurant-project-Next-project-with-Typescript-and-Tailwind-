import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'


const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* /wrapper/ */}
      <div className='w-max flex'>
        {/*single cart*/}
        {featuredProducts.map((item) => (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vh] xl:[33vw] xl:h-[70vh] p-4'>
          {/*image container*/}
          {item.img && (
            <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
            <Image src={item.img} alt=""  fill className='object-contain m-4' />
          </div>
          )}
          {/*text container*/}

          <div className='flex-1 flex flex-col gap-4 m-2 justify-center text-center'>
            <h1 className='text-xl font-bold uppercase'>{item.title}</h1>
            <p className='p-4'>{item.desc}</p>
            <span className='text-xl font-bold'>${item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
            </div>
        </div>
        ))}
        

      </div>
    </div>
  )
}

export default Featured
