import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full h-full'>
            <div className='footer w-full flex flex-col justify-center items-center mt-10 tracking-widest'>
                <h2 className='text-[10rem] font-bold'>MacBook Pro</h2>
                <button className='bg-black text-white px-4 py-2 rounded-lg hover:scale-110 transition-all duration-900 flex items-center gap-2'>Buy Now <img className='w-5 h-5  ' src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default Footer