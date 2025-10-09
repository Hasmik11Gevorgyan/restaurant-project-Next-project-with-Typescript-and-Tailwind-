import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='flex flex-col justify-between h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 items-center'>
      <Link href="/" className='font-bold'>Massimo</Link>
      <p>All rigths reserved</p>
    </div>
  )
}

export default Footer