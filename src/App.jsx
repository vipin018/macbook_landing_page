import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import Macbook from './Macbook'
import { Environment } from '@react-three/drei'
import More from './More'
import Gallery from './Gallery'
import Footer from './Footer'
import Video from './Video'
const App = () => {
  return (
    <>
      <div className='w-full h-full bg-[#c0c0c0]'>
        <div className='navbar line capitalize  pt-10 flex justify-center items-center gap-10 absolute top-0 left-1/2 -translate-x-1/2 text-sm  ' >
          {[
            {
              name: "Store",
              link: "/"
            },
            {
              name: "Iphone",
              link: "/"
            },
            {
              name: "Ipad",
              link: "/about"
            },
            {
              name: "Mac",
              link: "/contact"
            },
            {
              name: "Watch",
              link: "/watch"
            },
            {
              name: "Airpods",
              link: "/airpods"
            },
            {
              name: "Vision",
              link: "/vision"
            },
            {
              name: "TV",
              link: "/tv"
            },
            {
              name: "Entertainment",
              link: "/entertainment"
            },
            {
              name: "Support",
              link: "/support"
            }

          ].map((item, index) => (
            <a key={index} href={item.link}>{item.name}</a>
          ))}
        </div>
        <div className='absolute mt-20 flex flex-col items-center gap-2 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h3 className=' masked text-[7.9em] font-semibold'>Macbook Pro.</h3>
          <h5 className='text-5xl font-semibold'>Lean. Mean. M4 machine.</h5>
          <p className='text-md opacity-50 w-2/3 text-center'>MacBook Pro M4: Because you deserve better than a Start Menu that never actually starts.</p>
        </div>
        <Canvas camera={{ fov: 20, position: [0, -1, 100] }}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            
            
          />
          <Environment 
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/1k/studio_small_09_1k.exr"
          />
          <ScrollControls pages={3}>
            <Macbook />
          </ScrollControls>
        </Canvas>
        <div className='absolute top-[70%] left-[90%] -translate-x-1/2 -translate-y-1/2 -pt-20  '>
          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='w-20 h-20 bg-black rounded-lg overflow-hidden hover:scale-120 transition-all duration-500'> <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
            <div className='w-20 h-20 bg-black rounded-lg overflow-hidden hover:scale-120 transition-all duration-500'> <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1542598953-41310c43f54b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
            <div className='w-20 h-20 bg-black rounded-lg overflow-hidden hover:scale-120 transition-all duration-500'> <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1523688939046-b05f7d854f84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div>
          </div>
        </div>
        <Video />
        {/* <More /> */}
        <Gallery />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App