import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full  border-separate border-spacing-y-3'>
       <thead>
       <tr className='text-left'>
        <th className='hidden md:block'>order Id</th>
        <th>Date</th>
        <th>Price</th>
        <th className='hidden md:block'>Products</th>
        <th>Status</th>
        
       </tr>
       </thead>
       <tbody>
      <tr className='text-sm md:text-base bg-red-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1 text-green-400'>Delivered</td>
      </tr>
      <tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr>
      <tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr><tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr><tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr><tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr><tr className='text-sm md:text-base odd:bg-gray-100'>
        <td className='hidden md:block py-6 px-1'>#123456</td>
        <td className='py-6 px-1'>2024-06-15</td>
        <td className='py-6 px-1'>$45.00</td>
        <td className='hidden md:block'>Pizza, Salad</td>
        <td className='py-6 px-1'>Delivered</td>
      </tr>
       </tbody>
      </table>
      
      Orders</div>
  )
}

export default OrdersPage