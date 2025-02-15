import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
// import { OrbitControls } from '@react-three/drei'
import Macbook from './Macbook'
import { Environment } from '@react-three/drei'
const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-gray-300'>
        <div className='absolute flex flex-col items-center gap-2 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h3 className=' masked text-9xl font-semibold'>Macbook Pro.</h3>
          <h5 className='text-2xl font-semibold'>Hello, Apple Intelligence.</h5>
          <p className='text-md opacity-50 w-2/3 text-center'>Available in 13-inch and 15-inch sizes with Retina display and Touch Bar.</p>
        </div>
        <Canvas camera={{ fov: 20, position: [0, -1, 100] }}>
          {/* <OrbitControls /> */}
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/1k/studio_small_09_1k.exr"
          />
          <ScrollControls pages={3}>
            <Macbook />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  )
}

export default App