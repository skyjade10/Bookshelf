import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white bg-blue-800 px-10 py-2 flex justify-between">
      <h2 className=" flex justify-center items-center cursor-pointer text-center">Zee-Library</h2>
      <ul className=" flex flex-row justify-center items-center text-sm gap-2">
        <li className=" cursor-pointer bg-green-600 px-4 py-2 rounded-s-full rounded-e-full 
        text-center hover:bg-green-500">Sign In</li>
        <li className=" cursor-pointer bg-green-600 px-4 py-2 rounded-s-full rounded-e-full 
        text-center hover:bg-green-500">Sign Out</li>
      </ul>
    </nav>
  )
}

export default Navbar