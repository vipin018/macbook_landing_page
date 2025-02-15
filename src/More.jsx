import React from 'react'

const More = () => {
  return (
    <div className=' w-full h-full mt-20 px-10'>
        <div className='flex justify-center items-center gap-5'>
            <div className='left w-1/2 h-full '>
                <img className='w-full h-full object-cover rounded-lg ' src="https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='right w-1/2 h-full flex flex-col gap-5 justify-center items-center '>
               {/* <h3 className='text-2xl font-semibold'>Performance</h3> */}
               <h1 className=' masked text-9xl font-bold'>Pro all out.</h1>
               <p className='text-md text-gray-700 lowercase  items-center w-1/2'>Meet the MacBook Pro with M4—where power meets perfection. While Windows users are stuck troubleshooting updates and chasing missing drivers, we’re busy creating, coding, and conquering. No crashes, no lag—just raw, uninterrupted performance. The most powerful MacBook Pro ever, because waiting is for Windows.</p>
               <button className='bg-black w-1/2 text-lg text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-900 '>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default More