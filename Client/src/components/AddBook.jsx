
import React, { useRef, useState} from 'react'
import cover from '../assets/potter.jpg'

const Minput = ({labelm,handler,name,mtype}) => {
    return (
        <div className=' flex flex-row justify-center items-center mx-4'>
            <p className=' text-gray-900 me-4'>{`${labelm} :`}</p>
            <input className=' outline-none text-gray-700 border-b-2 text-sm' name={name}  type={mtype} onChange={handler}/>
        </div>
    )
}
const AddBook = () => {

    const [bookDetails, setBookDetails] = useState({})

    const handleChange = (e) => {
        let mName = e.target.name;
        let mValue = e.target.value
        console.log(mName,mValue)
        setBookDetails((prevState) => ({...prevState, [e.target.name]:mValue }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(bookDetails)

    }

  return (
    <div className=' w-full '>
        
        <form className=' flex flex-col justify-top items-center' onSubmit={handleSubmit}>
            <div className=' w-60'>
                <img src={cover} alt="" />
            </div>
            <div className=' flex flex-wrap w-1/2 justify-start items-center mt-2'>
                
                <Minput labelm={'Book Title'} name="title" mtype={'text'} handler={handleChange}/>
                <Minput labelm={'ISBN No.'} name="isbn" mtype={'text'} handler={handleChange}/>
                <Minput labelm={'Category'} name="category" mtype={'text'} handler={handleChange}/>
                <Minput labelm={'Row'} name="row" mtype={'number'} handler={handleChange}/>
                <Minput labelm={'Cost'} name="cost" mtype={'number'} handler={handleChange}/>
            </div>
            <p>availability</p>
            <input type="checkbox" name="available" id="avail" onChange={handleChange}/>
            <button className='my-4 bg-blue-800 text-white px-6 py-2 rounded-s-full rounded-e-full hover:bg-blue-600' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddBook