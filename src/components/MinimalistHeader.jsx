import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


const MinimalistHeader = () => {
  return (
    <div className=' w-full flex justify-center items-center h-screen bg-amber-50 ' >
      
      <DotLottieReact
      src="https://lottie.host/6df8ff1f-65a4-498e-a80f-5e2b1f1c6dc0/qjMtTmCXOa.json"
      loop
      autoplay
      className='h-50 w-50'
    />
    </div>
  )
}

export default MinimalistHeader