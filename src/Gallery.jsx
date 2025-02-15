import React from 'react'

const Gallery = () => {
  return (
    <div>
        <div className='w-full h-full relative '>
          <h1 className=' gallery text-8xl font-bold text-center pt-10 pb-10'> Product Gallery </h1>
          <div className='w-full h-full flex justify-around relative items-center gap-3 flex-wrap overflow-hidden p-10'>
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1683995781335-aea2678991bb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1614630536369-2516d7c0a58c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1543652437-15ae836b33e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1621403173814-107f2fb34311?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1650265424401-9d34eecae180?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-[50vh] h-[60vh] object-cover shadow-xl rounded-lg hover:scale-110 transition-all duration-600  ' src="https://images.unsplash.com/photo-1650285110415-3561055fdd67?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Gallery