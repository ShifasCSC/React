import React from 'react'

function Nav() {
  return (
    <div>
        <div className="nav flex justify-between p-2 px-10 items-center text-center bg-slate-600 ">
            <div className="right">
                <h1 className='text-4xl font-serif text-white '>cowara</h1>
            </div>
            <div className="left">
                <ul className='text-gray-300'>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav