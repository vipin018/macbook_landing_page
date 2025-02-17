import React from 'react'

const Video = () => {
  return (
    <div className='mt-20 w-full h-full flex justify-center items-center'>
        <video  className='w-[80%] h-[90%] object-cover rounded-xl hover:scale-105 transition-all duration-300' src="/mac_ved.mp4" autoPlay muted loop />
    </div>
  )
}

export default Video