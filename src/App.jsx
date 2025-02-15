import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Macbook from './Macbook'
import { Environment } from '@react-three/drei'
const App = () => {
  return (
    <Canvas camera={{ fov:20, position: [0, -1, 100 ] }}>
      <OrbitControls />
      <Environment 
      files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/1k/studio_small_09_1k.exr"
      />
      <Macbook />
    </Canvas>
  )
}

export default App