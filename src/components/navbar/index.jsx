/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const NabBar = () => {
  return (
    <>
    <div className='container-full py-3 bg-slate-600'>
        <nav className='flex justify-between w-full px-2 pb-2 text-white'>
            <div className=''>
                <ul className='flex items-start gap-x-5'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tasks">Task View</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className=''>
                <h2><Link to="/">Task View</Link></h2>
            </div>
            <div className=''>
                <ul className='flex items-end gap-x-5'>
                    <li>Link #1</li>
                    <li>Link #1</li>
                    <li>Link #1</li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NabBar