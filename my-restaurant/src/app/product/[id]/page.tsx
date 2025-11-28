import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'

interface SingleProductProps {
  params: {
    id: number | string
  }
}

export default function SingleProduct({ params }: SingleProductProps) {
  const { id } = params
const numericId = Number(id) // կամ parseInt(id)
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {/* image container */}
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[60%]'>
          <Image src={singleProduct.img} alt={singleProduct.title} fill className='object-contain' />
        </div>
      )}

      {/* text container */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[60%] md:justify-center '>
        <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={numericId} options={singleProduct.options} />
      </div>
    </div>
  )
}
