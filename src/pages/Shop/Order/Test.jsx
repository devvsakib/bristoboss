import React, { useState } from 'react'
import { FaCheck, FaPen, FaTimes } from 'react-icons/fa'
const Test = () => {
    const [toggle, setToggle] = useState(false)
    const [val, setVal] = useState('Test')
    return (
        <div className='my-36 px-36'>
            <div>
                <input type="text" value={val} disabled={!toggle && true} onChange={(e)=> setVal(e.target.value)}/>
                {
                    toggle ? <FaCheck onClick={()=> setToggle(!toggle)} className="cursor-pointer" /> : <FaPen onClick={()=> setToggle(!toggle)} className="cursor-pointer"/>
                }
            </div>
        </div>
    )
}

export default Test