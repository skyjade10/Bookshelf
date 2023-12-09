import React from 'react'
import cover from '../assets/potter.jpg'

const BookCard = () => {
  return (
    <div className=' w-[250px] p-2 rounded-md shadow-md shadow-slate-500 bg-slate-50'>
        <div className=' flex justify-center'>
            <img className='' src={cover} alt="" />
        </div>
        <div>
            <p className=' text-blue-600 text-md w-full text-end'>$250</p>
            <h5 className=' line-clamp-2'>Harry Potter</h5>
            <p className='text-sm text-gray-800 text-clip '>Fantasy</p>
            <p className='text-sm text-gray-800 text-clip '>ISBN 978-3-16-148410-0</p>
            <p className='text-sm text-gray-800 text-clip '>Book No. 246</p>
            <p className='text-sm text-gray-800 text-clip '>Row No. 232</p>
            <p className='text-sm text-green-800 text-clip t'>Available</p>
        </div>
    </div>
  )
}

export default React.memo(BookCard) 