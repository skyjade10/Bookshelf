
import React from 'react'


const Main = ({nav,sect}) => {
  return (
    <div className=' h-screen w-full md:grid grid-cols-[20%,80%] gap-2 mt-2 py-2'>
        <div className=' border-e-2'>
            {nav}
        </div>
        <div className=' flex flex-wrap gap-2 py-2 me-2 overflow-y-auto'>
            {sect}
        </div>
    </div>
  )
}

export default Main