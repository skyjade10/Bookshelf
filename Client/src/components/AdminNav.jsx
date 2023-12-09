
import React from 'react'

const AdminNav = () => {

 const navListClass = " border-b-2 pt-2 cursor-pointer hover:bg-blue-400 px-2"
  return (
    <div className=' text-white h-screen flex flex-col justify-top items-start text-md bg-blue-500 px-2 pt-2
     '>
        <ul className=' w-full'>
            <li className={` ${navListClass}`}>Books</li>
            <li className={` ${navListClass}`}>Add Books</li>
            <li className={` ${navListClass}`}>Remove Book</li>
            <li className={` ${navListClass}`}>Edit Book</li>
        </ul>
    </div>
  )
}

export default React.memo(AdminNav) 